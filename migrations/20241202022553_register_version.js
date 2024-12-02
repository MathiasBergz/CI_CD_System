exports.up = function(knex) {
    return knex('sua_tabela')
      .insert([
        { coluna1: 'valor1', coluna2: 'valor2', coluna3: 'valor3' },
        { coluna1: 'valor4', coluna2: 'valor5', coluna3: 'valor6' },
        { coluna1: 'valor7', coluna2: 'valor8', coluna3: 'valor9' }
      ])
      .then(() => {
        console.log('Registros inseridos com sucesso.');
      })
      .catch((err) => {
        console.error('Erro ao inserir os registros:', err);
      });
  };
  
  exports.down = function(knex) {
    return knex('sua_tabela')
      .whereIn('coluna1', ['valor1', 'valor4', 'valor7'])  // Certifique-se de usar critérios que identifiquem corretamente os registros
      .del()
      .then(() => {
        console.log('Registros deletados com sucesso.');
      })
      .catch((err) => {
        console.error('Erro ao deletar os registros:', err);
      });
  };
  