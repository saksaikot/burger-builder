# **23.Burger Builder Project**

# 1.project setup

- npm init react-app appName

  - To clean the react project only index.html file is needed in public folder.
  - favicon.ico can be keep there for web icon.
  - In src folder app.js and index.js need to be kept.
  - Service worker is for mobile and offline mode.

- Install dependency for this project
  - npm i bootstrap reactstrap react-popper axios --save
  - import bootstrap in index.js
  - import "bootstrap/dist/css/bootstrap.min.css";
- Add folder and files
  - Created MainComponent folder, inside `main.js` and `BurgerBuilder.jsx` under BurgerBuilder folder.
  - It is a class component, will return a text burger builder.
  - under Header folder there is `Header.jsx` it will have same simple text like header, it is a functional component.
  - import Header and BurgerBuilder in Main.jsx
  - import Main.jsx into app.js

now run and test the outcome

# 2.Creating navigation bar

will use some components from reactstrap

like Navbar
NavbarBrand,Nav,NavItem,NavLink

structure

```js
Navbar;
NavbarBrand;
Nav;
NavItem;
NavLink;
```

link has href attribute

also link css

main and header css
main will include all other css
the naming convention of the css i am using is bem
Block element and modifier

# 3. creating ingredient component

created burger.jsx fc under burger folder and ingredient.jsx fc under ingredient folder
added css ingredient center and 5ps margin and img 80% width

ingredient have a prop named ingredientName

# 4. Show ingredients according to state

used
[...Array(5).keys()] will create 5 array

load elements from state of burgerBuilder

added css to burger and made the y scrollbar hidden

# 5.Controls component

created controls component and added some class to it like
d-flex flex-row / flex-column justify-content-center align-items center

in control there we created an array of three with our ingredients , give more and less button to each item

now the control is quite big but later i need to make it small

# 6. add and remove ingredients

```js
myArray.find((x) => x.id === "45"); // find object property in array

myArray.findIndex((x) => x.id === "45"); // find index of object property
```

again had problem with bind
always bind to this

```js
.bind(this)

or array syntax =()=>{

}
```

# 7. showing price on card

base price 80 , total price in state
salad,cheese,meat 20,40,90

did mistake need to send this.state.totalPrice not this.totalPrice

# 8.show order summery

created order modal component and order summery

if no addon added then order cannot proceed,
there was no other challenge.

# 9.adding router

npm i react-router-dom

import BrowserRouter from rrd in app component and place main component inside BrowserRouter

in main component inside div.container add the Router

```js
<Router exact path="/something" component={}>
<Router exact path="/" component={}>
```

if we place our main component under BrowserRouter then a props will be available inside all page

we use this props to push our desire path when clicking on checkout button

```js
this.props.history.push("/checkout");
```

# 10. adding redux to our app

```cmd
npm i redux react-redux --save
```

add store,reducer,actionCreators and actionTypes .js under redux folder

create reducer

```js
export const reducer = (state = IniState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
```

after we need to create actionTypes

```js
export const UPDATE_SOMETHING = "UPDATE_SOMETHING";
```

actionCreator

```js
import \* as actionType from "./actionTypes";

methodName=(payload)=>{
return {

      type:ACTION_TYPE,
      payload
    }

}
```

```js
export const updateIngredientAmount = (ingredientAmount) => {
  return {
    type: actionType.UPDATE_INGREDIENT_AMOUNT,
    payload: ingredientAmount,
  };
};
```

importing provider

Provider from react-redux
import store

```js
<Provider store={store}>
  <OtherElements />
</Provider>
```

now we can use the redux store

```js
first import {connect},
import actionCreators

const mapStateToProps=state=>{
return {property we needed from state}
}
```

had problem did not copy old state always copy old state

```js
mapDichpatchToState=dispatch=>return{
actionname:(actionName parameter)=>dispatch(actionCreators(actionName parameter));
}
```

finally connect

```js
export default connect(mapStateToProps, mapDispatchToProps)(ClassName);
```

