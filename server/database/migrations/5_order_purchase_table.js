/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('order_purchase', (table) => {
        table.uuid('OP_id').notNullable().primary();
        table.uuid('user_id').notNullable().references('user_id').inTable('users');
        table.uuid('order_id').notNullable().references('order_id').inTable('order');
        table.float('unit_cost').notNullable();
        table.float('VAT').notNullable();
        table.float('sub_total').notNullable();
        table.dateTime('purchase_date').notNullable();

    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("order_purchase");
};