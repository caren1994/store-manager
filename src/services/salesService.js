const { salesModel, salesProductModel, productsModel } = require('../models');

const findAllId = async (newSales) => { // recebe o corpo do parametro 
  const existId = await Promise.all(// utiliza oo promise.al para tudo ser resolvido antes de fazer outra coisa
    newSales.map(async (item) => { // faz um map no corpo com o productid 
      const productId = await productsModel.findId(item.productId);// verifica se o productid existe 
      console.log(`message:${productId}`);
      if (!productId) return false;// se nao tiver retorna false 
      return true;// true
    }),
  );
  console.log(existId);
  return existId;// retorna o array com as respostas
};

const createSales = async (newSales) => { // criando venda 
  await salesModel.createSales();// chama a model que cria a venda com a data 

  const exist = await findAllId(newSales);// procura se existe os ids
  const idExist = exist.every((e) => e === true);// retorna umm array com as resposta e utilizamos o every se todos são true
  if (idExist) { // caso a resposta seja true 
    const result = await salesProductModel.createSaleProduct(newSales);// chama a model e cadastra 
    if (result) return { type: null, message: result };
 }
    return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
};

const findAll = async () => { // todas as vendas 
  const result = await salesProductModel.findAll();
  return { type: null, message: result };
};
const findId = async (id) => { // 1 venda por id 
  const result = await salesProductModel.findId(id);// chama a model 
  if (result.length === 0) return { type: 'PRODUCT_NOT_FOUND', message: 'Sale not found' };
  return { type: null, message: result };
};

const deleteSales = async (id) => { // deletando uma venda 
  const { type } = await findId(id);// se a venda existir 
  if (type) return { type: 'PRODUCT_NOT_FOUND', message: 'Sale not found' };
  const result = await salesProductModel.deleteSales(id);// chama a model 
  return result;
};
const updateSales = async (id, updatesale) => { // alterando uma venda
  const exist = await salesProductModel.findId(id);// procura se a venda existe 
    if (exist.length === 0) return { type: 'PRODUCT_NOT_FOUND', message: 'Sale not found' };// se nao tiver retorna erro
  const productId = await findAllId(updatesale);// ve se o produto existe 
  const ids = productId.every((e) => e === true);// recebe o array e verifica se tudo é true
   if (!ids) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };// se nao tiver da erro
 
    const result = await salesProductModel.updateSales(id, updatesale);// chama a model
    return { type: null, message: result };// resposta para o controller se tudo der certo
};

module.exports = {
  createSales,
  findAll,
  findId,
  findAllId,
  deleteSales,
  updateSales,
};