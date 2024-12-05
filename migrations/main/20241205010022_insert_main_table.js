exports.up = function(knex) {
    return knex('Main').insert([
        {branch: 'main', versao: '1.0.1'}
    ])
};

exports.down = function(knex) {
    return knex('Main').whereIn('branch', ['main']).del()
};
