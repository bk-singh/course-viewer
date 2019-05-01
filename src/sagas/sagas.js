import { put, takeEvery, call, all, fork } from 'redux-saga/effects'
import * as authorApi from '../api/authorApi'
import * as courseApi from '../api/courseApi'
import {
    RECEIVE_AUTHORS,
    RECEIVE_COURSES,
    ASYNC_DELETE_COURSE,
    ASYNC_EDIT_COURSE,
    ASYNC_ADD_COURSE,
    ASYNC_RECEIVE_AUTHORS,
    ASYNC_RECEIVE_COURSES,
    EDIT_COURSE,
    ADD_COURSE,
    deleteCourse,
} from './../actions/actionCreators'
const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* getAllCourses() {
    yield delay(5000);
    let courses = yield call(courseApi.getCourses);
    yield put({ courses: courses, type: RECEIVE_COURSES })
}

export function* getAllAuthors() {
    yield delay(5000);
    let authors = yield call(authorApi.getAuthors);
    yield put({ authors: authors, type: RECEIVE_AUTHORS })
}

// worker Saga
export function* saveAsync(args) {
    yield delay(5000);
    let courses = yield call(courseApi.saveCourse, {...args, id: undefined, type: undefined });
    yield put({ ...courses, type: ADD_COURSE })
}

export function* updateAsync(args) {
    yield delay(5000);
    yield call(courseApi.saveCourse, {...args, type: undefined });
    yield put({ ...args, type: EDIT_COURSE })
}

export function* deleteAsync(args) {
    yield delay(5000);
    yield call(courseApi.deleteCourse, args.id);
    yield put(deleteCourse(args.id))
}

// watcher Saga
export function* watchGetAllCourses(args) {
    yield takeEvery(ASYNC_RECEIVE_COURSES, getAllCourses);
}

export function* watchGetAllAuthors(args) {
    yield takeEvery(ASYNC_RECEIVE_AUTHORS, getAllAuthors);
}

export function* watchAddAsync(args) {
    yield takeEvery(ASYNC_ADD_COURSE, saveAsync);
}


export function* watchUpdateAsync(args) {
    yield takeEvery(ASYNC_EDIT_COURSE, updateAsync);
}

export function* watchDeleteAsync(args) {
    yield takeEvery(ASYNC_DELETE_COURSE, deleteAsync);
}
export default function* rootSaga() {
    yield all([fork(watchGetAllCourses), fork(watchGetAllAuthors), fork(watchAddAsync), fork(watchUpdateAsync), fork(watchDeleteAsync)])
}