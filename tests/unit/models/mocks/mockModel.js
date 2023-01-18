const products = [
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
const Sale = [
  {productId:1,quantity:1}
]
const productSale = {
  id: 3,
  itemsSold: [
    {productId:1,quantity:1}
  ]
};

module.exports = {
  products,
  newProduct,
  productSale,
   Sale,

}