module.exports = {
  plugins: [
    require('postcss-import'),
		require('tailwindcss'),
		require('@fullhuman/postcss-purgecss')({ content: ['./src/*.html', './src/**/*.tsx', './src/**/*.css', './dist/*'] }),
    require('postcss-preset-env')({ stage: 1 }),
  ]
};