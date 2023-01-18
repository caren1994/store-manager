

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

const findId = [true, true];
const allSales =[
  {
    "date": "2023-01-18T17:29:36.000Z",
    "saleId": 1,
    "productId": 1,
    "quantity": 5
  },
  {
    "date": "2023-01-18T17:29:36.000Z",
    "saleId": 1,
    "productId": 2,
    "quantity": 10
  },
  {
    "date": "2023-01-18T17:29:36.000Z",
    "saleId": 2,
    "productId": 3,
    "quantity": 15
  },
  {
    "date": "2023-01-18T20:39:56.000Z",
    "saleId": 3,
    "productId": 1,
    "quantity": 1
  },
  {
    "date": "2023-01-18T20:39:56.000Z",
    "saleId": 3,
    "productId": 2,
    "quantity": 5
  },
  {
    "date": "2023-01-18T20:40:50.000Z",
    "saleId": 4,
    "productId": 1,
    "quantity": 1
  },
  {
    "date": "2023-01-18T20:40:50.000Z",
    "saleId": 4,
    "productId": 2,
    "quantity": 5
  },
  {
    "date": "2023-01-18T20:42:02.000Z",
    "saleId": 5,
    "productId": 1,
    "quantity": 1
  },
  {
    "date": "2023-01-18T20:42:02.000Z",
    "saleId": 5,
    "productId": 2,
    "quantity": 5
  }
]
const saleId = [
[
  {
    "date": "2023-01-18T17:29:36.000Z",
    "productId": 3,
    "quantity": 15
  }
]];
module.exports = {
  product,
  newProduct,
  productSale,
  Sale,
  findId,
  allSales,
  saleId,
}