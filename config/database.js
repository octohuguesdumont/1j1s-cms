module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', process.env.POSTGRE_DATABASE_HOST),
      port: env.int('DATABASE_PORT', process.env.POSTGRE_DATABASE_PORT),
      database: env('DATABASE_NAME', process.env.POSTGRE_DATABASE_NAME),
      user: env('DATABASE_USERNAME', process.env.POSTGRE_DATABASE_USERNAME),
      password: env('DATABASE_PASSWORD', process.env.POSTGRE_DATABASE_PASSWORD),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
