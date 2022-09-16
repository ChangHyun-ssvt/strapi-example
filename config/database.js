module.exports = ({ env }) => ({
  connection: {
    client: env('DATABASE_CLIENT'),
    connection: {
      host: env('DATABASE_HOST'),
      port: parseInt(env('DATABASE_PORT')),
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USERNAME'),
      password: env('DATABASE_PASSWORD'),
      // ssl: Boolean(env('DATABASE_SSL')),
      ssl: false,
    },
  },
});
