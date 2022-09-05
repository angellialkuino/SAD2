/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("additional_details", (table) =>{
        table.uuid('additional_details_id').notNullable().primary();
        table.string('other_pages');
        table.string('cover');
        table.string('cards');
        table.string('wax_seal');
        table.string('dried_flowers');
        table.string('brooch');


  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("additional_details");
};
