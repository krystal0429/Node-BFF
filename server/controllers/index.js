import IndexController from "./IndexController.js";
import BooksController from "./BooksController";
const indexController = new IndexController();
const booksController = new BooksController();
export default (app, router) => {
    router.get('/', indexController.actionIndex);
    router.get('/books/list', booksController.actionList);
}