class Exercicio1 {
    calcularSoma(req, res) {
        let INDICE = 13;
        let SOMA = 0;
        let K = 0;

        try {
            while (K < INDICE) {
                K = K + 1;
                SOMA = SOMA + K;
            }

            return res.status(200).json({ SOMA: SOMA });
        } catch (error) {
            return res
                .status(400)
                .json({ error: error });
        }
    }
}

module.exports = { Exercicio1 };
