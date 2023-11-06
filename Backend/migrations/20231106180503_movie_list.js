/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('movie_list', (table) => {
    table.increments('id');
    table.string('title');
    table.string('poster');
    table.string('summary', 255);
    table.string('cast');
    table.string('genre');
    table.integer('releaseDate')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('movie_list');
};
