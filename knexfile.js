exports.development = {
  client: 'postgresql',
  connection: {
    user: 'Aidan',
    database: process.env.DATABASE_URL || 'ezlist'
  },
  migrations: {
    directory: './migrations',
    tableName: 'knex_migrations'
  }
}
