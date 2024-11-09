const { defineConfig } = require("@vue/cli-service");
const wepack = require("webpack");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new wepack.DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false),
        // __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "false",
        __VUE_OPTIONS_API__: JSON.stringify(true),
      }),
    ],
  },
});
