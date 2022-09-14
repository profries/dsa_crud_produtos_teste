const cadastro = require("./cadastro_produtos")

let listaInicialEsperada = [
    {id:1, nome:"Produto 1", preco:10},
    {id:2, nome:"Produto 2", preco:20},
    {id:3, nome:"Produto 3", preco:30},
]


//Cenario de Sucesso!
test("Listar Produtos retorna a lista inicial esperada",
    function() {
        expect(cadastro.listar())
            .toEqual(listaInicialEsperada)
    }
)

//Cenario de Sucesso!
test ('Buscar Por Id 2 deve retornar Produto 2',
    function() {
        let produto2 = {
            id:2, 
            nome:"Produto 2", 
            preco:20
        };

        expect(cadastro.buscarPorId(2))
            .toEqual(produto2);
    }
)

//Cenario de Insucesso - Não existe produto 6!
test ('Buscar Por Id 6 deve gerar exceção id nao encontrado',
    function() {
        const errIdNaoEncontrado = "ID nao encontrado";
        expect(() => cadastro.buscarPorId(6))
            .toThrow(errIdNaoEncontrado);
    }
)
