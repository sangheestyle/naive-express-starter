const request = require('supertest');
const app = require('../src/app');

describe('GET /user', () => {
  it('respond with json', (done) => {
    request(app)
      .get('/user')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
