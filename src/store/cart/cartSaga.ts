import { toast } from "react-toastify";
import { put, takeLeading } from "redux-saga/effects";
import { cartActions } from "./cartSlice";

function* fetchDataCartUser({ payload }: any) {
  try {
    console.log(payload);
    let convert: any[] = [];
    for (var i = 0; i < payload.length; i++) {
      convert = convert.concat(payload[i]);
    }
    console.log(convert);
    yield put(cartActions.fetchCartSuccess(convert));
  } catch (err) {
    yield put(cartActions.fetchCartFailed());
    console.log("LẤY DATA TRONG GIỎ HÀNG USER THẤT BẠI");
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
  // const language = localStorage.getItem("i18nextLng");
  try {
    console.log("removeCartItemInSaga");
    console.log("payload: ", payload);
    yield put(cartActions.removeProductSuccess(payload));
    const data = localStorage.getItem("persist:cart");
    // console.log("data: ", data);

    // if (language === "en") {
    //   toast.success("Removed product");
    // } else if (language === "vi") {
    //   toast.success("Xóa sản phẩm thành công");
    // }
  } catch (err) {
    yield put(cartActions.removeProductFailed());
    // if (language === "en") {
    //   toast.success("Remove product failed");
    // } else if (language === "vi") {
    //   toast.success("Xóa sản phẩm thất bại");
    // }
  }
}

export default function* cartSaga() {
  yield takeLeading(cartActions.fetchCartStart.type, fetchDataCartUser);
  yield takeLeading(cartActions.addCartStart.type, addProductToCart);
  yield takeLeading(cartActions.removeProductStart.type, removeProductFromCart);
}
