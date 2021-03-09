// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
  let item = accounts.filter((account) => account.id === id)
  return item[0]
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA,accountB) => accountA.name.last < accountB.name.last ? -1 : 1)
}

function getTotalNumberOfBorrows(account, books) {
  let count = 0
  books.forEach((book) => {
    book.borrows.forEach((item) => {
      account.id === item.id ? count ++ : count += 0
    })
  })
  return count
}

function getBooksPossessedByAccount(account, books, authors) {
  let count = []
  books.forEach((book) => {
    book.borrows.forEach((item) => {
      if ((account.id === item.id) && (!item.returned)) {
        count.push(book)
      }  
    })
  })
  let result = count.map((book) => {
    book.author = authors.find((person) => book.authorId === person.id)
    return book
  })
  return result
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
