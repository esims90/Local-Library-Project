function getTotalBooksCount(books) {
  let results = 0
  for (let i = 0; i < books.length; i++){
    results++
  }
  return results
}

function getTotalAccountsCount(accounts) {
  let results = 0
  for (let i = 0; i < accounts.length; i++){
    results++
  }
  return results
}


function getBooksBorrowedCount(books) {
  const borrowed = books.filter((book) => book.borrows[0].returned === false)
  return borrowed.length
}

function getMostCommonGenres(books) {
  const result = [];
  for (let book of books) {
    const genre = result.find(
    (current) => current.name === book.genre)
    if (genre){
      genre.count++
    }else{
    result.push({name: book.genre,count: 1})
    }
  }
  
 let sorted = result.sort((resultA, resultB) => (resultA.count < resultB.count ? 1:-1)).slice(0,5);
  
  return sorted
}

function getMostPopularBooks(books) {
  const result = [];
  for (let book of books) {
    const totalNumber = book.borrows.length
    const popularBooks = result.find(
    (current) => current.name === book)
    if (popularBooks){
      popularBooks.count++
    }else{
    result.push({name: book.title,count: totalNumber})
    }
  }
  
 let sorted = result.sort((resultA, resultB) => (resultA.count < resultB.count ? 1:-1)).slice(0,5);
  
  return sorted
}

function getMostPopularAuthors(books, authors) {
  const result = []
  for (let author of authors) {
    const authorName = author.name.first + ' ' + author.name.last
    for (let book of books){
    const totalNumber = book.borrows.length
    if (author.id === book.authorId){
    result.push({name: authorName,count: totalNumber})
    }
    }
  }
    
   let sorted = result.sort((resultA, resultB) => (resultA.count < resultB.count ? 1:-1)).slice(0,5);
  
  return sorted
}


module.exports = { 
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
