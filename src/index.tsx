import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { HistoryRouter } from "redux-first-history/rr6";
// import { persistStore } from 'redux-persist';
// import { PersistGate } from 'redux-persist/integration/react';
import { history, store } from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// let persistor = persistStore(store);

root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <App />
      {/* </PersistGate> */}
    </HistoryRouter>
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    <ToastContainer />
  </Provider>
);
