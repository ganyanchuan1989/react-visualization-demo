const CracoLessPlugin = require("craco-less");
const path = require("path");
// const { getThemeVariables } = require("antd/dist/theme");

// const darkTheme = getThemeVariables({
//   dark: true, // 开启暗黑模式
//   compact: false, // 开启紧凑模式
// });

module.exports = {
  webpack: {
    alias: {
      "@": path.join(path.resolve(__dirname, "./src")),
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // modifyVars: {
            //   ...darkTheme,
            //   'primary-color':'#3cc2d3',
            //   'heading-color':'#8b929d',
            //   'text-color':'#8b929d',
            //   'text-color-secondary':'#8b929d',
            //   'border-color-base':'#030405',
            //   'body-background': '#191c1f',
            //   'component-background':'#191c1f',
            //   'background-color-light': '#13394D',
            //   '@primary-1': '#13394D',
            // },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
