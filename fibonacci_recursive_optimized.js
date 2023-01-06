function fibonacci(n) {
    
    let fibValues = {};

    function fibonacciHelper(n) {
        if(n <= 2) {
            return 1;
        }

        if(fibValues[n - 1]) {
            //There is an existing value for n-1:
            if(fibValues[n - 2]) {
                //There is also a fib value for n - 2:
                fibValues[n] = fibValues[n - 1] + fibValues[n - 2];
            }
            else {
                //There is no n - 2
                fibValues[n] = fibValues[n - 1] + fibonacciHelper(n - 2);
            }
        }
        else {
            //There is no existing value for n-1
            if(fibValues[n - 2]) {
                //There is an existing value for n-2
                fibValues[n] = fibonacciHelper(n - 1) + fibValues[n - 2];
            }
            else {
                //There is no value for n - 2
                fibValues[n] = fibonacciHelper(n - 1) + fibonacciHelper(n - 2);
            }
        }
        return fibValues[n];
        
    }
    return fibonacciHelper(n);
}

console.log(fibonacci(100));   