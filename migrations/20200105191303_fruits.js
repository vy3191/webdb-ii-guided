
exports.up = async function(knex) {
    await knex.schema.createTable("fruits", (table) => {
        //  table.integer("id").notNull().unique().primary()
        // translates to the above code.
            table.increments("id");
            table.text("name").notNull().unique();
            table.float("avgWeightOz")
            table.boolean("delicious").defaultTo(false);
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("fruits")
};
