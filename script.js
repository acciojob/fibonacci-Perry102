function fibonacci(num) {
// your code here
    if num == 0:
        return 0
    elif num == 1:
        return 1
    
    # Initialize the first two terms
    a, b = 0, 1
    # Compute up to the nth term
    for _ in range(2, num + 1):
        a, b = b, a + b
    return a

}

module.exports = fibonacci;
