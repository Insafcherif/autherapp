const {
    createNewAuthor,
    getOneAuthor,
    getAllAuthors,
    updateAuthor,
    deleteExistingAuthor,
  }= require("../controllers/author.controller");

module.exports = (app) => {
  app.post("/api/author", createNewAuthor);
  app.get("/api/author", getAllAuthors);
  app.get("/api/author/:id", getOneAuthor);
  app.put("/api/author/:id", updateAuthor);
  app.delete("/api/author/:id", deleteExistingAuthor);
};