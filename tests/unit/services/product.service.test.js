const { expect } = require('chai');
const sinon = require('sinon');
const { productsService } = require('../../../src/services');
const { product,newProduct,productNew } = require('./mocks/mockService');
const { productsModel } = require('../../../src/models');


describe('Testes de unidade do Service todos os produtos', function () {

  it('lista de todos os produtos', async function () {
    //Arrange
    sinon.stub(productsModel, 'findAll').resolves([product])
   //Act
    const result = await productsService.findAll();
   //Assert
        expect(result.type).to.be.equal(null);
    expect(result.message).to.deep.equal([product]);
  });
     afterEach(function () {
    sinon.restore();
  });

});
describe('sem nenhum produto', function () {
     it('retorne um erro caso os produtos não existam', async function () {
    // Arrange
    sinon.stub(productsModel, 'findAll').resolves(undefined);
    // Act
    const result = await productsService.findAll();
    // Assert
    expect(result.type).to.be.deep.equal('PRODUCTS_NOT_FOUND');
     expect(result.message).to.deep.equal('Products not found');
     });
     afterEach(function () {
    sinon.restore();
  });
})

describe('busca por um produto', function () {
  it('retorna erro se o  id for inválido', async function () {
    // Arrange
    //nesse fluxo o model não é chamado
    // Act
    const result = await productsService.findId('a');
    // Assert
    expect(result.type).to.deep.equal('INVALID_VALUE');
    expect(result.message).to.deep.equal('"id" must be a number');
  });
  it('retorne um erro caso o produto não exista', async function () {
    // Arrange
    sinon.stub(productsModel, 'findId').resolves(undefined);
    // Act
    const result = await productsService.findId(999);
    // Assert
    expect(result.type).to.be.deep.equal('PRODUCT_NOT_FOUND');
     expect(result.message).to.deep.equal('Product not found');
  });
  it('retorna o product de acordo com o id', async function () {
    // Arrange
    sinon.stub(productsModel, 'findId').resolves([product[0]]);
    // Act
    const result = await productsService.findId(1);
    // Assert
    expect(result.type).to.be.equal(null);
    expect(result.message).to.deep.equal([product[0]]);
  });
   afterEach(function () {
    sinon.restore();
  });
});
describe('adicionando um produto', function () {
     it('se a operação for efetuada com sucesso retorne o produto adicionado ', async function () {
    // Arrange
    sinon.stub(productsModel, 'newProduct').resolves(newProduct);
    // Act
    const result = await productsService.newProduct('produtox');
    // Assert
    expect(result.type).to.be.equal(null);
     expect(result.message).to.deep.equal(newProduct);
     });
       it('cadastrando nome com 3 caracteres para testar validação ', async function () {

    // Act
    const result = await productsService.newProduct('oi');
    // Assert
    expect(result.type).to.be.deep.equal('INVALID_VALUE');
     expect(result.message).to.deep.equal('"name" length must be at least 5 characters long');
       });
  it('update id product', async () => {
    //arrange
    sinon.stub(productsModel, 'findId').resolves({ type: null });
    sinon.stub(productsModel, 'updateProduct').resolves(productNew);
    //act
     const result=await productsService.updateProduct(1,'Martelo do Batman')

    //assert
    expect(result.message).to.deep.equal(productNew);

  })
    it('delete id product', async () => {
    //arrange
    sinon.stub(productsModel, 'findId').resolves({ type: null });
    sinon.stub(productsModel, 'deleteProduct').resolves({affectedRows:1});
    //act
     const result=await productsService.deleteProduct(1)

    //assert
    expect(result.message).to.deep.equal({affectedRows:1});

    })

     afterEach(function () {
    sinon.restore();
  });
})