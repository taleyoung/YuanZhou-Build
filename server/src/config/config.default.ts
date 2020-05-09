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

  return config;
};
