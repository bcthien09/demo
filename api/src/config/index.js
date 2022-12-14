const config = {
    db: {
      host: process.env.MYSQL_HOST || 'localhost',
      user: process.env.MYSQL_USER || 'root',
      password: process.env.MYSQL_PASSWORD || 'root',
      database: process.env.MYSQL_DATABASE,
    },
    page: 1,
    listItemPage: 20,
  };

  module.exports = config;
