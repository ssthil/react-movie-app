
# Movie app using react, themoviedb, bootstrap 4, material-ui and sweetalert

This is a very basic responsive app using React with webpack 4, bootstrap 4 and latest babel config.

## Project description
Used stacks are ```React + webpack 4 +  Bootstrap 4``

### Step 1
Make a new project

```
mkdir react-movie-app && cd $_ && yarn init -y
```

#### Setting Up React and Babel

We need to install webpack as a **dev dependency** and webpack-cli

```
yarn add webpack webpack-cli webpack-dev-server --dev
```

Install react and react-dom as a **dependency**

```
yarn add react react-dom
```

Then install babel as a **dev dependency**

```
yarn add @babel/core @babel/preset-env @babel/preset-react babel-loader html-webpack-plugin --dev
```

Create config files

```
touch webpack.config.js .babelrc README.md .gitignore
```

Create `src` directory and `index.js` file

 ```
 mkdir src && cd $_ && touch index.js index.html
 ```

 Create `index.html` file in the root

 ```
 touch index.html
 ```

### Step 2

Add this code in webpack.config.js file to state the rules for our babel-loader

```
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [htmlPlugin]
};
```

### Step 3

When you state that you’re using babel-loader in your webpack config, it will look for ```.babelrc``` file if there is one.

```
{
  "presets": ["@babel/env", "@babel/preset-react"]
}
```

### Step 4
index.html with ```id="app"```

### Step 5
In ```index.js```

```
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return(
    <div>
      <h1>Hello React</h1>
    </div>
  )
}
const SelectorRef = document.getElementById("app");

ReactDOM.render(<App />, SelectorRef);
```

## Prettier, husky and eslint

Added Prettier to automatically format all js file and use husky and lint-staged to add a precommit script that runs Prettier and eslint --fix when do **git commit**.

```
yarn add prettier husky lint-staged --dev
```

#### update package.json

```
"scripts": {
    "eslint:fix": "eslint --fix --ext .js src/",
    "pretty": "prettier --write --tab-width 2 \"src/**/*.js\""
},

"husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "linters": {
      "src/**/*.{js,jsx,md,css}": [
        "eslint --fix",
        "git add"
      ],
      "ignore": [
        "**/package-lock.json"
      ]
    }
  }
  ```

### Git commit

```
git add
git commit -m ""
```

then husky will run on the terminal :thumbsup:
