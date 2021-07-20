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

```
Navbar;
  NavbarBrand;
  Nav;
    NavItem;
      NavLink;
    NavItem;
      NavLink;
```

- link has href attribute

- also link css

- main and header css
- main will include all other css
- The naming convention of the css I am using is BEM, Modifier Block\_\_Element--Modifier

# 3. creating ingredient component

- Created `Burger.jsx` functional component under `Burger` folder and `Ingredient.jsx` functional component under ingredient folder

- added css ingredient center and 5ps margin and img 80% width

- ingredient have a prop named `ingredientName`

# 4. Show ingredients according to state

- Used `[...Array(5).keys()]` will create 5 array

- Load elements from state of burgerBuilder

- Added css to burger and made the y scrollbar hidden

# 5.Controls component

- Created controls component and added some class to it like d-flex flex-row / flex-column justify-content-center align-items center

- In control there we created an array of three with our ingredients, give more and less button to each item now the control is quite big but later i need to make it small

# 6. add and remove ingredients

```js
myArray.find((x) => x.id === "45"); // find object property in array

myArray.findIndex((x) => x.id === "45"); // find index of object property
```

again had problem with bind
always bind to this

```js
.bind(this)

or arrow syntax =()=>{

}
```

# 7. Showing price on card

- Base price 80
- Salad,cheese,meat 20,40,90
- Total price in state,

**Did mistake need to send this.state.totalPrice not this.totalPrice**

# 8. Show order summery

- Created order modal component and order summery

- If no addon added then order cannot proceed,
  there was no other challenge.

# 9. Adding router

- `npm i react-router-dom`

- import BrowserRouter from rrd in app component and place main component inside BrowserRouter

- In main component inside div.container add the Router

```js
<Router exact path="/something" component={}>
<Router exact path="/" component={}>
```

- If we place our main component under BrowserRouter then a props will be available inside all pages,we use this props to push our desire path when clicking on checkout button

```js
this.props.history.push("/checkout"); // to visit this path
```

# 10. Adding redux to our app

- install redux react-redux `npm i redux react-redux --save`

- add store,reducer,actionCreators and actionTypes .js under redux folder

- Create reducer

```js
export const reducer = (state = IniState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
```

- After we need to create actionTypes

```js
export const UPDATE_SOMETHING = "UPDATE_SOMETHING";
```

- actionCreator

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

- Importing provider

- Provider from react-redux

  - import store

    ```js
    <Provider store={store}>
      <OtherElements />
    </Provider>
    ```

- Now we can use the redux store

```js
first import {connect},
import actionCreators

const mapStateToProps=state=>{
return {property we needed from state}
}
```

**had problem did not copy old state always copy old state**

```js
mapDispatchToState=dispatch=>({
actionName:(actionName parameter)=>dispatch(actionCreators(actionName parameter));
})
```

- Finally connect

```js
export default connect(mapStateToProps, mapDispatchToProps)(ClassName);
```

- Now make the logic, reducer

```javascript
switch (action.type) {
  case ACTION.TYPE:
    const newState = [...state];

  default:
    return state;
}
```

# 11. Creating checkout option

added checkout--form css

```css
.checkout--border {
  border: 1px solid grey;
  box-shadow: 1px 1px #888;
  border-radius: 5px;
  padding: 1.3rem;
}
```

- Created Input component with textarea and select option, structure from bootstrap
- required, name
- optional type, placeholder, value, label

- default: type:text,value:'',placeholder:Your Name here, label:Name

- move state to redux,
- connected redux.
- implemented goback

```js
this.props.history.goBack("/");
```

- **Since i used separate input component, input needed defaultValue instead of value**

  ```js
  defaultValue = { value };
  ```

- Used onChange on form,thats why need to use

  ```js
  e.preventDefault();
  ```

- Added actionCreators updateCheckout> , actionType > UPDATE_CHECKOUT

- Moved constants into separate file

# 12 Saving order to database

- Get firebase database url: will look like this `https://burger-builder-**.asia-southeast1.firebasedatabase.app/orders.json`
  - sign in and goto console create new project
  - from left top : build>realtime database
  - get the api link under data tab
  - **must add .json after the url to get a json response**
- Edit rules from rule tab

  ```json
  {
    "rules": {
      ".read": "true", // 2021-8-7
      ".write": "true" // 2021-8-7
    }
  }
  ```

- Do this .read to true, .write to true, it make auto delete off, means never delete
- Aadded the needed state variable from redux
- install axios `npm i axios`
- import it
  ```js
  axios
    .post(url, data)
    .then((response) => {})
    .catch((error) => {});
  ```

# 13. Improving checkout component

- Added spinner or loader from https://projects.lukehaas.me/css-loaders/
- Created Loader component from it.
- Added modal in checkout to display message after submitting order
- If order success then reset the state of redux
- Created new action in reducer to reset state
- modal on click used this
  ```js
  this.props.history.goBack("/");
  ```

# 14. Fetching the orders

- Applying redux-thunk to redux: thunk is needed to perform asynchronous dispatch

  ```js
  import { createStore, applyMiddleware } from "redux"; // import component from redux
  import thunk from 'react-thunk';
  // import reducer
  ...
  // create store
  store=createStore(reducer,applyMiddleware('thunk'))

  ```

- add actionType `LOAD_ORDERS`, `ORDER_LOAD_FAILED`

- create actionCreator `loadOrders`, `orderLoadFailed`,`fetchOrders` asynchronous fetch call

- thunk asynchronous dispatch

  ```js
  fetchSomething = () => (dispatch) => {
    dispatch(call_action_reducer);
  };
  ```

