# 資料庫

## sequelize

Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more.

<https://sequelize.org/>

```
npm install --save sequelize
```

```js
const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = new Sequelize('sqlite::memory:')

class User extends Model {}
User.init(
  {
    username: DataTypes.STRING,
    birthday: DataTypes.DATE,
  },
  { sequelize, modelName: 'user' }
)

sequelize
  .sync()
  .then(() =>
    User.create({
      username: 'janedoe',
      birthday: new Date(1980, 6, 20),
    })
  )
  .then((jane) => {
    console.log(jane.toJSON())
  })
```
