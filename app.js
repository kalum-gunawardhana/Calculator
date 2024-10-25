function login() {
    const userName = "saman";
    const password = "12345";

    let textUserNameValue = document.getElementById("textUserName").value;
    let textPasswordValue = document.getElementById("textPassword").value;

    if (textUserNameValue == userName && textPasswordValue == password) {
        alert("Login succses!");
    } else {
        alert("Login faild!");
    }

    let number = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

    let num = 0;

    // for(let i=0; i<number.length; i++){
    //     console.log(number[i]);
    //     num+=number[i];
    // }

    // console.log(num);

    // for (let value of number) {
    //     console.log(value);
    //     num+=value;
    // }

    // console.log(num);

    let sum = 0;
    number.forEach(numbers => { sum += numbers });
    console.log(sum);

    number.forEach(numbers => { document.write(`<h1>${numbers}<h1>`) });

    let isTrue = 10 == "10";
    console.log(isTrue);

    isTrue = 10 === "10";
    console.log(isTrue);

}
function clac() {
    let number = document.getElementById("textNumber").value;
    // let number2 = Number(document.getElementById("textNumber2").value);
    // let operator = document.getElementById("textOperator").value;
    let output = document.getElementById("output");

    // console.log(typeof number1);
    
    // let answer;

    // if (operator === "+") {
    //     answer = number1 + number2;
    // } else if (operator === "-") {
    //     answer = number1 - number2;
    // } else if (operator === "*") {
    //     answer = number1 * number2;
    // } else if (operator === "%") {
    //     answer = number1 % number2;
    // }

    // // console.log(typeof number1);
    let sunm= eval(number);
    desOut.innerHTML=("Answer--> "+sunm);

    
}