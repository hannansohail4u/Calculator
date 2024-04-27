function addValue(num){
    var inputfield = document.getElementById("inputfield")
    inputfield.value += num
}

function result() {
    var inputfield = document.getElementById("inputfield")
    inputfield.value = eval(inputfield.value)
}

function allClearValue() {
    var inputfield = document.getElementById("inputfield")
    inputfield.value = ""
}


function singleClearValue() {
    var inputfield = document.getElementById("inputfield")
    inputfield.value = inputfield.value.slice(0, -1)
}