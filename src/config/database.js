// const mysql = require('mysql')

// const conn = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '313362',
//   database: 'barber_place'
// })

// function connection () {
//   return conn
// }

// module.exports = connection

module.exports = {
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '313362',
  database: 'barber_place',
  operatorAliases: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}