- add new state value

  ```js
    order: [],
    orderLoading: true,
    orderLoadFailed: false,
  ```

- reducer:

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

- Fixed typo, Order to Orders component
- added border and border--no-box-shadow helper class
- create Order component under Order/Order folder

- Optimize order loading:

  - set orders=null,
  - so only request to server if order is null

- Load orders on checkout page
  - Set order state on submit order, so order state has updated data,of course it assume only one user and only one instance is running

# ** 24. Adding authentication in Burger Builder**

# 1. Creating the auth form using Formik

- install formik `npm i formic`
- Add formik to `auth.jsx` file `import formik`
- Add formik component and follow the formik structure

  ```js
  <Formik initialValues={} onSubmit={(values)=>console.log(values)}>
  ({values,handleChange,handleSubmit})=>(
    <form onChange={handleChange} onSubmit={handleSubmit}>

    <Input name='input_name' value={values.input_name} />
    </form>
  )
  </Formik>
  ```

- Fixed helper css border to add-border, to remove conflict with bootstrap class border
- Changed border to add-border where previously border class is used
- Add css className add-border to form,
- Add button with type='submit'
- Added register and login route to `Main.jsx`
- Added link to `Header.jsx`

# 2. Adding validation

- Validation using yup library

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

# 3. Adding register and signUp - button and link

- Edited Input element, label and placeholder will be replaced _ with space if name have _
- yup validation: if isLogin true then
- ```js
  isLogin: Yup.boolean(),
  .when("isLogin", {
      is: false,
      then: Yup.string().required("Password confirmation is required"),
    }

  ```

- inside render of `Auth.jsx`
- ```js
  const isLogin = this.props.match.path === "/login" ? true : false;
  if (!isLogin) INITIAL_VALUES.isLogin = false;
  ```
- added conditional button name
- added conditional link to register and login

  ```jsx
  {
    isLogin ? (
      <div>
        Do not have account register <NavLink to="/register">here</NavLink>
      </div>
    ) : (
      <div>
        Already have account login <NavLink to="/login">here</NavLink>
      </div>
    );
  }
  ```

- Moved isLogin to state

# 4.Authentication through firebase

- actionTypes added

```js
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAILED = "AUTH_FAILED";
export const AUTH_LOADING = "AUTH_LOADING";
export const AUTH_LOGOUT = "AUTH_LOGOUT";
```

- authActionCreators, implemented auth function, need to use asynchronous dispatch, auth take object with properties of email,password and isLogin, post the auth data to firebase endpoint based on isLogin

```js
export const auth =
  ({ email, password, isLogin }) =>
  (dispatch) => {
    const authData = { email, password, returnSecureToken: true };

    const apiAction = isLogin ? "signInWithPassword" : "signUp";

    const apiEndPoint = `https://identitytoolkit.googleapis.com/v1/accounts:${apiAction}?key=${API_KEY}`;

    axios.post(apiEndPoint, authData).then((response) => console.log(response));
  };
```

````

- firebase register success data, data will have these properties
- ```js
  {
  email :'email address of post data',
  expiresIn :'expires in seconds',
  idToken :' token id, for any futures request before expire time we can use this token',
  kind :'type of operation done',
  localId :'user unique id',
  refreshToken :'token to get a new idToken',
  }

````

}

- Auth.jsx component added redux, added auth function from authActionCreators, added onSubmit

# 5.Using redux for authentication token

- added Initial auth token ,

  ```js
  {
    token:null,
    userId:null
  }
  ```

- Created authSuccess action creator and in auth action when auth is succeed or the post request is returned successfully then dispatch the authSuccess
- reducer added, authSuccess which return old state with new token and userId from auth action

- Input fixed class to className in error element css class
- added Redirect element and set to={} property to according path, if logged in then to "/" else redirect to '/login'
- Header depending on redux token show only links for login or register or other

# 6. Using localStorage to store token

- Added new actionType saveOrder, separated action to fix saveOrder in redux state, previously saving order was not setting the resetBurgerState correctly.
- Refactored `resetState` to `resetBurgerState`
- **Fixed an bug I previously produced, state was not resetting correctly, cause i was copying array of object which is not a deep copy, was only copied object reference**.
- updated reducer, and component it was using, set the `ingredients:[{name:'salad',amount:0}...]` hard coded.
- Added `localAuthCheck` in authActionCreators
- used useEffect instead of class component componentDidMount

  ```js
  useEffect(() => {
    return () => {
      code - clean - up;
    };
  }, [dependent]);
  ```

- add `// eslint-disable-next-line react-hooks/exhaustive-deps` to remove react hook useEffect remove dependency warning

- used localStorage to save `token`,`userId` and `expires` value
- I mistake to load the order when user logged in, just need to add dispatch fetchOrder when user is logged in `dispatch(fetchOrders());`

# 7. Adding logout option

- Added logout dispatch to `authActionCreators.js`
- Added `LogOut` component in `Auth` folder
  - will redirect to '/', so imported Redirect for react-router-dom
  - connected with redux and added logout dispatch method
  - used useEffect hook to run the logout at componentDidMount equivalent - no return , empty array dependency, with jslint exception ` // eslint-disable-next-line react-hooks/exhaustive-deps`
- added logout link to `Header.jsx` component

  ```js
  <NavItem>
    <NavLink exact to="/logout" className="navbar__nav-link">
      Logout
    </NavLink>
  </NavItem>
  ```

- added logout route to `main.jsx` ` <Route path="/logout" component={LogOut} />`
