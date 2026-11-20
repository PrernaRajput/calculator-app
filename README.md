# React Calculator App

A simple calculator app built using React that supports basic arithmetic operations.

## Features

- Addition, subtraction, multiplication, division
- Clear and negate functions
- Styled layout with responsive grid and custom colors

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs dependencies.

### `npm start`

Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

## Deploy to GitHub Pages

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds and deploys the site whenever you push to the `main` branch (or run it manually from the Actions tab).

In the repository on GitHub, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**. After the workflow completes, the site will be available at [https://PrernaRajput.github.io/calculator-app](https://PrernaRajput.github.io/calculator-app).

The `homepage` setting in `package.json` configures Create React App to load assets from the repository path. If your GitHub username or repository name differs, update that URL to match.

## Folder Structure

```
calculator-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Button.js
│   │   ├── ButtonBox.js
│   │   ├── Screen.js
│   │   └── Wrapper.js
│   ├── App.js
│   ├── index.js
│   └── styles.css
└── README.md
```

## Color Scheme

- Background: `#fbb034`
- Wrapper: `#485461`
- Screen: `#4357692d`
- Buttons: `#503cd1`
- Equals Button: `#f33d1d`
- Text: `#ffffff`
