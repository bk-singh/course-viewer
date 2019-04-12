export function addCourse(name, id) {
  return {
    type: "ADD_COURSE",
    name,
    id
  };
}
