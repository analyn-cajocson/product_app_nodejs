const Product = require('../models/product.model');

exports.test = function (req, res) {
  res.send('Greetings from the Test controller');
};

exports.create = function (req, res) {
  let product = new Product(
    {
      name: req.body.name,
      price: req.body.price
    }
  );

  product.save(function (err) {
    if (err) {
      throw (err);
    }
    res.send('Product Created Successfully');
  });
};