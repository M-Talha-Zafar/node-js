const app = require("./server");
const mongoose = require("mongoose");

mongoose
  .connect(`${process.env.CONNECTION_STRING}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB successfully!"))
  .catch((err) => console.error("MongoDB connection error:", err));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
