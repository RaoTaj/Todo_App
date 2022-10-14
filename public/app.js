var list = document.getElementById("list");

function todo() {
    var todo_item = document.getElementById("todoapp");


    
    var li = document.createElement('li')
    var liText = document.createTextNode(todoapp.value)
    li.appendChild(liText)

    
    var delBtn = document.createElement("button")
    var delText = document.createTextNode("DELETE")
    delBtn.setAttribute("class", "btn")
    delBtn.setAttribute("onclick", "deleteItem(this)")
    delBtn.appendChild(delText)

    
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("EDIT")
    editBtn.appendChild(editText)
    editBtn.setAttribute("onclick", "editItem(this)")


    li.appendChild(delBtn)
    li.appendChild(editBtn)

    list.appendChild(li)

    todoapp.value = ""
}

function deleteItem(e) {
    e.parentNode.remove()
}

function editItem(e) {
  var val = prompt("Enter updated value",e.parentNode.firstChild.nodeValue)
  e.parentNode.firstChild.nodeValue = val;
}

function delall() {
    list.innerHTML = ""
}