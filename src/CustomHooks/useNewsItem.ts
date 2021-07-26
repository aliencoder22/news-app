import { useDispatch, useSelector } from "react-redux";
import React from "react";

type dataType = {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

type onActionType = {
  setData: (data: dataType[]) => { type: string; value: dataType[] };
  deletePost: (id: number) => { type: string; value: number };
};

type stateType = {
  data: dataType[];
};

export default function useNewsItem(): [dataType[], onActionType] {
  const state = useSelector((state: stateType) => state.data);
  const dispatch = useDispatch();

  const onAction = React.useMemo(
    () => ({
      setData: (data: dataType[]) =>
        dispatch({ type: "SET_DATA", value: data }),
      deletePost: (id: number) => dispatch({ type: "DELETE_POST", value: id }),
    }),
    [dispatch]
  );
  return [state, onAction];
}
