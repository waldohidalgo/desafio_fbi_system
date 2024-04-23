import jwt from "jsonwebtoken";
import "dotenv/config";
import path from "path";
import { results } from "../data/agentes.js";

const secretKey = process.env.SECRET_KEY;
export function login(req, res) {
  const { email, password } = req.body;

  const user = results.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    jwt.sign(user, secretKey, { expiresIn: 2 * 60 }, (err, token) => {
      if (err) {
        res.status(500).send("Ha ocurrido un error");
        return;
      }
      res.render(path.resolve("api", "views", "pages", "login.hbs"), {
        email,
        token,
      });
    });
  } else {
    res
      .status(401)
      .render(
        path.resolve("api", "views", "pages", "credenciales_incorrectas.hbs")
      );
  }
}
