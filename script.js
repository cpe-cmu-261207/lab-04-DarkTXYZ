const btn = document.querySelector('button')
const input = document.querySelector('input')

function addToDoList() {

    if (input.value == '') {
        alert("Task cannot be empty");
    }
    else {
        const newDiv = document.createElement('div')
        const smallerDiv = document.createElement('div')
        const text = document.createElement('p')
        const done = document.createElement('button')
        const del = document.createElement('button')

        newDiv.classList = 'flex p-2 my-2 justify-between bg-white rounded-md'

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

        newDiv.addEventListener('mouseover' , () => {
            console.log('in')
            done.style.visibility = "visible"
            del.style.visibility = "visible"
        })
        newDiv.addEventListener('mouseout', () => {
            console.log('out')
            done.style.visibility = "hidden"
            del.style.visibility = "hidden"
        })

        del.addEventListener('click', () => {
            newDiv.remove()
        })

        done.addEventListener('click', () => {
            const DoneListDiv = document.querySelector('#DoneList')
            DoneListDiv.append(newDiv)
        })
    }
}

input.addEventListener('keyup', (evnt) => {
    if (evnt.keyCode == 13)
        addToDoList()
})

btn.addEventListener('click', addToDoList)