const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { productsService } = require('../../../src/services');
const { productsController } = require('../../../src/controllers');
const {
  product,
  req,
  newProduct,
  NAME_INVALID,
} = require('../controllers/mocks/mockControler');

describe('Teste de unidade do Controller', function () {
  describe('Listando todos os produtos', function () {
    it('Deve retornar o status 200 e os produtos', async function () {
      // arrange
      const res = {};
      const req = {};
      
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productsService, 'findAll')
        .resolves({ type: null, message: product });

      // act
      await productsController.findAll(req, res);

      // assert
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(product);
    });
  });

  describe('Buscando um produto', function () {
    it('deve responder com 200 e os dados do banco quando existir', async function () {
      // Arrange
      const res = {};
      const req = {
        params: { id: 1 },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productsService, 'findId')
        .resolves({ type: null, message: product[0]});

      // Act
      await productsController.findId(req, res);

      // Assert
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(product[0]);
    });
    it('deve responder com 404 e os products not found', async function () {
      // Arrange
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productsService, 'findAll')
        .resolves({ type: 'PRODUCTS_NOT_FOUND', message: 'Products not found' });

      // Act
      await productsController.findAll(req, res);

      // Assert
      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith({ message: 'Products not found' });
    });

    it('ao passar um id que não existe no banco deve retornar um erro', async function () {
      // Arrange
      const res = {};
      const req = {
        params: { id: 9999 }, // passamos aqui um id fictício para forçar o erro esperado
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      // Definimos o dublê do service retornando o contrato definido para esse cenário
      sinon
        .stub(productsService, 'findId')
        .resolves({ type: 'PRODUCT_NOT_FOUND', message: 'Product not found' });

      // Act
      await productsController.findId(req, res);

      // Assert
      // Avaliamos se chamou `res.status` com o valor 404
      expect(res.status).to.have.been.calledWith(404);
      // Avaliamos se chamou `res.status` com a mensagem esperada
      expect(res.json).to.have.been.calledWith({ message: 'Product not found'});
    });
  });
   afterEach(function () {
    sinon.restore();
  });
});
describe('adicionando um produto', function () {
  if('deve retornar "201" caso seja criado com sucesso',async function(){
       // arrange
      const res = {};
    const req = { body: req };
      
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productsService, 'newProduct')
        .resolves({ type: null, message: newProduct });

      // act
      await productsController.newProduct(req, res);

      // assert
      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith(newProduct);
  });
  if ('deve retornar erro do service em caso de nome invalido ', async function () {
       // arrange
      const res = {};
    const req = { body: NAME_INVALID };
      
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productsService, 'newProduct')
        .resolves({ type: 'INVALID_VALUE',
    message: '"name" length must be at least 5 characters long' });

      // act
      await productsController.newProduct(req, res);

      // assert
    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith({ message: '"name" length must be at least 5 characters long'});
  });
it('update id products ', async function () {
    const res = {};
    const req = { body: {name:'Martelo do Batman'}, params: { id: 1 }};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsService, 'updateProduct')
      .resolves({ type: null, message: {id:'1',name:'Martelo do Batman'} });

    await productsController.updateProduct(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith({id:'1',name:'Martelo do Batman'});
});
  it('delete id product inexistente', async function () {
    const res = {};
    const req = { params: { id: 999 }};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsService, 'deleteProduct')
      .resolves({ type: 'PRODUCT_NOT_FOUND', message: 'Product not found' });

    await productsController.deleteProduct(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({message: 'Product not found'});
  });

  it('delete id product', async function () {
    const res = {};
    const req = { params: { id: 1 }};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsService, 'deleteProduct')
      .resolves({ type: null, message: '' });

    await productsController.deleteProduct(req, res);

    expect(res.status).to.have.been.calledWith(204);
  });
     afterEach(function () {
    sinon.restore();
     });
  
})