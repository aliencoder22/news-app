import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import Display from "./display";

const middlewares = [];
const mockStore = configureStore(middlewares);

test("Testing Loading", () => {
  const initialState = {
    data: [],
  };
  const store = mockStore(initialState);
  const { getByText } = render(
    <Provider store={store}>
      <Display />
    </Provider>
  );
  const loadingHeader = getByText("Loading");
  expect(loadingHeader).toBeVisible();
});

test("Items Visible", () => {
  const fakeData = {
    title: "",
    url: "",
    imageUrl: "",
    content: "",
    description: "",
    id: "",
  };
  const initialState = {
    data: [fakeData],
  };
  const store = mockStore(initialState);
  const { queryByText } = render(
    <Provider store={store}>
      <Display />
    </Provider>
  );
  const loadingHeader = queryByText("Loading");
  expect(loadingHeader).toBeNull();
});
