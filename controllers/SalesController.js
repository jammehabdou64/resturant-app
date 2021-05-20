const { Sale } = require("../models");

//all sales data
exports.index = async (req, res) => {
  const sales = await Sale.find();
  return sales
    ? res.json({ success: true, message: sales })
    : res.json({ success: false, message: null });
};

// store sale

exports.store = async (req, res) => {
  const sale = await Sale.create(req.body);
  return sale
    ? res.json({ success: true, message: `sale added successfully` })
    : res.json({ success: false, message: null });
};

//get sale by id

exports.show = async (req, res) => {
  const sale = await Sale.findById(req.params.sale);
  return sale
    ? res.json({ success: true, message: sale })
    : res.json({ success: false, message: null });
};

//update sale

exports.update = async (req, res) => {
  const sale = await Sale.findByIdAndUpdate(req.params.sale, req.body);
  return sale
    ? res.json({ success: true, message: `sale updated successfully` })
    : res.json({ success: false, message: null });
};

//delete sale
exports.destroy = async (req, res) => {
  const sale = await Sale.findByIdAndRemove(req.params.sale);
  return sale
    ? res.json({ success: true, message: `sale deleted successfully` })
    : res.json({ success: false, message: null });
};
