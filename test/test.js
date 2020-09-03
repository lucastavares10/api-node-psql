const request = require('supertest');
const app = require('../app');

describe('POST /auth/cadastrar', function() {
  it('responds with json', async () => {
    request(app)
      .post('/auth/cadastrar')
      .send({ "nome": "Jão josé",
            "email": "Maria_joaquina@hotmail.com",
            "senha": "123123123" })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) return err;
      });
  });
});


describe('GET /auth/listar', function() {
    it('responds with json', async () => {
      request(app)
        .get('/auth/listar')
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

//params: id && data
describe('POST /auth/editar', function() {
  it('responds with json', async () => {
    request(app)
      .post('/auth/editar')
      .send({ 
            "id": "12",
            "nome": "José da silva",
            "email": "zezé@hotmail.com",
            "senha": "12311223123" })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) return err;
      });
  });
});
