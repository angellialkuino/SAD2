/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("additional_details", (table) =>{
        table.uuid('additional_details_id').notNullable().primary();
        table.boolean('emboss');
        table.boolean('dry_emboss');
        table.boolean('plain print');
        table.boolean('foil print');
        table.boolean('monetary_gift');
        table.boolean('RSVP');
        table.boolean('hard_bound');
        table.boolean('soft_bound');


  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("additional_details");
};
