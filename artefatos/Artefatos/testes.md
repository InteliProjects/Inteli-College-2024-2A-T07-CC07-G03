
## Testes de Integração

### Teste 1 - Validar se o script `testLocais.js` adiciona corretamente as lojas ao banco de dados via API e se a listagem de lojas reflete as inserções realizadas.

### Preparação:
1. **Backend em Execução:** Certifique-se de que o backend está rodando e acessível na URL `http://localhost:5001`.
2. **Tabela `Locais` Preparada:** Verifique se a tabela Locais existe no banco de dados e está pronta para receber novos registros. Se necessário, limpe os dados existentes na tabela para garantir que os resultados do teste sejam claros.
3. **Verificação de Dependências:** Verifique se as dependências do Node.js, incluindo `axios`, estão instaladas.

### Configuração Inicial:
1. **Banco de Dados Conectado:** Certifique-se de que o backend está conectado ao banco de dados correto (definido pela variável de ambiente `banco_lojas.db`).
2. **Script Configurado:** O script `testLocais.js` deve estar configurado para apontar para o endpoint correto da API (`baseURL = 'http://localhost:5001/locais'`).

### Passos para Execução:
1. **Executar o Script `testLocais.js`**
   - No terminal, navegue até o diretório onde o script `testLocais.js` está localizado.
   - Execute o script com o comando: node `tests/testLocais.js`
   - O script deve adicionar as lojas definidas na lista lojas ao banco de dados e listar as lojas cadastradas após a inserção.
2. **Verificar a saída do script**:
    - O script deve imprimir uma mensagem de sucesso para cada loja adicionada.
3. **Verificação Direta no Banco de Dados**:
    - Verificar diretamente no banco de dados se as lojas foram adicionadas com sucesso.


<div>
<sub>Figura 1 - Script com Adição de Lojas Exemplo<sub>

![alt text](/artefatos/images/testemss.png)

<sup>Fonte: Material produzido pelos autores (2024)</sup>

</div>

### Resultados Esperados:
1. **Respostas das Requisições `POST`:**
   - Cada requisição `POST` para o endpoint `/locais` deve retornar um status `201 Created` e uma mensagem de sucesso como `Loja adicionada com sucesso!`.
3. **Resposta da Requisição `GET`:**
   - A requisição `GET /locais` deve retornar uma lista com todas as lojas adicionadas, refletindo exatamente os registros inseridos.
4. **Verificação Direta no Banco de Dados:**
   - Na tabela `Locais`, os registros inseridos devem estar presentes e consistentes com os dados enviados, sem registros duplicados ou ausentes.

### Resultados Obtidos:
   - Lojas foram adicionadas no banco de dados.
   - Resposta impressa:
  ```json
  {
    "mensagem": "Loja adicionada: Loja adicionada com sucesso!"
    "mensagem": "Todas as lojas foram adicionadas com sucesso!"
  }
  ```
- [x] Passou
- [ ] Falhou

<div align="center">
<sub>Figura 2 - Resultado Esperado: Lojas no DB e Mensagens no Terminal<sub>

![alt text](/artefatos/images/dbemsg.png)

<sup>Fonte: Material produzido pelos autores (2024)</sup>

</div>

<div align="justify">

### Teste 2 - Validar se o script `testEstoque.js` adiciona corretamente os produtos ao banco de dados via API e se a atualização do estoque reflete os produtos adicionados nas quantidades corretas.

### Preparação:
1. **Backend em Execução:** Certifique-se de que o backend está rodando e acessível na URL `http://localhost:5001`.
2.  **Tabelas Preparadas:** Certificar que as tabelas `Produtos` e `Estoque` estão criadas no banco de dados.
3. **Verificação de Dependências:** Verifique se as dependências do Node.js, incluindo `axios`, estão instaladas.

### Configuração Inicial:
1. **Banco de Dados Conectado:** Certifique-se de que o backend está conectado ao banco de dados correto (definido pela variável de ambiente `banco_lojas.db`).
2. **Script Configurado:** O script `testEstoque.js` deve estar configurado para apontar para o endpoint correto da API
    - `baseURLProdutos = 'http://localhost:5001/create'` para adicionar produtos.
    - `baseURLEstoque = 'http://localhost:5001/estoque'` para atualizar o estoque com os produtos e suas quantidades.
3. **Endpoints API Disponíveis:** Verifique se os endpoints `/create` e `/estoque` estão acessíveis e funcionando corretamente.

