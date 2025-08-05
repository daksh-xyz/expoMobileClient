// webpack.config.js
const createExpoWebpackConfigAsync = require('@expo/webpack-config')

module.exports = async function (env, argv) {
    const config = await createExpoWebpackConfigAsync(env, argv)

    // Find the existing rule that handles SVGs
    const fileLoader = config.module.rules.find(rule => rule.test?.test?.('.svg'))

    // Remove the default SVG loader
    config.module.rules = config.module.rules.filter(rule => rule.test?.test?.('.svg') !== true)

    // Add svgr loader
    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    })

    // Optional: keep original file-loader for importing SVG as URLs
    if (fileLoader) config.module.rules.push(fileLoader)

    return config
}
