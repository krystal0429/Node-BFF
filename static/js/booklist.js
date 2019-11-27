let books = [{name: "西游记"}, {name: "红楼梦"}];
console.log('dddd')
import find from './find.js';
export default {
    findBook(name) {
        find();

        return books.find((book) => {
            return book.name.indexOf(name) >= 0;
        })
    }
}