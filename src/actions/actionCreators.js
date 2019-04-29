export function addCourse(id, title, authorId, category, slug) {
  console.log('action ---> ', id, title, authorId, category, slug)
  return {
    type: "ADD_COURSE",
    id,
    title,
    authorId,
    category,
    slug
  };
}

export function editCourse(id, title, authorId, category, slug) {
  console.log('action ---> ', id, title, authorId, category, slug)
  return {
    type: "EDIT_COURSE",
    id,
    title,
    authorId,
    category,
    slug
  };
}

export function deleteCourse(id) {
  console.log('delete action ---> ', id)
  return {
    type: "DELETE_COURSE",
    id,
  };
}
