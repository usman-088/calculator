

function calc(n) {

    var input = document.getElementById("in");

    var b = ['+','-','*','/']
    var lastNo =  input.value.slice(input.value.length-1)
    if(b.indexOf(lastNo)!== -1 && b.indexOf(n) !== -1){
        var c = input.value.slice(0,input.value.length-1)
        input.value = c+n
    }else if (n == "C") {
        input.value = ""
        
    }else{
        input.value += n
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