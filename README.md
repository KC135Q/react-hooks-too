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

- **Set up**
  - **_Separate monitor to reference repo_**
  - **_Reference the docs when creating code!_**
- **Create the application**
  - `create-react-app react-hooks`
  - `cd react-hooks`
  - `git init`
  - `npm run start`
- **Mission Alpha**
  - Instructions: Add search functionality in a header component that allows the user to enter a search term, click on a search button and that search term is shown in an alert.
  - **_BONUS:_** Replace the App.js <p> code `<p>Edit <code>src/App.js</code> and save to reload.</p>` with a paragraph showing what was searched for such as `<p>Let the search for ${searchTerm} begin!</p>`
- **Add a Header component**
  - ./components/Header
  - Check functioning
  - Make it contain a search input
  - [GitHub Plan](https://github.com/dijatek/react-hooks/tree/dk-01-plan)
- **Mission Bravo**
  - Instructions: Complete the BONUS from step Mission Alpha
  - **_BONUS:_** Track the last search term between browser sessions.
- **Lift State**
  - Start with the onChange
  - Move to the onClick
  - Show result in another part of App.js (ex; Learn React using {search})
  - handleChange (onChange) is a naked pass throughout
  - handleSearch (onClick) is an anonymous callpack prop in the controlling component
  - [GitHub Lift State](https://github.com/dijatek/react-hooks/tree/dk-02-lift-search)
- **Mission Charlie**
  - Instructions: Implement useEffect and react-cookies npm to track the most recent search term between user sessions.
- **Use Effect**
  - Saving last search in a cookie
  - `npm i react-cookies`
  - What is use effect replacing (good tutorials on this)?
    > Basic lifecyle activity such as ComponentDidMount can be emulated with useEffect
  - Add the setLastSearch to the cookie using react-cookie npm docs
  - setLastSearch after in the on click handler
  - How else could this be used? UserId? Check out the `Tips for Using Effects` reference
  - [GitHub Use Effect](https://github.com/dijatek/react-hooks/tree/dk-03-effect)

## Reference

- [React Hooks Lifting State](https://www.robinwieruch.de/react-lift-state)
- [React Cookies](https://www.npmjs.com/package/react-cookies)
- [Tips for Using Effects](https://reactjs.org/docs/hooks-effect.html)
-
