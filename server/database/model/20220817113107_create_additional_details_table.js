/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("additional_details", (table) =>{
        table.uuid('additional_details_id').notNullable().primary();
        table.string('emboss');
        table.string('dry_emboss');
        table.string('monetary_gift');
        table.string('RSVP');
        table.string('hard_bound');
        table.string('soft_bound');
        table.string('field');


  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
