import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";

export default {
    input: "./index.js",
    output: {
        file: "./output.js",
        format: "esm",
    },
    external: ["react", "react-dom"],
    plugins: [
        babel({
            presets: ["@babel/preset-react"],
            exclude: "node_modules/**",
        }),
        resolve(),
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