import { useDispatch, useSelector } from "react-redux";
import React from "react";

export default function useNewsItem() {
  const state = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const onAction = React.useMemo(
    () => ({
      setData: (data) => dispatch({ type: "SET_DATA", value: data }),
      deletePost: (id) => dispatch({ type: "DELETE_POST", value: id }),
    }),
    [dispatch]
  );
  return [state, onAction];
}
