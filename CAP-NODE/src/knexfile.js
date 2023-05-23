require('dotenv').config();

const knex = {
    development: {
        client: 'mysql2',
        connection: {
            host: process.env.MYSQL_HOST,
            port: 3306,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE
        },
        migrations: {
            tableName: "migrations",
            directory: `${__dirname}/database/migrations`
        }

    }
}

module.exports = knex