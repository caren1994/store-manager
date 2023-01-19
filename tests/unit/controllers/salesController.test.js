const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { salesController } = require('../../../src/controllers');
const { salesService } = require('../../../src/services');
const { productSale, Sale,incorrectId, allSales, saleId } = require('./mocks/mockControler');


describe('teste saleCONTROLLER', function () {

  it('cadstrando nova sale', async function () {
    //arange
    const res = {};
    const req = {};
    const products = [productSale];

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(salesService, 'createSales')
      .resolves({ type: null, message: products });
//act
    await salesController.createSales(req, res);
//asssert
    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(products);
  });
  it('caso de erro saleid', async function () {
      //arrange
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(salesService, 'createSales')
      .resolves({ type: 'PRODUCT_NOT_FOUND', message: 'Product not found' });
//act
    await salesController.createSales(req, res);
//assert
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
  });
  
  it('findAll sales', async function () {
    //arrange
    const res = {};
    const req = {};
  

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(salesService, 'findAll')
      .resolves({ type: null, message: allSales });
//act
    await salesController.findAll(req, res);
//assert
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allSales);
  });

  it('findId sales', async function () {
      //arrange
    const res = {};
    const req = { params: { id: 1 }};


    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(salesService, 'findId')
      .resolves({ type: null, message: saleId });
//act
    await salesController.findId(req, res);
//assert
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(saleId);
  });
  it('findId inexistente', async function () {
    //arrange
    const res = {};
    const req = { params: { id: 999 }};


    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(salesService, 'findId')
      .resolves({ type: 'PRODUCT_NOT_FOUND', message: 'Sale not found' });
//act
    await salesController.findId(req, res);
//assert
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({  message: 'Sale not found' });
  });
  it('delete id sale inexistente', async function () {
    const res = {};
    const req = { params: { id: 999 }};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(salesService, 'deleteSales')
      .resolves({ type: 'PRODUCT_NOT_FOUND', message: 'sale not found' });

    await salesController.deleteSales(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({message: 'sale not found'});
  });

  it('delete id  sale', async function () {
    const res = {};
    const req = { params: { id: 1 }};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(salesService, 'deleteSales')
      .resolves({ type: null, message: '' });

    await salesController.deleteSales(req, res);

    expect(res.status).to.have.been.calledWith(204);
  });




  afterEach(function () {
sinon.restore();
  });
  
});
