// Write a program to find all pairs of an integer array whose sum is equal to a given number?

function findPairs(array, targetSum) {
    const pairs = [];
    const numMap = {};

    for (let num of array) {
        const complement = targetSum - num;
        if (numMap[complement]) {
            for (let pair of numMap[complement]) {
                pairs.push([pair, num]);
            }
        }
        if (numMap[num]) {
            numMap[num].push(num);
        } else {
            numMap[num] = [num];
        }
    }

    return pairs;
}


const arr = [2, 4, 5, 7, 8, 9, 10];
const target = 12;
const result = findPairs(arr, target);

console.log("-------------Write a program to find all pairs of an integer array whose sum is equal to a given number?-------------\n");

console.log(`Pairs with sum ${target}:`, result);
console.log();
console.log("---------------------------- * ------------------------- * ------------------- * --------------- * --------------n");


//  Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.

function reverseArrayInPlace(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }

    return arr;
}


const array = [1, 2, 3, 4, 5];
console.log("------------Write a program to reverse an array in place? --------------\n");

console.log("Original array:", array);
reverseArrayInPlace(array);
console.log("Reversed array:", array);
console.log();
console.log("---------------------------- * ------------------------- * ------------------- * --------------- * --------------n");
console.log();

// Write a program to check if two strings are a rotation of each other?

function areStringsRotations(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const concatenatedStr = str1 + str1;
    if (concatenatedStr.includes(str2)) {
        return true;
    }

    return false;
}


const string1 = "rotation";
const string2 = "tionrota";
console.log("--------------Write a program to check if two strings are a rotation of each other?------------\n");
console.log();
console.log(`Are "${string1}" and "${string2}" rotations of each other?`);
console.log(areStringsRotations(string1, string2) ? "Yes" : "No");
console.log();
console.log("---------------------------- * ------------------------- * ------------------- * --------------- * --------------n");
console.log();

// Write a program to print the first non-repeated character from a string?

function findFirstNonRepeatedChar(str) {
    const charCount = {};

    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null; // If no non-repeated character is found
}

console.log("-------------Write a program to print the first non-repeated character from a string?-------------\n");
console.log();
const string = "abracadabra";
const firstNonRepeatedChar = findFirstNonRepeatedChar(string);
console.log(`First non-repeated character in "${string}": ${firstNonRepeatedChar}`);
console.log();
console.log("---------------------------- * ------------------------- * ------------------- * --------------- * --------------n");
console.log();


//  Read about the Tower of Hanoi algorithm. Write a program to implement it.

function towerOfHanoi(n, source, destination, spare) {
    if (n === 1) {
        console.log(`Move disk 1 from ${source} to ${destination}`);
        return;
    }

    towerOfHanoi(n - 1, source, spare, destination);
    console.log(`Move disk ${n} from ${source} to ${destination}`);
    towerOfHanoi(n - 1, spare, destination, source);
}


const numDisks = 3;
const sourcePeg = 'A';
const destinationPeg = 'C';
const sparePeg = 'B';
console.log("-------------Read about the Tower of Hanoi algorithm. Write a program to implement it.-------------\n");
console.log();
console.log(`Tower of Hanoi with ${numDisks} disks:`);
towerOfHanoi(numDisks, sourcePeg, destinationPeg, sparePeg);
console.log();
console.log("---------------------------- * ------------------------- * ------------------- * --------------- * --------------n");
console.log();
// Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.

function postfixToPrefix(expression) {
    const stack = [];
    const operators = new Set(['+', '-', '*', '/', '^']);

    for (let char of expression) {
        if (!operators.has(char)) {
            stack.push(char);
        } else {
            const operand2 = stack.pop();
            const operand1 = stack.pop();
            stack.push(char + operand1 + operand2);
        }
    }

    return stack.pop();
}