### Passos para Execução:
1. **Executar o Script `testEstoque.js`**
   - No terminal, navegue até o diretório onde o script `testEstoque.js` está localizado.
   - Execute o script com o comando: node `tests/testEstoque.js`
2. **Verificar a saída do Script:** O script deve imprimir uma mensagem de sucesso para cada produto adicionado e para cada atualização de estoque realizada. A listagem final deve exibir todos os produtos cadastrados no estoque.
3. **Verificação Direta no Banco de Dados:** Verificar no db se todos os registros correspondem aos dados fornecidos no script.

<div align="center">
<sub>Figura 3 - Script com Adição de Produtos Exemplo<sub>

![alt text](/artefatos/images/exemplodeadicionar2.png)

<sup>Fonte: Material produzido pelos autores (2024)</sup>

</div>

<div align="justify">

### Resultados Esperados:
1. **Respostas das Requisições `POST /create`:**
   - Cada requisição `POST` para o endpoint `/create` deve retornar um status `201 Created` e uma mensagem de sucesso como `Registro criado com sucesso!`.
2. **Resposta da Requisição `POST /estoque`:**
   - Cada requisição `POST` para o endpoint `/estoque` deve retornar um status `201 Created` e uma mensagem de sucesso como `Produto adicionado ao estoque com sucesso!`.
3. **Resposta da Requisição `GET /skus`:**
   - A requisição `GET /skus` deve retornar uma lista com todos os 20 produtos adicionados, exibindo `sku` e `nome` de cada um.
4. **Verificação Direta no Banco de Dados:**
   - Na tabela `Produtos`, os 20 registros inseridos devem estar presentes e consistentes com os dados enviados.
   - Na tabela `Estoque`,  os 20 registros devem refletir a associação correta de `id_local`, `sku` e `quantidade` conforme especificado.
  
### Resultados Obtidos:
   - Todos os 20 produtos foram adicionados com sucesso na tabela `Produtos`.
   - Mensagens exibidas no terinal confirmaram:
  ```json
  {
    "mensagem": "Produto adicionado: Registro criado com sucesso"
    "mensagem":"Todos os produtos foram adicionados com sucesso."
  }
  ```
  ```json
  {
    "Produtos cadastrados no estoque: ["
  "{ sku: '10001', nome: 'Produto Teste 1' },"
  " ..."
  }
  ```
   - A consulta direta ao banco de dados confirmou a inserção correta de 20 registros na tabela `Produtos` e 20 registros na tabela `Estoque`, correspondendo exatamente aos dados fornecidos no script.

- [x] Passou
- [ ] Falhou

<div align="center">
<sub>Figura 4 - Resultado Esperado DB Antes e Depois: Produtos Adicionados (Quadrante Vermelho)<sub>

![alt text](/artefatos/images/dbantesedps.png)

<sup>Fonte: Material produzido pelos autores (2024)</sup>

</div>

<div align="justify">

## Testes Unitários

### Teste  - Validar e realizar os 6 testes  verificando se os endpoints do backend estão respondendo corretamente e integrados ao banco de dados.

### Preparação:
1. **Backend em Execução:** Certifique-se de que o backend está rodando e acessível na URL `http://localhost:5001`.
2. **Banco de Dados Preparado:** Verifique se o banco de dados `banco_lojas.db` está conectado corretamente e contém as tabelas necessárias (`Produtos`, `Locais`, `Estoque`).
3. **Verificação de Dependências:** Certifique-se de que todas as dependências do Node.js estão instaladas, incluindo `jest` e `supertest`.

### Configuração Inicial:
1. **Banco de Dados Conectado:** Certifique-se de que o backend está conectado ao banco de dados correto (definido pela variável de ambiente `banco_lojas.db`).
2. **Arquivo de Testes:** Verifique se o arquivo `server.test.js` está presente no diretório `tests` e está configurado corretamente para executar os testes nos endpoints (`GET /db`, `GET /read`, `PUT /update/:sku`, `DELETE /delete/:sku`, `POST /calcular-loja`, `GET /product/:sku`).

### Passos para Execução:
1. **Executar os Testes Unitários**
   - No terminal, navegue até o diretório `backend`.
   - Execute o comando para rodar todos os testes: `npm run test`.
   - O Jest deve executar os testes definidos no arquivo `server.test.js`.

