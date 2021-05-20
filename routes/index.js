const usersRoute = require("./user");
const categoriesRoute = require("./category");
const itemsRoute = require("./item");
const salesRoute = require("./sale");

module.exports = (app) => {
  app.use("/api/v1/users", usersRoute);
  app.use("/api/v1/categories", categoriesRoute);
  app.use("/api/v1/items", itemsRoute);
  app.use("/api/v1/sales", salesRoute);
  return;
};
