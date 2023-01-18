

const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel, salesProductModel } = require('../../../src/models');
const connection = require('../../../src/models/connection');
const { productSale,Sale } = require('./mocks/mockModel');

describe('testando salesmodel', function () {
  afterEach(sinon.restore);

  it('cadastrando uma nova venda', async function () {
    //arrange
    sinon.stub(connection, 'execute').resolves([{ insertId: 1 }])
    //act
    const result = await salesModel.createSales();
    //assert
    expect(result).to.be.deep.equal(1);
  });

  it('teste saleCreate', async function () {
    sinon.stub(connection, 'execute').resolves([[productSale]])

    const { itemsSold} = await salesProductModel.createSaleProduct(Sale)

    expect(itemsSold).to.be.deep.equal(productSale.itemsSold);
  });
});