### Resultados Esperados:
1. **Respostas das Requisições:**
   - `GET /db`: Deve retornar o status `200 OK` e listar todas as tabelas presentes no banco de dados.
   - `GET /read`: Deve retornar o status `200 OK` e listar todos os produtos existentes no banco de dados.
   - `PUT /update/:sku`: Deve retornar o status `200 OK` e a mensagem de sucesso `Registro atualizado com sucesso`.
   - `DELETE /delete/:sku`: Deve retornar o status `200 OK` e a mensagem de sucesso `Registro excluído com sucesso`.
   - `POST /calcular-loja`: Deve retornar o status `200 OK` e uma lista de lojas calculadas corretamente a partir do CEP.
   - `GET /product/:sku`: Deve retornar o status `200 OK` e os detalhes do produto com o `sku` especificado.
  
### Resultados Obtidos:
   - Todos os endpoints responderam corretamente e retornaram as mensagens esperadas.
   - Resumo do resultado dos testes:
   ```json
   {
     "mensagem": "Testes passaram com sucesso para todos os endpoints."
   }
   ```
   - O Jest confirmou que todos os testes passaram com sucesso:
   ```
   Test Suites: 1 passed, 1 total
   Tests:       6 passed, 6 total
   Snapshots:   0 total
   ```

- [x] Passou
- [ ] Falhou

<div align="center">

<sub>Figura 5 - Saída dos Testes Unitários no Terminal<sub>

![alt text](/artefatos/images/testunit.png)

<sup>Fonte: Material produzido pelos autores (2024)</sup>

</div>

<div align="justify">

## Testes de Microsserviço 

### Teste  - Validar se o endpoint `POST /calcular-loja` retorna as lojas corretas com base no CEP fornecido.

### Preparação:
1. **Backend em Execução:** Certifique-se de que o backend está rodando e acessível na URL `http://localhost:5001`.
2. **Banco de Dados Preparado:** Verifique se as lojas estão corretamente cadastradas no banco de dados `banco_lojas.db`, na tabela `Locais`.
3. **Verificação de Dependências:** Certifique-se de que todas as dependências do Node.js estejam instaladas e que o banco de dados esteja conectado corretamente.

### Configuração Inicial:
1. **Banco de Dados Conectado:** Confirme que o backend está conectado ao banco de dados correto definido pela variável de ambiente `banco_lojas.db`.
2. **API Disponível:** Verifique se o endpoint `/calcular-loja` está acessível e funcionando corretamente.

### Passos para Execução:
1. **Executar a Requisição `POST /calcular-loja`**
   - Use uma ferramenta como o **Postman** para realizar a requisição.
   - Configure a requisição para:
     - **URL:** `http://localhost:5001/calcular-loja`
     - **Método:** `POST`
     - **Body:** Enviar o CEP desejado no formato JSON:
       ```json
       {
         "cep": "133410-50"
       }
       ```

### Resultados Esperados:
1. **Resposta da Requisição `POST /calcular-loja`:**
   - A resposta deve retornar o status `200 OK`.
   - O corpo da resposta deve conter um objeto JSON com as lojas mais próximas ao CEP fornecido, no formato:
     ```json
     {
       "sucesso": true,
       "lojasDisponiveis": [
         {
           "location": "Loja Indaiatuba",
           "address": "Alameda das Cajaranas, 370"
         },
         {
           "location": "Loja Morumbi",
           "address": "Av. Giovanni Gronchi, 3000"
         },
         {
           "location": "Loja Pinheiros",
           "address": "Rua dos Pinheiros, 500"
         }
       ]
     }
     ```

### Resultados Obtidos:
   - A requisição retornou com sucesso o status `200 OK`.
   - A lista de lojas retornada pelo endpoint `/calcular-loja` corresponde às lojas mais próximas ao CEP informado.
   - Resultado exibido no Postman:
     ```json
     {
       "sucesso": true,
       "lojasDisponiveis": [
         {
           "location": "Loja Indaiatuba",
           "address": "Alameda das Cajaranas, 370"
         },
         {
           "location": "Loja Morumbi",
           "address": "Av. Giovanni Gronchi, 3000"
         },
         {
           "location": "Loja Pinheiros",
           "address": "Rua dos Pinheiros, 500"
         }
       ]
     }
     ```

- [x] Passou
- [ ] Falhou

<div align="center">
<sub>Figura 6 - Resultado Esperado da Requisição `POST /calcular-loja` no Postman<sub>

![alt text](/artefatos/images/testemss.png)

<sup>Fonte: Material produzido pelos autores (2024)</sup>

</div>

<div align="justify">
