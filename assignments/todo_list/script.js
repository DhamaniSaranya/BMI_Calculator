let todoList;
featchItem();
document.querySelector("#btn1").addEventListener("click", () => {
    loadItems(todoList);
});
document.querySelector("#btn2").addEventListener("click", () => {
    let completedTodoList = todoList.filter(ele => ele.completed);
    loadItems(completedTodoList);
});
document.querySelector("#btn3").addEventListener("click", () => {
    let pendingTodoList = todoList.filter(ele => !ele.completed);
    loadItems(pendingTodoList);
});
function featchItem() {
    let xml = new XMLHttpRequest;
    xml.open("GET", "https://jsonplaceholder.typicode.com/todos", true);

    xml.onload = function () {
        todoList = JSON.parse(this.responseText);
        loadItems(todoList);
    }
    xml.send();
}
function loadItems(list) {
    let todoArea = document.querySelector("#todoArea");
    let html = "";
    list.forEach(ele => {
        let val
        if (ele.completed) {
            val = "Completed"
        }
        else {
            val = "Pending"
        }
        html += `<div class="card" style="width: 18rem; margin: 10px">
        <div class="card-body">
            <h5 class="card-title">${ele.title}</h5>
            <p class="card-text">User Id :  ${ele.userId}</p>
            <p class="card-text">Id :  ${ele.id}</p>
            <p class="card-text">Status : ${val}</p>
        </div>
        </div>`;
    });
    todoArea.innerHTML = html;
}