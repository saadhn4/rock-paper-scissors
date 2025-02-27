import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5002;

app.use(express.static(path.join(__dirname, "build"))); //iske upar dusre backend routes nai likhna

app.get("/saad", (req, res) => {
  try {
    res.status(200).json({ msg: "Hello saad!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

app.get("/", (req, res) => {
  try {
    res.status(200).json({
      msg: "Hello world!",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      msg: error,
    });
  }
});

app.get("/*", (req, res) => {
  //iske niche nai
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`${PORT}`);
});
