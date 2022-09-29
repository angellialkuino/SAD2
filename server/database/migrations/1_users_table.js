/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("users", (table) => {
    table.uuid('user_id').notNullable().primary();
    table.string('role').notNullable();
    table.string('full_name').notNullable();
    table.string('phone_number');
    table.string('email').notNullable(); //tama ba data type ng email and password
    table.string('password').notNullable();
    table.string('fb_account').notNullable();
    table.string('address');
    table.string('barangay');
    table.string('postal_code');

    //add roles table?????
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("users");
};
