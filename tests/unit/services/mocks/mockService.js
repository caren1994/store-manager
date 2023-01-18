

const product = [

  {
    "id": 1,
    "name": "Martelo de Thor"
  },
  {
    "id": 2,
    "name": "Traje de encolhimento"
  },
  {
    "id": 3,
    "name": "Escudo do Capitão América"
  }
];
const newProduct={
  "id": 1,
  "name": "produtox"
}
const productSale = {
  id: 1, itemsSold: [
    { productId: 1, quantity: 3 }
  ]
};
const Sale = [{ productId: 1, quantity: 3 }];

module.exports = {
  product,
  newProduct,
  productSale,
  Sale,
}