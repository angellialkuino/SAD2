/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('order_purchase', (table) => {
        table.uuid('OP_id').notNullable().primary();
        table.integer('customer_id').references('user_id').inTable('users');
        table.integer('order_id').references('order_id').inTable('order_details');
        table.float('unit_cost',2).notNullable();
        table.float('VAT',2).notNullable();
        table.float('sub_total',2).notNullable();
        table.string('claim_type').notNullable();
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
