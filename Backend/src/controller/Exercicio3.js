const fs = require('fs');
const path = require('path');

// Função para ler o arquivo JSON de faturamento
function lerFaturamento() {
    const data = fs.readFileSync(path.join(__dirname, '../../utils/faturamentoDiario.json'), 'utf8');
    return JSON.parse(data);
}

class Exercicio3 {
    calcularFaturamento(req, res) {
        try {
            const faturamento = lerFaturamento();

            const menorFaturamento = Math.min(...faturamento.map(item => item.valor)).toFixed(2);
            const maiorFaturamento = Math.max(...faturamento.map(item => item.valor)).toFixed(2);

            const somaFaturamento = faturamento.reduce((acc, item) => acc + item.valor, 0);
            const mediaFaturamento = (somaFaturamento / faturamento.length).toFixed(2);

            const diasAcimaMedia = faturamento.filter(item => item.valor > mediaFaturamento).length;

            return res.json({
                menorFaturamento,
                maiorFaturamento,
                mediaFaturamento,
                diasAcimaMedia
            });
        } catch (error) {
            return res
                .status(400)
                .json({ error: error });
        }
    }
}

module.exports = { Exercicio3 };
