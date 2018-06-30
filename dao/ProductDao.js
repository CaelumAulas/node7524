class ProductDao {
  constructor(connection) {
    this._connection = connection
  }

  list(callback) {
    this._connection.query('SELECT * FROM livros', callback)
  }

  getId(id=0, callback) {
    this._connection.query('SELECT * FROM livros WHERE id=?', id, callback)
  }
}

module.exports = ProductDao