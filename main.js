var input1 =document.getElementById('input-1');
var input2 =document.getElementById('input-2');

function clear(){
    input1.value = "";
    input2.value = "";
}
// addition

function addition() {
    var sum = parseFloat(input1.value) + parseFloat(input2.value);
    document.getElementById('sum').innerHTML = sum;

    clear();

}
// subtraction
function subtraction() {
    var sum = parseFloat(input1.value) - parseFloat(input2.value);
    document.getElementById('sum').innerHTML = sum;

    clear();

}
// multiplication
function multiplication() {
    var sum = parseFloat(input1.value) * parseFloat(input2.value);
    document.getElementById('sum').innerHTML = sum;

    clear();
}

// division
function division() {
    var sum = parseFloat(input1.value) / parseFloat(input2.value);
    document.getElementById('sum').innerHTML = sum;

    clear();
}


