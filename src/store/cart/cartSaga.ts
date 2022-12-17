import { toast } from "react-toastify";
import { put, takeLeading } from "redux-saga/effects";
import { Cart, CartItem } from "../../models/cart";
import { cartActions } from "./cartSlice";

function* fetchDataCartUser({payload}: any) {
    try {
        console.log(payload)
        let convert: any[] = []; 
        for (var i = 0; i < payload.length; i++) {
            convert = convert.concat(payload[i])
        }
        console.log(convert)
        yield put(cartActions.fetchCartSuccess(convert))
    } catch (err) {
        yield put(cartActions.fetchCartFailed()); 
        console.log("LẤY DATA TRONG GIỎ HÀNG USER THẤT BẠI")
    }
}

function* addItemToCart({payload}: any) {
    const language = localStorage.getItem("i18nextLng"); 
    try {
        yield put(cartActions.addCartSuccess(payload)); 
        if (language === "en") {
            toast.success("Added to cart")
        } else if (language === "vi") {
            toast.success("Đã thêm sản phẩm vào giỏ")
        }
    } catch (err) {
        yield put(cartActions.addCartFailed()); 
    }
}

export default function* cartSaga() {
    yield takeLeading(cartActions.fetchCartStart.type, fetchDataCartUser);
    yield takeLeading(cartActions.addCartStart.type, addItemToCart)
}

