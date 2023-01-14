const { expect } = require('chai');
const sinon = require('sinon');
const { passengerModel } = require('../../../src/models');
const { products } = require('./mocks');
const connection = require('../../../src/models/connection');

describe('Testes de unidade do model de products', function () {
  it('Recuperando a lista de products', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([passengers]);
    // Act
    const result = await passengerModel.findAll();
    // Assert
    expect(result).to.be.deep.equal(passengers);
  });
});

