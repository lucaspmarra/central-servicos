//vue.config.js
module.exports = {
    publicPath: '/central-servicos',
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "Central de Serviços";
                return args;
            })
    },
}
