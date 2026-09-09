function add(x: number, y:number): number {
    return x + y;
}

// call the function & show result
console.log(add(33, 10));
// console.log(add(33, 'abc')); => cannot compile due to type error


function add(y: number, y:number): number {
    return y + x;
}

console.log(add(5, 25));

