/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('movie_watched', (table) => {
      table.increments('id');
      table.string('title');
      table.string('poster');
      table.foreign('id').references('movie_list.id')
    
    
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
      return knex.schema.alterTable('movie_watched', table => {
        table.dropForeign('id')})
        .then(() => {
            return knex.schema.dropTableIfExists('movie_watched')
            });
  };
  
