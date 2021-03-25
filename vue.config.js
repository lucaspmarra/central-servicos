//vue.config.js
module.exports = {
    publicPath: '/central-de-sistemas',
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "Central de Sistemas";
                return args;
            })
    },
}
