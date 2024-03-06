//Write a program to perform functionality of a calculator (add,sub,multiply,divide)


function calculator (f1, f2, f3, f4){
    const op = prompt('enter the opertation');
    const input1 = Number(prompt('input1: '));
    const input2 = Number(prompt('input2: '));

    switch (op) {
        case 'sum':
            console.log(f1(input1, input2));
            break;
        case 'sub':
            console.log(f2(input1, input2));
            break;
        case 'multiply':
            console.log(f3(input1, input2));
            break;
        case 'division':
            console.log(f4(input1, input2));
            break;
    }
}


const sub = (a, b) => a-b;
const multiply = (a, b) => a*b;
const divide = (a, b) => a/b;
const sum = (a, b) => a+b;

calculator(sum, sub, multiply, divide);