/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('billing_info', (table) => {
        table.uuid('OP_id').notNullable().primary();
        table.uuid('user_id').notNullable().references('user_id').inTable('users');
        table.uuid('order_id').notNullable().references('order_id').inTable('order');
        table.float('unit_cost');
        table.float('sub_total');
        table.float('payment_method');
        table.dateTime('date_paid');

    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("billing_info");
};
