module.exports = {
  apps: [
    {
      name: "peginti-ultra",
      script: "./server.js",
      env: {
        PORT watch: true,
     : 3000,
        NODE_ENV: "production"
      }
    },
    {
      name: "peginti-chat",
      script: "./public_chat.js",
      watch: true PORT: 3001,
       ,
      env: {
           {
      name NODE_ENV: "production      script: "./"
      }
    },
: "booivinichat",
      watch: true,
      env: {
       premium_chat.js",
 PORT: 3002,
        NODE_ENV: "production"
      }
    }

pm2 start ecosystem  ]
};
