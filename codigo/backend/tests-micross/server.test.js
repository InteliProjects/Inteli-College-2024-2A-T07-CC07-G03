const request = require('supertest'); // Supertest para fazer requisições HTTP
const app = require('../server'); // Importa o aplicativo Express do backend

// Testes para o Backend
describe('Testes de Microsserviço - Backend', () => {

  // Teste para verificar conexão com o banco de dados
  it('1. Deve conectar ao banco de dados e retornar as tabelas (GET /db)', async () => {
    const res = await request(app).get('/db');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('Produtos');
  });

  // Teste para listar produtos (GET /read)
  it('2. Deve listar todos os produtos existentes (GET /read)', async () => {
    const res = await request(app).get('/read');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  // Teste para atualizar um produto existente (PUT /update/:sku)
  it('3. Deve atualizar um produto existente (PUT /update/:sku)', async () => {
    const updatedProduct = {
      nome: 'Produto Atualizado',
      descricao: 'Descrição atualizada',
      preco: 70.0
    };
    const res = await request(app).put('/update/00123').send(updatedProduct);
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('Registro atualizado com sucesso');
  });

  // Teste para deletar um produto existente (DELETE /delete/:sku)
  it('4. Deve deletar um produto existente (DELETE /delete/:sku)', async () => {
    const res = await request(app).delete('/delete/WCW05562B3913');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('Registro excluído com sucesso');
  });

  // Teste para verificar a disponibilidade de lojas com base no CEP (POST /calcular-loja)
  it('5. Deve calcular as lojas disponíveis para um CEP (POST /calcular-loja)', async () => {
    const res = await request(app)
      .post('/calcular-loja')
      .send({ cep: '12345-678' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('lojasDisponiveis');
  });

  // Teste para buscar informações de um produto específico (GET /product/:sku)
  it('6. Deve buscar detalhes de um produto existente (GET /product/:sku)', async () => {
    const res = await request(app).get('/product/00123');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('sku');
    expect(res.body.sku).toEqual('00123');
  });
});
