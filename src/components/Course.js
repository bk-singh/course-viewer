import React from "react";
import { connect } from "react-redux";

import { asyncAddCourse, editAsyncCourse, asyncGetAllCourses, asyncGetAllAuthors } from "./../actions/actionCreators";
class Course extends React.Component {
  constructor(props) {
    super(props);
    const slug = this.props.match.params.slug || '';
    const id = this.props.match.params.id || '';
    let course = {};
    let isEdit = false;
    if (slug) {
      course = this.props.courses.filter(course => course.slug === slug);
      course = course.length ? course[0] : {};
      isEdit = true;
    } else if (id) {
      course = this.props.courses.filter(course => course.slug === id);
      course = course.length ? course[0] : {};
      isEdit = true;
    } else {
      this.props.asyncGetAllAuthors();
      this.props.asyncGetAllCourses();
    }
    this.state = {
      isEdit: isEdit,
      newCourse: course.title || "",
      selectedAuthorId: course.authorId || 1,
      category: course.category || "",
      newId: course.id || 0
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event) {
    this.setState({ newCourse: event.target.value });
  }
  handleAuthorChange(event) {
    this.setState({ selectedAuthorId: event.target.value });
  }
  handleCategoryChange(event) {
    this.setState({ category: event.target.value });
  }

  handleSubmit(event) {
    if (!(this.state.newCourse && this.state.category)) {
      alert("Please fill the form.");
      return;
    }
    if (this.state.isEdit) {
      this.props.editCourse({
        id: this.state.newId,
        title: this.state.newCourse,
        authorId: this.state.selectedAuthorId,
        category: this.state.category,
        slug: 'react-authentication-security' + this.state.newId
      });

    } else {
      this.props.addCourse({
        id: undefined,
        title: this.state.newCourse,
        authorId: this.state.selectedAuthorId,
        category: this.state.category,
        slug: 'react-authentication-security' + this.state.newId
      });
    }
    this.setState({
      newCourse: "",
      selectedAuthorId: 0,
      category: "",
      newId: this.state.newId,
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>Add Course</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              className="form-control"
              type="text"
              value={this.state.newCourse}
              onChange={this.handleTitleChange}
            />
          </div>
          <div className="form-group">
            <label>Author</label>
            <select
              className="form-control"
              value={this.state.selectedAuthorId}
              onChange={this.handleAuthorChange}
              required
            >
              <option value="" disabled>Select Author</option>
              {this.props.authors.map((author) => <option value={author.id} key={author.id}>{author.name}</option>)}
            </select>
          </div>
          <div className="form-group">
            <label>Category</label>
            <input
              className="form-control"
              type="text"
              value={this.state.category}
              onChange={this.handleCategoryChange}
            />
          </div>
          <input type="submit" value="Save" className='btn btn-primary' />

        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    courses: state.courses,
    authors: state.authors
  };
}

const mapDispatchToProps = dispatch => {
  return {
    asyncGetAllCourses: () => dispatch(asyncGetAllCourses()),
    asyncGetAllAuthors: () => dispatch(asyncGetAllAuthors()),
    addCourse: course => dispatch(asyncAddCourse(course.id, course.title, course.authorId, course.category, course.slug)),
    editCourse: course => dispatch(editAsyncCourse(course.id, course.title, course.authorId, course.category, course.slug)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Course);
