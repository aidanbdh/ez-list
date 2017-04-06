
exports.up = function(knex, Promise) {
  const query = knex.schema.createTable('inventory', table => {
    table.increments('id')
    table.integer('user')
    table.foreign('user').references('users.id')
    table.string('name')
    table.decimal('price')
    table.string('location')
  })
  return query
}

exports.down = function(knex, Promise) {
  const query = knex.schema.dropTable('inventory')
  return query
}
