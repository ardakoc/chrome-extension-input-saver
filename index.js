const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn?.addEventListener("click", function() {
  renderInput(inputEl.value)
  inputEl.value = ""
})


function renderInput(input) {
  ulEl.innerHTML += "<li>" + input + "</li>"
}
