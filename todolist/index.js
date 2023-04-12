const btnDel = document.querySelectorAll(".btn-del")
const btnAdd = document.querySelector(".btn-add")
const btnClear = document.querySelector(".btn-clear")
const listContainer = document.querySelector('.list-container');
const inp = document.querySelector('#inpTodo')

btnAdd.addEventListener('click', () => {
    const li = document.createElement('li')
    let input = inp.value;
    let idNum = listContainer.childElementCount + 1;
    let item = `<li class="list-item">
                    <label for="chckList${idNum}"></label>
                    <input id="chckList${idNum}" type="checkbox">
                    <p>${input}</p>
                    <button class="btn-del" type="button">삭제</button>
                </li>`
    li.innerHTML = item
    listContainer.append(li)
    inp.value = ''
})

listContainer.addEventListener('click', (e) => {
    if (e.target.type === 'button' && e.target.className === 'btn-del') {
        e.target.parentElement.remove()
    }
})

