import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: async (config) => {
    if (config.module && config.module.rules) {
      // Filter out the existing CSS rule
      const cssRule = config.module.rules.find(
        (rule) =>
          rule &&
          typeof rule !== "string" &&
          rule.test instanceof RegExp &&
          rule.test.test(".css")
      );

      if (cssRule && typeof cssRule !== "string") {
        // Remove it from the rules
        config.module.rules = config.module.rules.filter(
          (rule) => rule !== cssRule
        );
      }

      // First add a rule for .storybook CSS files (non-modules)
      config.module.rules.push({
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
        include: [path.resolve(__dirname, "./")],
      });

      // Then add our custom CSS loader configuration for all other CSS
      config.module.rules.push({
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                auto: true, // Enable CSS modules for files ending with .module.css
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["tailwindcss", "autoprefixer"],
              },
            },
          },
        ],
        include: path.resolve(__dirname, "../src"),
      });
    }

    return config;
  },
};

export default config;
