/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("users", (table) => {
    table.uuid('user_id').notNullable().primary();
    table.string('full_name').notNullable();
    table.integer('phone_number').notNullable();
    table.string('email').notNullable(); //tama ba data type ng email and password
    table.string('password').notNullable();
    table.string('messenger_account');
    table.string('full_addres');

  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("users");
};
