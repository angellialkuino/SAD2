/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("order_details", (table) =>{
        table.uuid('order_id').notNullable().references('order_id').inTable('order');
        table.uuid('item_id').notNullable().references('item_id').inTable('items');
        table.string('type');
        table.string('color');
        table.string('size');
        table.string('quantity');
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("order_details");
};
