/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable("order_documentation", (table) =>{
        table.uuid('doc_id').notNullable().primary();
        table.uuid('order_id').references('order_id').inTable('order_details');
        table.dateTime('date').notNullable();
        table.text('description').notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("order_documentation");
    
};