now make the logic

reducer

```javascript
switch (action.type) {
  case ACTION.TYPE:
    const newState = [...state];

  default:
    return state;
}
```

# 11. creating checkout option

added checkout--form css

```css
.checkout--border {
  border: 1px solid grey;
  box-shadow: 1px 1px #888;
  border-radius: 5px;
  padding: 1.3rem;
}
```

created Input component with textarea and select option
structure from bootstrap
required, name
optional type, placeholder, value, label

default: type:text,value:'',placeholder:Your Name here, label:Name

move state to redux,
connected redux.
implemented goback

```js
this.props.history.goBack("/");
```

since i used separate input component
input needed defaultValue instead of value

```js
defaultValue = { value };
```

used onChange on form
thats why need to use

```js
e.preventDefault();
```

added actionCreators updateCheckout> , actionType > UPDATE_CHECKOUT

moved constant into separate file

# 12 Saving order to database

get firebase database url:
sign in and goto console create new project
from left top : build>realtime database
get the api link under data tab
from rule tab

```json
{
  "rules": {
    ".read": "true", // 2021-8-7
    ".write": "true" // 2021-8-7
  }
}
```

do this .read to true, .write to true, it make auto delete off, means never delete
then added the needed state variable from redux

then
npm i axios
and import it

then use

```js
axios
  .post(url, data)
  .then((response) => {})
  .catch((error) => {});
```

# 13. Improving checkout component

added spinner or loader from https://projects.lukehaas.me/css-loaders/
created Loader component from it

added modal in checkout to display message after submitting order

if order success then reset the state of redux

created new action in reducer to reset state
modal on click used this

```js
this.props.history.goBack("/");
```

# 14. Fetching the orders

applying redux-thunk to redux: thunk is needed to perform asynchronous dispatch

```js
import { createStore, applyMiddleware } from "redux"; // import component from redux
import thunk from 'react-thunk';
// import reducer
...
// create store
store=createStore(reducer,applyMiddleware('thunk'))

```

add actionType LOAD_ORDERS, ORDER_LOAD_FAILED

create actionCreator

loadOrders, orderLoadFailed

fetchOrders// asynchronous fetch call

note thunk call

```js
fetchSomething = () => (dispatch) => {
  dispatch(call_action_reducer);
};
```

add new state value

```js
  order: [],
  orderLoading: true,
  orderLoadFailed: false,
```

reducer:

```js
LOAD_ORDERS:

//used for(const key of data)

// set key as id,

// checked if payload is null
// set orderLoading to false

ORDER_LOAD_FAILED:

//set orderLoadFailed to  true
```

# 15. Completing Orders Component

fix Order to Orders component

added border and border--no-box-shadow helper class

create Order component under Order/Order folder

optimize order loading:
set orders=null,
so only request to server if order is null

load orders on checkout page

set order state on submit order, so order state has updated data,
of course it assume only one user and only one instance is running

# ** 24. Adding authentication in Burger Builder**

# 1. Creating the auth form using Formik

a. install formik
npm i formic

b. add formik to auth.jsx file
import formik

add formik component and follow the formik structure

```js

<Formik initialValues={} onSubmit={(values)=>console.log(values)}>
({values,handleChange,handleSubmit})=>(
  <form onChange={handleChange} onSubmit={handleSubmit}>

  <Input name='input_name' value={values.input_name} />
  </form>
)
</Formik>
```

c. add css className add-border to form,
d. add button with type='submit'

e. fixed helper css border to add-border, to remove conflict with bootstrap class border
and changed border to add-border where previously border class is used

f. added register and login route to main.jsx
g.added link to header.jsx

# 2.Adding validation

```js
import * as Yup from "yup";

const AuthSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "At least 6 character")
    .max(20, "Maximum 20 character")
    .required("Password is required"),
  password_confirmed: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Password confirmation is required"),
});
```

```js
       <Formik validationSchema={AuthSchema}>   ({errors})=>(<input name='email'/> {errors.email} )

```

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
