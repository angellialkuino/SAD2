/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("order_details", (table) =>{
        table.uuid('order_id').notNullable().primary();
        table.string('invite_type').notNullable();
        table.string('material').notNullable();
        table.date('event_date').notNullable(); //tama man ang date type noh
        table.string('motif').notNullable();
        table.string('invite_title').notNullable();
        table.string('font_style').notNullable();
        table.string('content_link').notNullable();
        table.integer('num_of_invites').notNullable();
        table.string('peg_link').notNullable();
        table.string('inner_paper').notNullable();
        table.string('envelope_paper');
        table.string('inner_size').notNullable();
        table.string('envelope_size');
        table.boolean('envelope_liner');
        table.boolean('envelope_lock');
        table.string('header_text');
        table.string('body_text');
        table.uuid('additional_details_id').references('additional_details_id').inTable('additional_details');
    
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("order_details");
};
