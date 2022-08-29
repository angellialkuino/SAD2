/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable("order_documentation", (table) =>{
        table.uuid('order_id').references('order_id').inTable('order_details');
        table.uuid('OP_id').references('OP_id').inTable('order_purchase');
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
