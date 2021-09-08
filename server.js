const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

//building
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
const apiRoutes = require("./routes/api-routes");
app.use(apiRoutes);

// connection
app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
