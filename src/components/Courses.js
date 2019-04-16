import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  renderCourse(course) {
    return (
      <tr key={course.title}>
        <td>
          <Link to="/course/{course.id}" className="btn btn-light">Watch> {course.id}</Link>
        </td>
        <td>{course.title}</td>
        <td>{course.author}</td>
        <td>{course.category}</td>
      </tr>
    );
  }

  componentDidMount() {
    console.log(this.props.courses);
  }

  render() {
    const courses = this.props.courses;
    return (
      <div>
        <Coursebutton/>
        <hr/>
        <h2>Courses</h2>
        <table className="table border">
          <thead>
            <tr>
              <th />
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, i) => {
              return this.renderCourse(course);
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
function Coursebutton(){
  return (
    <div>
      <Link to="/course" className='btn btn-primary'>Add Course</Link>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}
export default connect(
  mapStateToProps,
)(Courses);
