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
    return <li key={course.id}>{course.name}</li>;
  }

  handleChange(event) {
    this.setState({ newCourse: event.target.value });
  }

  handleSubmit(event) {
    this.props.addCourse({id: this.state.newId, name: this.state.newCourse})
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
        <ul>
          {courses.map((course, i) => {
            return this.renderCourse(course);
          })}
        </ul>
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
    courses: state.courses,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addCourse: (course) => dispatch(Object.assign({ type: 'ADD_COURSE' }, course)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Courses);