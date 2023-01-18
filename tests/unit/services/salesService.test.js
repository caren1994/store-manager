

const { expect } = require('chai');
const sinon = require('sinon');
const { salesProductModel,productsModel, salesModel } = require('../../../src/models');
const { salesService } = require('../../../src/services');
const { Sale,productSale, findId,allSales,saleId } = require('./mocks/mockService');

describe('teste camada service criando sales', function () {

it('testando camada service cadastrando sale', async function () {
//arrange
  sinon.stub(salesModel, 'createSales').resolves();
  sinon.stub(salesProductModel, 'createSaleProduct').resolves(productSale);
  sinon.stub(salesProductModel, 'findId').resolves(findId);
//act
const result = await salesService.createSales(Sale);
//assert
expect(result.message).to.deep.equal(productSale);

});
  it('findAll em todas as sales', async function () {
    //arrange
    sinon.stub(salesProductModel, 'findAll').resolves([allSales]);
//act
    const result = await salesService.findAll();
//assert
    expect(result.message).to.deep.equal([allSales]);
  });

  it('findId saleService', async function () {
    //arrange
    sinon.stub(salesProductModel, 'findId').resolves([saleId]);
//act
    const result = await salesService.findId(2);
//assert
    expect(result.message).to.deep.equal([saleId]);
  });


  
afterEach(function () {
sinon.restore();
});

});