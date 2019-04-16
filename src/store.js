import { createStore, applyMiddleware } from "redux";

import rootReducer from './reducers/index';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const defaultState = {
  courses: [
    {
      id: 1,
      title: "Securing React Apps with Auth0",
      slug: "react-auth0-authentication-security",
      authorId: 1,
      category: "JavaScript"
    },
    {
      id: 2,
      title: "React: The Big Picture",
      slug: "react-big-picture",
      authorId: 1,
      category: "JavaScript"
    },
    {
      id: 3,
      title: "Creating Reusable React Components",
      slug: "react-creating-reusable-components",
      authorId: 1,
      category: "JavaScript"
    },
    {
      id: 4,
      title: "Building a JavaScript Development Environment",
      slug: "javascript-development-environment",
      authorId: 1,
      category: "JavaScript"
    },
    {
      id: 5,
      title: "Building Applications with React and Redux",
      slug: "react-redux-react-router-es6",
      authorId: 1,
      category: "JavaScript"
    },
    {
      id: 6,
      title: "Building Applications in React and Flux",
      slug: "react-flux-building-applications",
      authorId: 1,
      category: "JavaScript"
    },
    {
      id: 7,
      title: "Clean Code: Writing Code for Humans",
      slug: "writing-clean-code-humans",
      authorId: 1,
      category: "Software Practices"
    },
    {
      id: 8,
      title: "Architecting Applications for the Real World",
      slug: "architecting-applications-dotnet",
      authorId: 1,
      category: "Software Architecture"
    },
    {
      id: 9,
      title: "Becoming an Outlier: Reprogramming the Developer Mind",
      slug: "career-reboot-for-developer-mind",
      authorId: 1,
      category: "Career"
    },
    {
      id: 10,
      title: "Web Component Fundamentals",
      slug: "web-components-shadow-dom",
      authorId: 1,
      category: "HTML5"
    }
  ],
  authors: [
    { id: 1, name: "Cory House" },
    { id: 2, name: "Scott Allen" },
    { id: 3, name: "Dan Wahlin" }
  ]
};

const store = createStore(
  rootReducer,
  defaultState,
  applyMiddleware(logger, thunk)
);

function fetchCources() {
  console.log('1===============')
  return fetch('http://localhost:3001/courses');
}

function fetchAuthers() {
  console.log('2===============')
  return fetch('http://localhost:3001/authors');
}

function addCourse(course) {
  return {
    type: 'ADD_COURSE',
    course,
  };
}

function AddAuthors(author) {
  console.log(author)
  console.log(author.length)
  return {
    type: 'ADD_AUTHOR',
    author,
  };
}
function addCourcesDispacter() {
  return function (dispatch) {
    return fetchCources().then(
      course => dispatch(addCourse(course)),
      error => console.log(error)
    );
  }
}
function addAuthorsDispacter() {
  return function (dispatch) {
    return fetchAuthers().then(
      author => AddAuthors(author),
      error => console.log(error)

    );
  };
}

store.dispatch(
  addCourcesDispacter()
);

store.dispatch(
  addAuthorsDispacter()
);


// store.dispatch(
//   fetchCources()
// ).then(() => {
//   console.log('Cources');
// });

// store.dispatch(
//   fetchAuthers()
// ).then(() => {
//   console.log('Authors');
// });

export default store;