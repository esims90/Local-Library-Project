function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id)
}

function sortAccountsByLastName(accounts) {
  const results = accounts.sort((accountA, accountB) => (accountA.name.last > accountB.name.last) ? 1:-1);
  return results
}

function getTotalNumberOfBorrows(account, books) {
  let result = 0
  const totalBorrowed = books.filter((book) => {
    if (book.borrows){
      book.borrows.filter((accounts) => {
        if (accounts.id === account.id){
          result = result + 1
        }
      })
    }
  })
  return result
}

function getAuthor(book, authors) {
  const author = authors.find((author) => author.id === book.authorId);
  return author;
}

function getBooksPossessedByAccount(account, books, authors) {
  let borrowed = []                  
  books.filter((book) => {
    let bookBorrows = book.borrows
     bookBorrows.filter((borrow) => {
       if (borrow.id === account.id && borrow.returned == false) 
         borrowed.push(book)})     
  }) 
  let result = borrowed.map((book) => {
    return { ...book, author: getAuthor(book, authors) };
  });
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
