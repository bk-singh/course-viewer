import React from "react";

export default class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      newCourse: null,
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
    let courses = this.state.courses;
    courses = courses.concat([
      {
        id: this.state.newId,
        name: this.state.newCourse
      }
    ]);
    this.setState({
      courses,
      newCourse: '',
      newId: this.state.newId + 1
    });
    event.preventDefault();
  }

  render() {
    const courses = this.state.courses;
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
