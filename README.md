<img src="https://media1.giphy.com/media/LSWsuaF1OFroT4KxO7/source.gif" width="50" height="50">

# Qual a distância?

Essa API serve para avaliar a distância de cada endereço informado e resolver o melhor percurso

# Instalação

Dê um clone no projeto aqui do GitHub, acesse a pasta da aplicação e em seguida instale as dependências. npm install

Em seguida dê o comando para iniciar a aplicação npm start

O projeto está rodando na porta 3000, então quando for testar a API, utilize a URL localhost:3000

É necessário criar um arquivo de configuração e colocar uma API KEY do Google. Para isso, altere ou duplique o arquivo '.env-example' para '.env' e adicione sua API_KEY.

# Utilização

Para acessar a função, use o endpoint "/rotas".

No body do POST insira um array de objetos como no exemplo abaixo

```json
[
    {
        "endereco": "Rua Atanagildo de Freitas",
        "numero": "117",
        "bairro": "Bandeirantes",
        "cidade": "Campos dos Goytacazes",
        "uf": "RJ",
        "cep": "28085210",
        "pais": "Brasil"
    },
    {
        "endereco": "Rua Romualdo Peixoto",
        "numero": "722",
        "bairro": "Custodopolis",
        "cidade": "Campos dos Goytacazes",
        "uf": "RJ",
        "cep": "28085220",
        "pais": "Brasil"
    },
    {
        "endereco": "Rua Almirante Greenhalgh",
        "numero": "34",
        "bairro": "Tamandare",
        "cidade": "Campos dos Goytacazes",
        "uf": "RJ",
        "cep": "28035025",
        "pais": "Brasil"
    }
]
```

# Proximas funções a serem implementadas

-   Tempo de trajeto por veículos
