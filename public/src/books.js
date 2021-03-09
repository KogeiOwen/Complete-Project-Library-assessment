// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
}

function findBookById(books, id) {
  let result = books.find((book) => book.id === id)
  return result
}

function partitionBooksByBorrowedStatus(books) {
  let unreturned = books.filter((book) => !book.borrows[0].returned)
  let returned = books.filter((book) => book.borrows[0].returned)
  return [unreturned, returned]
}

function getBorrowersForBook(book, accounts) {
  let array = book.borrows.map((transcation) => {
    let item = accounts.find((account) => transcation.id === account.id)
    return {...transcation,...item}
  })
  array.length = 10
  return array

  
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
