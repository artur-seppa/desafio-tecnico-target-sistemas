class Exercicio5 {
    inverter(req, res) {
        const texto = req.body.resposta;
        // const { texto } = req.body;  // Recebe a string no corpo da requisição

        if (!texto || typeof texto !== 'string') {
            return res.status(400).json({ error: 'Por favor, forneça uma string válida.' });
        }

        // Função para inverter a string sem usar métodos prontos como reverse
        let resultado = '';
        for (let i = texto.length - 1; i >= 0; i--) {
            resultado += texto[i];  // Concatena os caracteres de trás para frente
        }

        // Retorna a string invertida como resposta
        return res.json({ message: `string invertida ${resultado}` });
    }
}

module.exports = { Exercicio5 };
