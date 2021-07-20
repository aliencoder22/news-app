import "./App.css";
import React from "react";
import Display from "./Display";
import useNewsItem from "./useNewsItem";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
export default function App() {
  const [data, onAction] = useNewsItem();
  const store = createStore(onAction, applyMiddleware(thunk));

  return (
    <Provider store={store}>
      <Display />
    </Provider>
  );
}
