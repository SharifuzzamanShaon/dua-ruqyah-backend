const app = require("./app");
const bodyParser = require("body-parser");
const { prisma } = require("./DB/ConnectDB");
const router = require("./router");
require("dotenv").config();
const cors = require("cors");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Server is healthy",
    timestamp: new Date().toISOString(),
  });
});
app.use(
  cors({
    origin: [process.env.CLIENT_side_port,"https://dua-ruqyah-weld-seven.vercel.app/"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, 
  })
);
app.use("/api/v1", router);

app.use((error, req, res, text) => {
  const message = error.message ? error.message : "Server Error Occured";
  const status = error.status ? error.status : 500;
  res.status(status).json({ success: false, message });
});

const port =process.env.SERVER_PORT || 5005;
app.listen(port, async () => {
  console.log(`server Running at http://localhost:${port}`);
});