let myInputs = []

const deleteBtn = document.getElementById("delete-btn")
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

let inputsFromLocalStorage = JSON.parse(localStorage.getItem("myInputs"))

if (inputsFromLocalStorage) {
  myInputs = inputsFromLocalStorage
  render(myInputs)
}

inputBtn?.addEventListener("click", function() {
  myInputs.push(inputEl.value)
  inputEl.value = ""
  localStorage.setItem("myInputs", JSON.stringify(myInputs))
  render(myInputs)
})

deleteBtn?.addEventListener("dblclick", function() {
  myInputs = []
  localStorage.clear()
  render(myInputs)
})

function render(inputs) {
  let listItems = ""
  for (let i=0; i<inputs.length; i++) {
    listItems += `<li>${inputs[i]}</li>`
  }
  ulEl.innerHTML = listItems
}
