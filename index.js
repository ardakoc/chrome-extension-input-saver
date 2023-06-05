let myInputs = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
let inputsFromLocalStorage = JSON.parse(localStorage.getItem("myInputs"))

if (inputsFromLocalStorage) {
  myInputs = inputsFromLocalStorage
  renderInputs()
}

inputBtn?.addEventListener("click", function() {
  myInputs.push(inputEl.value)
  inputEl.value = ""
  localStorage.setItem("myInputs", JSON.stringify(myInputs))
  renderInputs()
})


function renderInputs() {
  let listItems = ""
  for (let i=0; i<myInputs.length; i++) {
    listItems += `<li>${myInputs[i]}</li>`
  }
  ulEl.innerHTML = listItems
}
