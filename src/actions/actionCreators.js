export function addCourse(title, id) {
  return {
    type: "ADD_COURSE",
    title,
    id
  };
}
