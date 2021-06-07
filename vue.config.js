module.exports = {
    chainWebpack: config => {
        config
        .plugin('html')
        .tap(args => {
            args[0].title = 'Mini Netflix'
            return args
        })
    },
    baseUrl: process.env.NODE_ENV === 'production'
    ? '/mini-netflix/'
    : '/'
}