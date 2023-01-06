function fibonacci(n) {
    
    let fibValues = {};

    function fibonacciHelper(n) {
        if(n <= 2) {
            return 1;
        }

        const value1 = fibValues[n - 1] ? fibValues[n - 1] : fibonacciHelper(n - 1);
        const value2 = fibValues[n - 2] ? fibValues[n - 2] : fibonacciHelper(n - 2);

        fibValues[n] = value1 + value2;
        
        return fibValues[n];
        
    }
    return fibonacciHelper(n);
}

console.log(fibonacci(7));   