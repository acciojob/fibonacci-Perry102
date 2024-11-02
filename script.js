function fibonacci(num) {
// your code here
    if num == 0:
        return 0
    elif num == 1:
        return 1
    
    a, b = 0, 1
    for _ in range(2, num + 1):
        a, b = b, a + b
    return a

}

module.exports = fibonacci;
