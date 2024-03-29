import { toast } from "react-toastify";
import { put, takeLeading, call } from "redux-saga/effects";
import userApi from "../../api/userApi";
import { cartActions } from "./cartSlice";

function* fetchDataCartUser({ payload }: any) {
  try {
    const { data: dataCartUser }: { data: any } = yield call(() =>
      userApi.getDataCartUser(payload)
    );
    const filnalDataCartUser = dataCartUser?.cart;
    yield put(cartActions.fetchCartSuccess(filnalDataCartUser));
  } catch (err) {
    yield put(cartActions.fetchCartFailed());
    console.log("TRONG GIỎ HÀNG CỦA USER KHÔNG CÓ SẢN PHẨM");
  }
}

function* addProductToCart({ payload }: any) {
  const language = localStorage.getItem("i18nextLng");
  try {
    yield put(cartActions.addCartSuccess(payload));
    if (language === "en") {
      toast.success("Added to cart");
    } else if (language === "vi") {
      toast.success("Đã thêm sản phẩm vào giỏ");
    }
  } catch (err) {
    yield put(cartActions.addCartFailed());
    if (language === "en") {
      toast.success("Added to cart failed");
    } else if (language === "vi") {
      toast.success("Thêm sản phẩm thất bại");
    }
  }
}

function* removeProductFromCart({ payload }: any) {
  const language = localStorage.getItem("i18nextLng");
  try {
    console.log("payload: ", payload);
    yield put(cartActions.removeProductSuccess(payload));
    if (language === "en") {
      toast.success("Removed product success");
    } else if (language === "vi") {
      toast.success("Bỏ sản phẩm khỏi giỏ hàng thành công");
    }
  } catch (err) {
    yield put(cartActions.removeProductFailed());
    if (language === "en") {
      toast.warning("Remove product failed");
    } else if (language === "vi") {
      toast.warning("Bỏ sản phẩm khỏi giot hàng thất bại");
    }
  }
}

export default function* cartSaga() {
  yield takeLeading(cartActions.fetchCartStart.type, fetchDataCartUser);
  yield takeLeading(cartActions.addCartStart.type, addProductToCart);
  yield takeLeading(cartActions.removeProductStart.type, removeProductFromCart);
}
