function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function isFibonacci(number) {
    let i = 0;
    let fibNum = fibonacci(i);

    while (fibNum < number) {
        i++;
        fibNum = fibonacci(i);
    }

    return fibNum === number;
}

class Exercicio2 {
    verificarFibonacci(req, res) {
        const { numero } = req.body;

        try {
            if (isFibonacci(numero)) {
                return res.json({ message: `${numero} pertence à sequência de Fibonacci.` });
            } else {
                return res.json({ message: `${numero} não pertence à sequência de Fibonacci.` });
            }
        } catch (error) {
            return res
                .status(400)
                .json({ error: error });
        }
    }
}

module.exports = { Exercicio2 };
