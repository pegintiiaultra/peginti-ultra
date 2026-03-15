module.exports = {
  apps: [
    {
      name: "peginti-app",
      script: "peginti.js",
      interpreter: "node",
      cwd: "/data/data/com.termux/files/home/Peginti-ultra/peginti-ultra"
    },
    {
      name: "peginti-tunnel",
      script: "cloudflared",
      args: "tunnel run peginti",
      cwd: "/data/data/com.termux/files/home"
    }
  ]
};
