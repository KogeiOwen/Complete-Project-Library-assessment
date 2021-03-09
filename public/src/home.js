// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let count = books.filter((book) => !book.borrows[0].returned)
  return count.length
}

function getMostCommonGenres(books) {
  let array = books.map((book) => book.genre)
  let genres = array.filter(function(book, pos) {
    return array.indexOf(book) == pos
  })
  let result = genres.map((genre) => {
    let total = books.filter((book) => book.genre === genre)

    let item = new Object()
    item.name = `${genre}`
    item.count = total.length
  
    return item
  })
  result.length = 5
  return result.sort((itemA, itemB) => (itemA.count < itemB.count ? 1 : -1))
}

function getMostPopularBooks(books) {
  let result = books.map(({title,borrows})=> {
    let total = borrows.length
    let item = new Object()
    item.name = `${title}`
    item.count = total
    return item
  })
  
  result.sort((itemA, itemB) => (itemA.count < itemB.count ? 1 : -1))
  result.length = 5
  return result

}

function getMostPopularAuthors(books, authors) {
  let result = authors.map((author) => {
    let bookList = books.filter((book) => book.authorId === author.id)
    let count = 0
    bookList.forEach(({borrows}) => {
      count += borrows.length
    })
    let item = new Object()
    item.name = `${author.name.first} ${author.name.last}`
    item.count = count
    return item
  })
  
  result.sort((itemA, itemB) => (itemA.count < itemB.count ? 1 : -1))
  result.length = 5
  return result
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
