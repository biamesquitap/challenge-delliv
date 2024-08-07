# Every Delivery

## Conteúdo
- [Ir para Como executar o programa?](#como-executar-o-programa)
- [Ir para Como o programa funciona?](#como-o-programa-funciona)
- [Ir para Rotas da apicação](#rotas-da-aplicacao)
- [Ir para Contato](#contato)
  

## Como executar o programa?
1. O primeiro passo é clonar o projeto em algum lugar do seu computador: `(https://github.com/biamesquitap/every-delivery.git)`;
2. Agora acesse o terminal dentro da pasta do projeto;
3. Entre na pasta do servidor (`cd backend`), abra o código (`code .`) e copie o arquivo .env.example para um novo arquivo .env;
4. Execute o seguinte comando: `npm run dev`;
5. Para gerar as migrações: `npx prisma migrate dev`
6. Para melhorar a visualização das tabelas: `npx prisma studio`;
7. Agora que o backend está em execução, em outro terminal, vá para a pasta inicial do projeto, vá para a pasta onde está localizado o frontend (`cd web`);
8. Digite o seguinte comando para instalar todas as dependências: `npm install`;
9. Agora digite o seguinte comando: `npm run dev`;

## Como o programa funciona?
- A aplicação de catálogo de produtos, utilizando as seguintes funcionalidades:
1. Login e Cadastro;
2. Catálogo de Produtos;
3. Filtragem por Categoria;
4. Busca por Nome do Produto;
5. Adicionar e Remover Produtos;
6. Finalizar Checkout;


## Rotas da aplicação:
### Users
    1. Para listar todos os usuários:  
      -> `http://localhost:3333/users`, (GET)
    
    2. Para listar detalhes de um usuário:   -> `http://localhost:3333/users/:id`, (GET)
    
    3. Para criar um usuário -> `http://localhost:3333/users`, (POST)
      3.1 body ->
      
  ```
      {
        "name": "Beatriz",
        "email": "biamesquitap@gmail.com",
        "password": "12345678"		
      }
  ```
  
    4. Para deletar usuário -> `http://localhost:3333/users/:id`, (DELETE)
    
    5. Para fazer login do usuário -> `http://localhost:3333/users/sessions`, (POST)
      5.1 body ->
      
  ```
      {
        "email": "biamesquitap@gmail.com",
        "password": "12345678"		
      }
  ```

  ### Products
    1. Para listar todos os produtos:  
      -> `http://localhost:3333/products`, (GET)

    2. Para listar detalhes de um produto:   -> `http://localhost:3333/products/:id`, (GET)
    
    3. Para criar um produto -> `http://localhost:3333/products`, (POST)
      3.1 body ->
      (OBS: type: só poderá receber os valores: 'eletronicos', 'comidas', 'livros', 'vestuario')
  ```
    {
      "name": "Camiseta",
      "description": "Camiseta manga curta com estampa, gola careca.",
      "price": 80,
      "type": "vestuarios"
    }  
  ```
  
    4. Para deletar usuário -> `http://localhost:3333/products/:id`, (DELETE)

   ### Pedidos
    1. Para listar todos os pedidos:  
      -> `http://localhost:3333/purchase`, (GET)

    2. Para listar detalhes de um pedido:   -> `http://localhost:3333/purchase/:id`, (GET)
    
    3. Para criar um pedido -> `http://localhost:3333/purchase`, (POST)
      3.1 body ->
      
  ```
      {
        "totalAmount": 521,
        "userId": "db808eb6-01b3-4fee-97d6-a763b5c650b7",
        "products": ["8eed85a9-f154-441b-a5a7-87d049bcbcfa"]
      }
  ```

## Prints do frontend da aplicação
![image](https://github.com/biamesquitap/challenge-delliv/assets/94808375/d9668966-e679-451e-b7d1-a1262905918c)

![image](https://github.com/biamesquitap/challenge-delliv/assets/94808375/e0ac50db-a2cc-46e8-943a-34ba03e974ea)


![image](https://github.com/biamesquitap/challenge-delliv/assets/94808375/fe1b648f-5c29-4800-a1cd-96ca862898db)

![image](https://github.com/biamesquitap/challenge-delliv/assets/94808375/a9f36b5d-3fb3-4341-9172-5bc0655b68dc)

![image](https://github.com/biamesquitap/challenge-delliv/assets/94808375/6b6a4f26-7bdc-4687-915b-328df9c4357a)

![image](https://github.com/biamesquitap/challenge-delliv/assets/94808375/9ccc7f1b-7bf4-4faa-9845-32785877245a)




## Melhorias

1. Criar tela de detalhes de um pedido específico.


# Contato 
Beatriz Mesquita - biamesquitap@gmail.com - [GitHub](https://github.com/biamesquitap) - [LinkedIn](https://www.linkedin.com/in/beatriz-ponte/)
