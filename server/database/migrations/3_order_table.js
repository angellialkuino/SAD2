/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('order', (table) => {
        table.uuid('order_id').notNullable().primary();
        table.uuid('user_id').notNullable().references('user_id').inTable('users');
        table.string('invite_type').notNullable();
        table.string('material').notNullable();
        table.date('event_date').notNullable(); //tama man ang date type noh
        table.string('motif').notNullable();
        table.string('invite_title').notNullable();
        table.string('font_style').notNullable();
        table.string('content_link').notNullable();
        table.integer('num_of_invites').notNullable();
        table.string('peg_link').notNullable();
        table.dateTime('date_ordered').notNullable();
        table.date('order_deadline').notNullable();
        table.string('claim_type').notNullable();
        table.string('order_status').notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("order");
    
};
