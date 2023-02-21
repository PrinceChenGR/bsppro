module.exports = {
    lintOnSave:false,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                pathRewrite: {
                    '^/api':''
                }
            }
        }
    }
}
