const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
    indexPath: '../index.html',
    publicPath: '/supermall/dist', // 基本路径
    outputDir: 'dist', // 输出文件目录
    lintOnSave: true,
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('views',resolve('src/views'))
            .set('common', resolve('src/common'))
            .set('components', resolve('src/components'))
            .set('network', resolve('src/network'))
    }
}