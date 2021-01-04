const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "phantomxjoker",
    projectName: "app-beta",
    webpackConfigEnv,
    argv,
  });

  return webpackMerge.smart(defaultConfig, {
    devServer: {
      port: 5000
    },
  });
};
