const btnDel = document.querySelectorAll(".btn-del")
const btnAdd = document.querySelector(".btn-add")
const btnClear = document.querySelector(".btn-clear")
const listContainer = document.querySelector('.list-container');
const inp = document.querySelector('#inpTodo')

window.addEventListener("load", () => {
    cntList()
});

// 추가
btnAdd.addEventListener('click', () => {
    const li = document.createElement('li')
    li.setAttribute('class', 'list-item')
    let input = inp.value;
    let idNum = listContainer.childElementCount + 1;
    let item = `<label for="chckList${idNum}"></label>
                <input id="chckList${idNum}" type="checkbox">
                <p>${input}</p>
                <button class="btn-del" type="button">삭제</button>`
    li.innerHTML = item
    listContainer.append(li)
    inp.value = '' // 입력창 초기화
    cntList()    // 리스트 개수 갱신
})

// 삭제
listContainer.addEventListener('click', (e) => {
    if (e.target.type === 'button' && e.target.className === 'btn-del') {
        e.target.parentElement.remove()
        cntList() // 리스트 개수 갱신
    }
})

// 리스트 개수 세기
const cntList = () => {
    const span = document.querySelector('.cnt')
    const cnt = listContainer.childElementCount
    span.textContent = `${cnt} 개`;
}

// 전체 삭제
btnClear.addEventListener('click', () => {
    // console.log(listContainer.children)
    while (listContainer.firstChild) {
        listContainer.firstChild.remove()
        console.log(listContainer.firstChild)
    }
    cntList()
})