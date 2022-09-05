/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('order', (table) => {
        table.uuid('user_id').references('user_id').inTable('users');
        table.uuid('order_id').references('order_id').inTable('order_details');
        table.dateTime('date_ordered').notNullable();
        table.date('order_deadline').notNullable();
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
