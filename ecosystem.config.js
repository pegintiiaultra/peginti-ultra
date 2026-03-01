module.exports = {
  apps: [
    {
      name: "peginti-ultra",
      script: "./server.js",
      exec_mode: "fork"
    },
    {
      name: "peginti-chat",
      script: "./public_chat.js",
      exec_mode: "cluster",
      instances: 1
    },
    {
      name: "booivinichat",
      script: "./premium_chat.js",
      exec_mode: "fork"
    }
  ]
};
