import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: "./index.js",
    output: {
        file: "./output.js",
        format: "esm",
    },
    external: ["react", "react-dom", "@jupyterlab/services"],
    plugins: [
        babel({
            presets: ["@babel/preset-react"],
            exclude: "node_modules/**",
        }),
        postcss({
            config: {
                path: "./postcss.config.js",
            },
            extensions: [".css"],
            minimize: true,
            inject: {
                insertAt: "top",
            },
        }),
    ],
};