import express from "express";
import router from "./routes/routes.js";
import path from "path";
import exphbs from "express-handlebars";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve("public")));
app.use(express.urlencoded({ extended: true }));

app.use("/", router);
app.listen(PORT, () => {
  console.log(`El servidor está inicializado en el puerto ${PORT}`);
});

app.engine(
  ".hbs",
  exphbs.engine({
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");
app.set("views", path.resolve("api", "views"));

export default app;