const postfixExpression = "23+4*";
const prefixExpression = postfixToPrefix(postfixExpression);
console.log("-----Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.------\n");
console.log();
console.log("Postfix expression:", postfixExpression);
console.log("Prefix expression:", prefixExpression);
console.log();
console.log("---------------------------- * ------------------------- * ------------------- * --------------- * --------------\n");
console.log();



// Write a program to convert prefix expression to infix expression.

function isOperator(char) {
    const operators = new Set(['+', '-', '*', '/', '^']);
    return operators.has(char);
}

function prefixToInfix(expression) {
    const stack = [];

    for (let i = expression.length - 1; i >= 0; i--) {
        const char = expression[i];

        if (isOperator(char)) {
            const operand1 = stack.pop();
            const operand2 = stack.pop();
            const infixExpression = `(${operand1}${char}${operand2})`;
            stack.push(infixExpression);
        } else {
            stack.push(char);
        }
    }

    return stack.pop();
}
console.log("-------------Write a program to convert prefix expression to infix expression.-------------")
console.log();
const PrefixExp = "*+234";
const infixExpression = prefixToInfix(PrefixExp);
console.log("Prefix expression:", PrefixExp);
console.log("Infix expression:", infixExpression);
console.log();
console.log("---------------------------- * ------------------------- * ------------------- * --------------- * --------------n");
console.log();
// Write a program to check if all the brackets are closed in a given code snippet.

function areBracketsClosed(codeSnippet) {
    const stack = [];
    const openingBrackets = new Set(['(', '[', '{']);
    const closingBrackets = new Set([')', ']', '}']);
    const bracketPairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let char of codeSnippet) {
        if (openingBrackets.has(char)) {
            stack.push(char);
        } else if (closingBrackets.has(char)) {
            if (stack.length === 0) {
                return false; // Found a closing bracket without a corresponding opening bracket
            }

            const top = stack.pop();
            if (bracketPairs[char] !== top) {
                return false; // Closing bracket does not match the expected opening bracket
            }
        }
    }

    return stack.length === 0; // All brackets should be closed
}


const code = "(var x = [1, 2, {a: 'foo'}];)";
console.log();
console.log("------------Write a program to check if all the brackets are closed in a given code snippet.--------------\n");
console.log();
console.log("Code snippet:", code);
console.log("Are all brackets closed?", areBracketsClosed(code) ? "Yes" : "No");
console.log();
console.log("---------------------------- * ------------------------- * ------------------- * --------------- * --------------n");
console.log();



//  Write a program to reverse a stack.
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    reverse() {
        if (this.isEmpty()) {
            return;
        }

        const reversedStack = new Stack();

        while (!this.isEmpty()) {
            reversedStack.push(this.pop());
        }

        this.items = reversedStack.items;
    }

    printStack() {
        console.log(this.items);
    }
}


const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log();
console.log("-------------Write a program to reverse a stack.-------------\n");
console.log();
console.log("Original Stack:");
stack.printStack();

stack.reverse();

console.log("Reversed Stack:");
stack.printStack();
console.log();
console.log("---------------------------- * ------------------------- * ------------------- * --------------- * --------------n");
console.log();






// Write a program to find the smallest number using a stack.

class Stackc {
    constructor() {
        this.items = [];
        this.minValue = null;
    }

    push(element) {
        if (this.isEmpty() || element < this.minValue) {
            this.minValue = element;
        }
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }

        const poppedElement = this.items.pop();

        if (poppedElement === this.minValue) {
            // Find the new minimum value
            this.minValue = Math.min(...this.items);
        }

        return poppedElement;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    getMin() {
        return this.minValue;
    }
}


const stackp = new Stackc();
stackp.push(4);
stackp.push(2);
stackp.push(6);
stackp.push(1);
console.log();
console.log("-------------Write a program to find the smallest number using a Stackp.-------------\n");
console.log();
console.log("Smallest number in the stackp:", stackp.getMin());
console.log();
console.log("---------------------------- * ------------------------- * ------------------- * --------------- * --------------n");
console.log();











