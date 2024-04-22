function integerArr() {
    let n;
    let arr = [];
    let num;
    do {
        n = parseInt(prompt("Nhap vao n so nguyen"));
    } while (isNaN(n) || n <0 || n >100)
    for (let i = 0; i < n; i++) {
        num = parseInt(prompt("Nhap gia tri so nguyen"));
        arr.push(num);
    }
    return arr;
}