23.Burger Builder Project
1.project setup

a. npm init react-app appName

b.to clean the react project only index.html file is needed in public folder.
favicon.ico can be keep there for web icon

in src folder app.js and index.js need to be kept

service worker is for mobile and offline mode

c. install dependency for this project
npm i bootstrap reactstrap react-popper axios --save

d. import bootstrap in index.js
import "bootstrap/dist/css/bootstrap.min.css";
e. created MainComponent folder, inside main.js and BurgerBuilder.jsx under BurgerBuilder folder. it is a class component, will return a text burger builder. then under Header folder there is Header.jsx it will have same simple text like header, it is a functional component.

then import Header and BurgerBuilder in Main.jsx

then finally import Main.jsx into app.js

now run and test the outcome

2.Creating navigation bar,
will use some components from reactstrap

like Navbar
NavbarBrand,Nav,NavItem,NavLink

structure

Navbar
NavbarBrand
Nav
NavItem
NavLink

link has href attribute

also link css

main and header css
main will include all other css
the naming convention of the css i am using is bem
Block element and modifier

3. creating ingredient component
   created burger.jsx fc under burger folder and ingredient.jsx fc under ingredient folder
   added css ingredient center and 5ps margin and img 80% width

ingredient have a prop named ingredientName

4. Show ingredients according to state
   used
   [...Array(5).keys()] will create 5 array

load elements from state of burgerbuilder

added css to burger and made the y scrollbar hidden

5.Controls component

created controls component and added some class to it like
d-flex flex-row / flex-column justify-content-center align-items center

in control there we created an array of three with our ingredients , give more and less button to each item

now the control is quite big but later i need to make it small

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
