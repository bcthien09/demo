process.env.MYSQL_HOST = 'localhost';
process.env.MYSQL_USER = 'u_demo';
process.env.MYSQL_PASSWORD = 'Demo@123456',
process.env.MYSQL_DATABASE = 'demo_db';

let chai = require('chai');
let chaiHttp = require('chai-http');
const sinon = require("sinon");
let app = require('../src/app');
const helper = require('../src/helpers');
const db = require('../src/db');

const should = chai.should();

chai.use(chaiHttp);

describe('Crypto List', () => {
    beforeEach(async (done) => {
        done();
    });

    it('It should GET all crypto list', (done) => {
        chai
            .request(app)
            .get('/api/v1/crypto')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});
