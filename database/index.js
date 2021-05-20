const mongose = require("mongoose");

const connectDatabase = async () => {
  try {
    const connect = await mongose.connect(
      process.env.DB_HOST,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      },
      (err) =>
        !err
          ? console.log("Database connected succesfully")
          : console.log("not connected")
    );
    return connect;
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDatabase;
