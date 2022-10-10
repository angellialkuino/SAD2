/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable("order_log", (table) =>{
        table.uuid('log_id').notNullable().primary();
        table.uuid('order_id').notNullable().references('order_id').inTable('order');
        table.dateTime('date').notNullable();
        table.text('description').notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("order_log");
    
};
