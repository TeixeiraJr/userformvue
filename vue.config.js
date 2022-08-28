const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        https: true,
        port: process.env.PORT,
        allowedHosts: "all"
    }
})
