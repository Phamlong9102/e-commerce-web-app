import { call, put, takeLatest } from "redux-saga/effects";
import productApi from "../../api/productApi";
import { fetchProductListFailed, fetchProductListStart, fetchproductListSuccess } from "./productSlice";

function* fetchProductList() {
    try {
        const { data } = yield call(productApi.getAllProduct); 
        yield put(fetchproductListSuccess(data))
    } catch (err) {
        yield put(fetchProductListFailed()); 
        console.log("LẤY TẤT CẢ SẢN PHẨM THẤT BẠI")
    }
}

export default function* productListSaga() {
    yield takeLatest(fetchProductListStart.type, fetchProductList)
}