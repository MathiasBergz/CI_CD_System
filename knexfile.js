module.exports = {
    production: {
      client: 'pg',
      connection: {
        host: 'aws-0-sa-east-1.pooler.supabase.com',
        port: 6543,
        database: 'postgres',
        user: 'postgres.oxzbqtkdwwcoutyicwro',
        password: 'Audithorium!1505'
      },
      migrations: {
        tableName: 'knex_migrations',
        directory: './migrations'
      }
    }
  };
  