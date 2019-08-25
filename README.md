This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started

- Clone or extract the [repo](https://github.com/dijatek/react-hooks)
- cd into the root directory
- `npm install` to install all required node modules
- `npm run start` or `npm start` to start the application
- Navigate to `http://localhost:3000/` in your browser to see the application in action

## About Hooks

- The ReactJS Documentation [Introducing Hooks](https://reactjs.org/docs/hooks-intro.html)
  - [What are hooks](https://reactjs.org/docs/hooks-overview.html)?
    > 'Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don’t work inside classes — they let you use React without classes.'
  - Why use hooks?
    > 'They let you use state and other React features without writing a class.'
  - Does it break your code?
- built-in hooks:
  - useState
    - onChange=(() => {setName(this.event.value)})
  - useEffect
  - apiContext
- Build your own Hook (file example)

## Instruction

- **Set up separate monitor to reference repo**
- **Create the application**
  - `create-react-app react-hooks`
  - `cd react-hooks`
  - `git init`
  - `npm run start`
- **Add a Header component**
  - ./components/Header
  - Check functioning
  - Make it contain a search input
  - [GitHub Plan Branch](https://github.com/dijatek/react-hooks/tree/dk-01-plan)
- **Lift State**
  - Start with the onChange
  - Move to the onClick
  - Show result in another part of App.js (ex; Learn React using {search})
  - handleChange (onChange) is a naked pass throughout
  - handleSearch (onClick) is an anonymous callpack prop in the controlling component
  - [GitHub Lift State Branch](https://github.com/dijatek/react-hooks/tree/dk-02-lift-search)

## Reference

- [React Hooks Lifting State](https://www.robinwieruch.de/react-lift-state)
