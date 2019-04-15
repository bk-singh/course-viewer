import React from "react";
import { connect } from "react-redux";

class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newCourse: "",
      newId: 1
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  renderCourse(course) {
    return (
      <tr key={course.id}>
        <td>
          <button className="btn btn-light">Watch</button>
        </td>
        <td>{course.title}</td>
        <td>{course.author}</td>
        <td>{course.category}</td>
      </tr>
    );
  }

  handleChange(event) {
    this.setState({ newCourse: event.target.value });
  }

  handleSubmit(event) {
    this.props.addCourse({ id: this.state.newId, title: this.state.newCourse });
    this.setState({
      newCourse: "",
      newId: this.state.newId + 1
    });
    event.preventDefault();
  }
  componentDidMount() {
    console.log(this.props.courses);
  }
  render() {
    const courses = this.props.courses;
    return (
      <div>
        <h2>Courses</h2>
        <table className="table">
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
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.newCourse}
            onChange={this.handleChange}
          />
          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    courses: state.courses
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addCourse: course => dispatch(Object.assign({ type: "ADD_COURSE" }, course))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Courses);
