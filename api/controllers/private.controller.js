import jwt from "jsonwebtoken";
import "dotenv/config";

import path from "path";

const secretKey = process.env.SECRET_KEY;

export function renderPrivate(req, res) {
  const { token } = req.query;

  jwt.verify(token, secretKey, (err, data) => {
    if (err) {
      res
        .status(401)
        .render(path.resolve("api", "views", "pages", "prohibido.hbs"));
      return;
    }
    res
      .status(200)
      .render(path.resolve("api", "views", "pages", "private.hbs"), {
        email: data.email,
      });
  });
}
