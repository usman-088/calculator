

function calc(n) {

    var input = document.getElementById("in");

    input.value += n

    if (n == "C") {
        input.value = ""
    }


}

function calculate() {

   var  input = document.getElementById("in")

    input.value = eval(input.value)

}



function last() {
    var input = document.getElementById("in")

    input.value = input.value.slice(0, input.value.length - 1)

}