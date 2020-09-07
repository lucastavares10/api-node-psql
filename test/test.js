const request = require('supertest');
const app = require('../app');

/*-------------------------------USUARIO---------------------------------------*/

/*

describe('POST /usuario/cadastrar', function() {
  it('responds with json', async () => {
    request(app)
      .post('/usuario/cadastrar')
      .send({ "nome": "Lucas Tavares Freire",
            "email": "lucas_tavares10@hotmail.com",
            "senha": "123123123", 
            "perfilId": "1"})
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return err;
      });
  });
});


describe('GET /usuario/listar', function() {
    it('responds with json', async () => {
      request(app)
        .get('/usuario/listar')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          if (err) return err;
        });
    });
});

//param:id
describe('DELETE /usuario/deletar/1', function() {
    it('responds with json', async () => {
      request(app)
        .get('/usuario/deletar/1')
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err, res) {
          if (err) return err;
        });
    });
});

//params: id && data
describe('POST /usuario/editar', function() {
  it('responds with json', async () => {
    request(app)
      .post('/usuario/editar')
      .send({ 
            "id": "1",
            "nome": "José da silva",
            "email": "zezé@hotmail.com",
            "senha": "12311223123" })
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return err;
      });
  });
});

*/


/*-------------------------------PERFIS---------------------------------------*/

/** 

describe('POST /perfil/cadastrar', function() {
  it('responds with json', async () => {
    request(app)
      .post('/perfil/cadastrar')
      .send({ "tipo": "Administrador" })
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return err;
      });
  });
});


describe('GET /perfil/listar', function() {
    it('responds with json', async () => {
      request(app)
        .get('/perfil/listar')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          if (err) return err;
        });
    });
});

//param:id
describe('DELETE /auth/deletar/1', function() {
    it('responds with json', async () => {
      request(app)
        .get('/auth/deletar/1')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          if (err) return err;
        });
    });
});

*/