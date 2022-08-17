const express = require('express');
const cors = require("cors");
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./config/mongoose.config");
require("./routes/users.routes")(app);
require("./routes/submissions.routes")(app);
require("./routes/comments.routes")(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );