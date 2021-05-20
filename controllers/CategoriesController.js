const { Category } = require("../models");

//all categories data
exports.index = async (req, res) => {
  const categories = await Category.find();
  return categories
    ? res.json({ success: true, message: categories })
    : res.json({ success: false, message: null });
};

// store category

exports.store = async (req, res) => {
  const category = await Category.create(req.body);
  return category
    ? res.json({ success: true, message: `category added successfully` })
    : res.json({ success: false, message: null });
};

//get category by id

exports.show = async (req, res) => {
  const category = await Category.findById(req.params.category);
  return category
    ? res.json({ success: true, message: category })
    : res.json({ success: false, message: null });
};

//update category

exports.update = async (req, res) => {
  const category = await Category.findByIdAndUpdate(
    req.params.category,
    req.body
  );
  return category
    ? res.json({ success: true, message: `category updated successfully` })
    : res.json({ success: false, message: null });
};

//delete category
exports.destroy = async (req, res) => {
  const category = await Category.findByIdAndRemove(req.params.category);
  return category
    ? res.json({ success: true, message: `category deleted successfully` })
    : res.json({ success: false, message: null });
};
