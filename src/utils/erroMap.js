const errorMap = {
  PRODUCT_NOT_FOUND: 404,
  PRODUCTS_NOT_FOUND: 404,
  INVALID_VALUE: 422,
  // TRAVEL_NOT_FOUND: 404,
  // DRIVER_NOT_FOUND: 404,
  // TRAVEL_CONFLICT: 409,
};

const mapError = (type) => errorMap[type] || 500;// função chamada qwue pega o type e verica no error map e retorna o status http

module.exports = {
  errorMap,
  mapError,
};