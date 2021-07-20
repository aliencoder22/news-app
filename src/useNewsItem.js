import React from "react";

export default function useNewsItem(initialState = []) {
  const [data, setData] = React.useState(initialState);
  const onAction = (state = data, action) => {
    console.log(state, action);
    switch (action.type) {
      case "SET_DATA":
        //setData(action.value);
        return action.value;
      default:
        return state;
    }
  };
  return [data, onAction];
}
