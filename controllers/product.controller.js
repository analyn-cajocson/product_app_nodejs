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

exports.show = function (req, res) {
  Product.findById(req.params.id, function (err, product) {
    if (err) throw (err);
    res.send(product);
  });
};

exports.update = function (req, res) {
  Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product){
    if (err) throw (err);
    res.send(product);
  });
};

exports.delete = function (req, res) {
  Product.findByIdAndRemove(req.params.id, function (err){
    if (err) throw (err);
    res.send('Deleted Successfully');
  });
};

exports.index = function (req,res) {
  Product.find({}, function (err, products) {
    res.send(products);
  });
};