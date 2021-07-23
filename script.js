const btn = document.querySelector('button')
const input = document.querySelector('input')
const reset = document.querySelector('#reset')

if (localStorage.getItem('TD') == null) {
    localStorage.setItem('TD', JSON.stringify([]))
}
if (localStorage.getItem('D') == null) {
    localStorage.setItem('D', JSON.stringify([]))
}

var todolist = JSON.parse(localStorage.getItem('TD'))
var donelist = JSON.parse(localStorage.getItem('D'))

todolist.forEach(element => {
    addToDoList_Init(element)
});

donelist.forEach(element => {
    addDoneList_Init(element)
});

function setLocal() {
    localStorage.TD = JSON.stringify(todolist)
    localStorage.D = JSON.stringify(donelist)
}

function addToDoList() {
    if (input.value == '') {
        alert("Task cannot be empty");
    }
    else {
        todolist.push(input.value)
        setLocal()
        const newDiv = document.createElement('div')
        const smallerDiv = document.createElement('div')
        const text = document.createElement('p')
        const done = document.createElement('button')
        const del = document.createElement('button')

        newDiv.classList = 'flex block p-2 my-2 justify-between items-center bg-white rounded-md'

        smallerDiv.classList = 'space-x-3'

        text.innerHTML = input.value
        input.value = ''
        text.classList = 'text-3xl'

        done.classList = 'button p-2 text-3xl rounded-md bg-green-400'
        done.innerText = 'Done'
        done.style.visibility = "hidden"

        del.classList = 'button p-2 text-3xl rounded-md bg-red-400'
        del.innerText = 'Delete'
        del.style.visibility = "hidden"

        smallerDiv.append(done)
        smallerDiv.append(del)
        newDiv.append(text)
        newDiv.append(smallerDiv)

        const toDoListDiv = document.querySelector('#ToDoList')
        toDoListDiv.append(newDiv)

        newDiv.addEventListener('mouseover', () => {
            done.style.visibility = "visible"
            del.style.visibility = "visible"
        })

        newDiv.addEventListener('mouseout', () => {
            done.style.visibility = "hidden"
            del.style.visibility = "hidden"
        })

        del.addEventListener('click', () => {
            todolist.splice(todolist.indexOf(text.innerText), 1)
            setLocal()
            newDiv.remove()
        })

        done.addEventListener('click', () => {
            todolist.splice(todolist.indexOf(text.innerText), 1)
            addDoneList(text.innerText)
            newDiv.remove()
        })
    }
}

function addToDoList_Init(textAdd) {
    const newDiv = document.createElement('div')
    const smallerDiv = document.createElement('div')
    const text = document.createElement('p')
    const done = document.createElement('button')
    const del = document.createElement('button')

    newDiv.classList = 'block flex p-2 my-2 justify-between items-center bg-white rounded-md'

    smallerDiv.classList = 'space-x-3'

    text.innerHTML = textAdd
    text.classList = 'text-3xl'

    done.classList = 'button p-2 text-3xl rounded-md bg-green-400'
    done.innerText = 'Done'
    done.style.visibility = "hidden"

    del.classList = 'button p-2 text-3xl rounded-md bg-red-400'
    del.innerText = 'Delete'
    del.style.visibility = "hidden"

    smallerDiv.append(done)
    smallerDiv.append(del)
    newDiv.append(text)
    newDiv.append(smallerDiv)

    const toDoListDiv = document.querySelector('#ToDoList')
    toDoListDiv.append(newDiv)

    newDiv.addEventListener('mouseover', () => {
        done.style.visibility = "visible"
        del.style.visibility = "visible"
    })

    newDiv.addEventListener('mouseout', () => {
        done.style.visibility = "hidden"
        del.style.visibility = "hidden"
    })

    del.addEventListener('click', () => {
        todolist.splice(todolist.indexOf(text.innerText), 1)
        newDiv.remove()
    })

    done.addEventListener('click', () => {
        todolist.splice(todolist.indexOf(text.innerText), 1)
        addDoneList(text.innerText)
        newDiv.remove()
    })
}

function addDoneList(newText) {
    donelist.push(newText)
    setLocal()
    const newDiv = document.createElement('div')
    const text = document.createElement('p')
    const svg = document.createElement('img')

    text.innerText = newText
    text.classList = 'text-3xl'
    text.style.textDecoration = 'line-through'

    svg.src = "/src/img/check.png"
    svg.style.width = '5%'

    newDiv.classList = 'flex p-3 my-2 justify-between bg-green-500 rounded-md'

    newDiv.append(text)
    newDiv.append(svg)

    const DoneListDiv = document.querySelector('#DoneList')
    DoneListDiv.append(newDiv)
}

function addDoneList_Init(textAdd) {
    const newDiv = document.createElement('div')
    const text = document.createElement('p')
    const svg = document.createElement('img')

    svg.src = "/src/img/check.png"
    svg.style.width = '5%'

    text.innerText = textAdd
    text.classList = 'text-3xl'
    text.style.textDecoration = 'line-through'

    newDiv.classList = 'flex p-3 my-2 justify-between bg-green-500 rounded-md'

    newDiv.append(text)
    newDiv.append(svg)

    const DoneListDiv = document.querySelector('#DoneList')
    DoneListDiv.append(newDiv)
}

input.addEventListener('keyup', (evnt) => {
    if (evnt.keyCode == 13)
        addToDoList()
})

btn.addEventListener('click', addToDoList)

reset.addEventListener('click' , () => {
    localStorage.clear()
    location.reload()
})