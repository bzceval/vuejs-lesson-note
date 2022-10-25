const todoText = document.querySelector("#todoText")
const addBtn = document.querySelector("#addBtn")
const taskList = document.querySelector("#taskList")

addBtn.addEventListener("click", () => {
    const listItem = document.createElement("li")
    listItem.textContent = todoText.value
    taskList.appendChild(listItem)
}) 