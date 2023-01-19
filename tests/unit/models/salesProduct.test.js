

const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel, salesProductModel } = require('../../../src/models');
const connection = require('../../../src/models/connection');
const { productSale,Sale, allSales, saleId } = require('./mocks/mockModel');

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
    it('findAll sales', async function () {
    sinon.stub(connection, 'execute').resolves([[allSales]])

      const result = await salesProductModel.findAll();

    expect(result).to.be.deep.equal([allSales]);
  });
  it('findId sales', async function () {
    sinon.stub(connection, 'execute').resolves([saleId])

    const result= await salesProductModel.findId(2)

    expect(result).to.be.deep.equal(saleId);
  });
      it('delete sale id', async function () {
    sinon.stub(connection, 'execute').resolves([{afectedRows:1}])

        const result = await salesProductModel.deleteSales(1);

    expect(result).to.be.deep.equal({ afectedRows: 1 });
    });
});