// normal function

function sum1(a, b) { 
    const c = a + b;
    return c;
}

console.log(sum1(3, 5));

// arrow function
const sum2 = (a, b) => {
    const c = a + b;
    return c;
}

console.log(sum2(3, 5));

// hàm tăng giá trị lên 5 đơn vị

const increase5  = (a) => a + 5;