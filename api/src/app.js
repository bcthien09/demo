const express = require('express');
const app = express();

const routeCrypto = require("./routes");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get('/', (req,res) => {
  return res.send({data: 'Welcome APIs'});
});

app.use("/api/v1/crypto", routeCrypto);


/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(process.env.PORT, () => {
    console.log('Server is running on port 8080');
});

module.exports = app;
