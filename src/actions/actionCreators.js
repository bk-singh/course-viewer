export const RECEIVE_COURSES = 'RECEIVE_COURSES';
export const RECEIVE_AUTHORS = 'RECEIVE_AUTHORS';
export const ADD_COURSE = 'ADD_COURSE';
export const EDIT_COURSE = 'EDIT_COURSE';
export const DELETE_COURSE = 'DELETE_COURSE';
export const ASYNC_RECEIVE_COURSES = 'ASYNC_RECEIVE_COURSES';
export const ASYNC_RECEIVE_AUTHORS = 'ASYNC_RECEIVE_AUTHORS';
export const ASYNC_DELETE_COURSE = 'ASYNC_DELETE_COURSE';
export const ASYNC_ADD_COURSE = 'ASYNC_ADD_COURSE';
export const ASYNC_EDIT_COURSE = 'ASYNC_EDIT_COURSE';


export function receiveCourses(courses) {
  return {
    type: RECEIVE_COURSES,
    courses: courses,
  }
}

export function receiveAuthors(authors) {
  return {
    type: RECEIVE_AUTHORS,
    courses: authors,
  }
}

export function asyncGetAllCourses() {
  return {
    type: ASYNC_RECEIVE_COURSES,
  };
}

export function asyncGetAllAuthors() {
  return {
    type: ASYNC_RECEIVE_AUTHORS,
  };
}

export function addCourse(id, title, authorId, category, slug) {
  return {
    type: ADD_COURSE,
    id,
    title,
    authorId,
    category,
    slug
  };
}
export function asyncAddCourse(id, title, authorId, category, slug) {
  return {
    type: ASYNC_ADD_COURSE,
    id,
    title,
    authorId,
    category,
    slug
  };
}

export function editCourse(id, title, authorId, category, slug) {
  return {
    type: EDIT_COURSE,
    id,
    title,
    authorId,
    category,
    slug
  };
}

export function editAsyncCourse(id, title, authorId, category, slug) {
  return {
    type: ASYNC_EDIT_COURSE,
    id,
    title,
    authorId,
    category,
    slug
  };
}

export function deleteCourse(id) {
  return {
    type: DELETE_COURSE,
    id,
  };
}

export function asyncDeleteCourse(id) {
  return {
    type: ASYNC_DELETE_COURSE,
    id,
  };
}
