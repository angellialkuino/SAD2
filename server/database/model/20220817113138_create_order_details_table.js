/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("order_details", (table) =>{
        table.uuid('order_id').notNullable().primary();
        table.string('invite_type').notNullable();
        table.date('event_date').notNullable(); //tama man ang date type noh
        table.string('motif').notNullable();
        table.string('font_style').notNullable();
        table.integrer('quantity').notNullable();
        table.string('inner_type').notNullable();
        table.string('outter_type').notNullable();
        table.string('envelope_type').notNullable();
        table.string('inner_size').notNullable();
        table.string('outter_size').notNullable();
        table.string('envelope_size').notNullable();
        table.string('inner_size').notNullable();
        table.integer('additional_details_id').references('additional_details_id').inTable('additional_details');
    
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("order_details");
};
