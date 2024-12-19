# React Homework Hub

A collection of React homework assignments showcasing various React concepts and features.

🔗 [Live Demo](https://courses-hub-nine.vercel.app/)

## Features

- Modern React with TypeScript
- Component-based architecture
- Form handling with validation
- State management
- Routing with React Router
- CSS Modules for styling
- Responsive design

## Homework Assignments

1. Basic Components and JSX
2. Props and Lists
3. Rating and Lists with State
4. City Selector and Math Quiz
5. Login Form with Validation
6. User Profile
7. Language Switcher with Context
8. List Items
9. Dynamic Form with Zod Validation

## Tech Stack

- React 18
- TypeScript
- Vite
- React Router
- Zod
- React Hook Form

## Development

To run this project locally:

```bash
# Install dependencies
yarn install

# Start development server
yarn dev
```

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
