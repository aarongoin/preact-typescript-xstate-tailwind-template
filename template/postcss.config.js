
const plugins = [
  require('postcss-import'),
  require('tailwindcss'),
  require('postcss-preset-env')({ stage: 1 }),
];

if (process.NODE_ENV === "production") {
  plugins.splice(2, 0, require('@fullhuman/postcss-purgecss')({ content: ['./src/*.html', './src/**/*.tsx', './src/**/*.css', './dist/*'] }));
}

module.exports = { plugins };