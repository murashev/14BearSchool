// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let myModalBtn = document.getElementsByClassName("myModalBtn");

// Get the <span> element that closes the modal
let close = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
for (let i = 0; i < myModalBtn.length; i++) {
   myModalBtn[i].addEventListener('click', function () {
      openModalWindow();
   })
}

close.addEventListener('click', function () {
   closeModalWindow();
})

//это функция, которая открывает окно
function openModalWindow() {
   modal.style.display = "block";
}

//это функция, которая закрывает окно
function closeModalWindow() {
   modal.style.display = "none";
}

