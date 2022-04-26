# Shopping App - React + Redux

## Installations

```shell
npx create-react-app shopping_app
npm install react-router-dom
npm install axios
npm install redux react-redux
// Delete all standard unnecesary boilerplate 

//index.html
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
    integrity="sha512-8bHTC73gkZ7rZ7vpqUQThUDhqcNFyYi2xgDgPDHc+GXVGHXq+xPjynxIopALmOPqzo9JZj0k6OqqewdGO3EsrQ=="
    crossorigin="anonymous" />
```

Final Folder Structure

![Final Folder Structure](./assets/1.png)

## Redux

- `constants`: `action-types.js` stores the list of all the action types that can be called in Redux.
- `actions`: `productActions.js` stores the action functions that are called using dispatch function from `redux` from the frontend and they trigger the reducers. Actions always return a plain JS object where type(key) will be the ActionType and payload which will be the data the method receives.
- `reducers`: `productReducer.js` stores the reducer action that happens when the actions are dispatched. Reducers always take the initial state and the action. `index.js` inside the `reducers` folder is the place where the reducers are combined together.
We have two different reducers (`productReducer` & `selectedProductsReducer`) in this project and they are combined together in the index.js file.
- `store`: in the `store.js` file we initialize a store with our combined reducer.
- `provider`: In the main `index.js` file we attach inject the store to the whole app using the `<Provider store={store}></Provider>`. The `<Provider>` component is supplied by the `react-redux`.

The state is now globally accessible using `useSelector` from `react-redux`.
The actions can be called using the `useDispatch` from `react-redux`.
