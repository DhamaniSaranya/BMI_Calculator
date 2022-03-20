let buttoon = document.querySelector("button");
let id = 0;
buttoon.addEventListener("click", function (e)
{
    let todo_list = document.querySelector('.todos');
    let input = document.querySelector('input');
    let para = document.createElement("p");
    para.innerHTML = input.value;
    para.setAttribute("key", id);
    todo_list.appendChild(para)
    input.value = ""
    id+= 1;
    document.querySelector(`p[key="${id-1}"]`).addEventListener("click", function(e)
    {
        let todolist = document.querySelector('.todos');
        todolist.removeChild(this);
    })
});