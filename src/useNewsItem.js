import { useDispatch, useSelector } from "react-redux";

export default function useNewsItem() {
  const state = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const onAction = {
    setData: (data) => dispatch({ type: "SET_DATA", value: data }),
  };
  return [state, onAction];
}
