const Rize = require('rize')
const rize = new Rize()
rize
  .goto('http://localhost:8082/books/list')
  .waitForNavigation()
  .assertTitle('books list')
  .end() 