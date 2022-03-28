let icon = document.getElementById("day-icon");
let header = document.getElementById("header");
let checkSymbol = document.querySelectorAll(".check-symbol");
let check = document.querySelectorAll(".check");
let inputText = document.querySelectorAll(".input-text");
let cross = document.querySelectorAll(".cross");
let listItem = document.querySelectorAll(".list-item");
let addTodo = document.getElementById("add-todo");
let todoForm = document.getElementById("todo-form");
let itemToggler = document.querySelectorAll(".items-toggler");
let createList = document.querySelector(".create-list");
let list = [];

icon.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    icon.src = "images/icon-sun.svg";
    header.style.backgroundImage = "url('../images/bg-desktop-dark.jpg')";
  } else {
    icon.src = "images/icon-moon.svg";
    header.style.backgroundImage = "url('../images/bg-desktop-light.jpg')";
  }
});


for (let i = 0; i < itemToggler.length; i++) {
  itemToggler[i].addEventListener("click", function () {
    [...itemToggler[i].parentElement.children].forEach((sib) =>
      sib.classList.remove("active-item")
    );
    itemToggler[i].classList.add("active-item");
  });
}

function makeList() {
    let todoList = list.map(
        (item) => `<li class="list-item">
      <span class="check check-border" id="check">
        <img
          src="images/icon-check.svg"
          alt="check"
          id="check-symbol"
          class="check-symbol"
        />
      </span>
      <span id="input-text" class="input-text">${item.add}</span>
      <img src="images/icon-cross.svg" alt="cross" class="cross" />
      </li>`
      ).join("");
      createList.innerHTML += todoList;
}
for (let i = 0; i < check.length; i++) {
    check[i].addEventListener("click", function () {
      check[i].classList.toggle("check-active");
      check[i].classList.toggle("check-border");
      checkSymbol[i].classList.toggle("check-symbol-active");
      inputText[i].classList.toggle("input-text-decoration");
    });
  }
  
for (let i = 0; i < cross.length; i++) {
    cross[i].addEventListener("click", function () {
      listItem[i].style.display = "none";
    });
  }

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();

    if(!addTodo.value) {
        alert("please try something");
    } else {
        list.push({add: addTodo.value});
        makeList();
        console.log(list);
        console.log(addTodo.value);
        addTodo.value = "";
    }

});
