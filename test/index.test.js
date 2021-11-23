
const chai = require('chai');
const chaiHttp = require('chai-http');


// assertion style
const should = chai.should();
chai.use(chaiHttp);
const expect = chai.expect;

chai.use(require('chai-like'));
chai.use(require('chai-things'));

// require server
const app = require('../src/app');


module.exports = {
    chai:chai,
    app:app,
    should:should,
    expect:expect
}