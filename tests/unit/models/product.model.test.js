const { expect } = require('chai');
const sinon = require('sinon');
const {productsModel} = require('../../../src/models');
const { products,newProduct, insertid } = require('../models/mocks/mockModel');
const connection = require('../../../src/models/connection');

describe('Testes de unidade do model de products', function () {
  it('Recuperando a lista de products', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([products]);
    // Act
    const result = await productsModel.findAll();
    // Assert
    expect(result).to.be.deep.equal(products);
  });

  it('Recuperando um produto a partir do seu id', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([[products[0]]]);
    // Act
    const result = await productsModel.findId(1);
    // Assert
    expect(result).to.be.deep.equal(products[0]);
  });
  afterEach(function () {
    sinon.restore();
  });
});
describe('adicionando um produto', function () {
     it('se a operação for efetuada com sucesso retorne o produto adicionado ', async function () {
      // Arrange
       sinon.stub(connection, 'execute').resolves([{ insertId:1 }]);
    // Act
    const result = await productsModel.newProduct('produtox');
    // Assert
   expect(result).to.be.deep.equal(newProduct);
     });
     afterEach(function () {
    sinon.restore();
  });
})


