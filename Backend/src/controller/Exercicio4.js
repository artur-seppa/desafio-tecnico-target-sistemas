const fs = require('fs');
const path = require('path');

function lerFaturamento() {
    const data = fs.readFileSync(path.join(__dirname, '../../utils/FaturamentoEstado.json'), 'utf8');
    return JSON.parse(data);
}

class Exercicio4 {
    calcularPercentuais(req, res) {
        const faturamentoEstados  = lerFaturamento();

        // Calcular o faturamento total
        const totalFaturamento = faturamentoEstados.reduce((acc, estado) => acc + estado.Valor, 0);

        // Calcular os percentuais de cada estado
        const percentuais = faturamentoEstados.map(estado => ({
            UF: estado.UF,
            percentual: ((estado.Valor / totalFaturamento) * 100).toFixed(2) // Percentual com 2 casas decimais
        }));

        // Retornar os percentuais para o cliente
        return res.json({
            totalFaturamento: totalFaturamento.toFixed(2),
            percentuais
        });
    }
}

module.exports = { Exercicio4 };
