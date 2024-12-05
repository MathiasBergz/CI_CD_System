exports.up = function(knex) {
    return knex('Develop').insert([
        {branch: 'develop', versao: '1.0.1'}
    ])
};

exports.down = function(knex) {
    return knex('Develop').whereIn('branch', ['develop']).del()
};
