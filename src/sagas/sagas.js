import { put, takeEvery, call, all, fork } from 'redux-saga/effects'
import course from '../reducers/course';
import * as apiUtils from '../api/apiUtils'
import * as authorApi from '../api/authorApi'
import * as courseApi from '../api/courseApi'
import {RECEIVE_AUTHORS, RECEIVE_COURSES, ASYNC_DELETE_COURSE, asyncGetAllCourses, deleteCourse} from './../actions/actionCreators'
const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* getAllCourses() {
    console.log('getAllCourses-------')
    yield delay(5000);
    let courses = yield call(courseApi.getCourses);
    yield put({ courses: courses, type: 'RECEIVE_COURSES' })
}

export function* getAllAuthors() {
    console.log('getAllAuthors======')
    yield delay(5000);
    let authors = yield call(authorApi.getAuthors);
    yield put({ authors: authors, type: 'RECEIVE_AUTHORS' })
}

// Our worker Saga: will perform the async increment task
export function* saveAsync(args) {
    console.log('in updateAsync  before 5s', args);
    yield delay(5000);
    let courses = yield call(courseApi.saveCourse, {...args, id: undefined, type: undefined });
    console.log('in updateAsync after 5s', courses);
    yield put({ ...courses, type: 'ADD_COURSE' })
}

export function* updateAsync(args) {
    console.log('in updateAsync  before 5s', args);
    yield delay(5000);
    let courses = yield call(courseApi.saveCourse, {...args, type: undefined });
    console.log('in updateAsync after 5s', courses);
    yield put({ ...args, type: 'EDIT_COURSE' })
}

export function* deleteAsync(args) {
    console.log('in deleteAsync  before 5s', args);
    yield delay(5000);
    let courses = yield call(courseApi.deleteCourse, args.id);
    console.log('in deleteAsync after 5s', args);
    yield put(deleteCourse(args.id))
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchGetAllCourses(args) {
    yield takeEvery('ASYNC_RECEIVE_COURSES', getAllCourses);
}

export function* watchGetAllAuthors(args) {
    yield takeEvery('ASYNC_RECEIVE_AUTHORS', getAllAuthors);
}

export function* watchAddAsync(args) {
    yield takeEvery('ASYNC_ADD_COURSE', saveAsync);
}


export function* watchUpdateAsync(args) {
    yield takeEvery('ASYNC_EDIT_COURSE', updateAsync);
}

export function* watchDeleteAsync(args) {
    yield takeEvery('ASYNC_DELETE_COURSE', deleteAsync);
}
export default function* rootSaga() {
    yield all([fork(watchGetAllCourses), fork(watchGetAllAuthors), fork(watchAddAsync), fork(watchUpdateAsync), fork(watchDeleteAsync)])
}