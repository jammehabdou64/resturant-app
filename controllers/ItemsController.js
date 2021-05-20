const { Item } = require("../models");

//all items data
exports.index = async (req, res) => {
  const items = await Item.find();
  return items
    ? res.json({ success: true, message: items })
    : res.json({ success: false, message: null });
};

// store item

exports.store = async (req, res) => {
  const item = await Item.create(req.body);
  return item
    ? res.json({ success: true, message: `item added successfully` })
    : res.json({ success: false, message: null });
};

//get item by id

exports.show = async (req, res) => {
  const item = await Item.findById(req.params.item);
  return item
    ? res.json({ success: true, message: item })
    : res.json({ success: false, message: null });
};

//update item

exports.update = async (req, res) => {
  const item = await Item.findByIdAndUpdate(req.params.item, req.body);
  return item
    ? res.json({ success: true, message: `item updated successfully` })
    : res.json({ success: false, message: null });
};

//delete item
exports.destroy = async (req, res) => {
  const item = await Item.findByIdAndRemove(req.params.item);
  return item
    ? res.json({ success: true, message: `item deleted successfully` })
    : res.json({ success: false, message: null });
};
