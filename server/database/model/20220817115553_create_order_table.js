/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('order', (table) => {
        table.uuid('customer_id').references('user_id').inTable('users');
        table.uuid('order_id').references('order_id').inTable('order_details');
        table.dateTime('order_date').notNullable();
        table.string('urgency').notNullable();
        table.string('order_status');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("order");
    
};
