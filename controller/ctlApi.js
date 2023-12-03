    const ordenarNumeros = (req, res) => {
        const { numeros } = req.body;
        
        // Verifica se a lista de números foi fornecida e tem o tamanho adequado
        if (!numeros || !Array.isArray(numeros) || numeros.length < 2 || numeros.length > 20) {
            return res.status(400).json({ error: 'A lista de números deve ter entre 2 e 20 elementos.' });
        }
        
        // Ordena a lista de números em ordem crescente
        const numerosOrdenados = numeros.slice().sort((a, b) => a - b);
        
        // Retorna a lista ordenada em formato JSON
        res.json({ numerosOrdenados });
    };

    const obterMinMax = (req, res) => {
        // Extrai a lista de números do corpo da requisição
        const { numeros } = req.body;
        
        // Verifica se a lista de números foi fornecida e tem o tamanho adequado
        if (!numeros || !Array.isArray(numeros) || numeros.length < 2 || numeros.length > 20) {
            // Se não atender aos critérios, retorna um erro 400 (Bad Request)
            return res.status(400).json({ error: 'A lista de números deve ter entre 2 e 20 elementos.' });
        }
        
        // Encontra o menor e o maior valor da lista
        const menorValor = Math.min(...numeros);
        const maiorValor = Math.max(...numeros);
        
        // Retorna o menor e o maior valor em formato JSON como resposta da requisição
        res.json({ menorValor, maiorValor });
    };
        
    module.exports = {
        ordenarNumeros,
        obterMinMax,
        }
        