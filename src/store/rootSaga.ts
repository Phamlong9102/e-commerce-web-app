import { all } from 'redux-saga/effects'; 
import authSaga from './auth/authSaga';
import registerSaga from './register/registerSaga';

export default function* rootSaga() {
    yield all([authSaga(), registerSaga()])
}