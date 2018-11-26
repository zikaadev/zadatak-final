// create_Products.js
var faker = require('faker');
function generateProducts() {
  var products = [];
  for (var id = 0; id < 50; id++) {
    var title = faker.name.title();
    var description = faker.name.description();
    var price = faker.finance.price();
    var image = faker.image.image();
    var quantity = faker.random.quantity();

    products.push({
      id: id,
      title: title,
      description: description,
      price: price,
      image: image,
      quantity: quantity
    });
  }
  return { products: products };
}
module.exports = generateProducts;
