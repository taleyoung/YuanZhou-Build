export default (appInfo: any) => {
  const config: any = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1588906428320_8996";

  // add your config here
  config.middleware = [];
  config.mysql = {
    // database configuration
    client: {
      // host
      host: "127.0.0.1",
      // port
      port: "3306",
      // username
      user: "root",
      // password
      password: "taleyoung",
      // database
      database: "yuanzhou"
    },
    // load into app, default is open
    app: true
  };
  config.cors = {
    origin: "http://localhost:3333",
    credentials: true,
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH"
  };
  config.security = {
    csrf: {
      enable: false
    }
  };

  return config;
};
