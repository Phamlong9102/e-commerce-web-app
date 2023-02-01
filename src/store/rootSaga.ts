import { all } from "redux-saga/effects";
import authSaga from "./auth/authSaga";
import registerSaga from "./register/registerSaga";
import productListSaga from "./product/productSaga";
import cartSaga from "./cart/cartSaga";
import listFavoriteProductSaga from "./list-favorite/listFavoriteSaga";

export default function* rootSaga() {
  yield all([authSaga(), registerSaga(), productListSaga(), cartSaga(), listFavoriteProductSaga()]);
}
