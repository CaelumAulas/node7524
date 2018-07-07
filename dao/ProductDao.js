class ProductDao {
  constructor(connection) {
    this._connection = connection
  }

  list(callback) {
    //  return new Promise(() => {
       this._connection.query('SELECT * FROM livros', callback)
    //  })
  }
  
  save(livro, callback){
    this._connection.query('INSERT INTO livros SET ?', livro, callback)
  }

  getId(id=0, callback) {
    this._connection.query('SELECT * FROM livros WHERE id=?', id, callback)
  }
}

module.exports = ProductDao