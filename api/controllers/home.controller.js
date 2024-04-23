import path from "path";

export function renderHome(req, res) {
  res.status(200).render(path.resolve("api", "views", "index.hbs"));
}
