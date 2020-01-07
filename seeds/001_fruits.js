
exports.seed = async function(knex) {
    await knex("fruits").truncate();
    await knex("fruits").insert([
       {name: "banana", avgWeightOz: 20.2, delicious: true, color: "yellow"},
       {name: "grapes", avgWeightOz: 16.4, delicious: true, color: "green"},
       {name: "apples", avgWeightOz: 12.2, delicious: true, color: "red"}
    ])
};
