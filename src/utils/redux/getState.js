import store from "./configureStore";

export const  getReduxStore = () => {
   return store.getState();
};

store.subscribe(getReduxStore);