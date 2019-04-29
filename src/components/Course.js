import React from "react";
import { connect } from "react-redux";
import { addCourse, editCourse } from "./../actions/actionCreators";
import { bindActionCreators } from "redux";
class Course extends React.Component {
  constructor(props) {
    super(props);
    const slug = this.props.match.params.slug || '';
    let course = {};
    let isEdit = false;
    if (slug) {
      course = this.props.courses.filter(course => course.slug === slug);
      course = course.length ? course[0] : {};
      isEdit = true;
    }
    this.state = {
      isEdit: isEdit,
      newCourse: course.title || "",
      selectedAuthorId: course.authorId || 0,
      category: course.category || "",
      newId: course.id || 11
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
    if(!(this.state.newId && this.state.newCourse && this.state.selectedAuthorId && this.state.category)) {
      alert("Please fill the form.");
      return;
    }
    if (this.state.isEdit) {
      this.props.editCourse({
        id: this.state.newId,
        title: this.state.newCourse,
        authorId: this.state.selectedAuthorId,
        category: this.state.category,
        slug: 'react-authentication-security'+ this.state.newId
      });

    } else {
      this.props.addCourse({
        id: this.state.newId,
        title: this.state.newCourse,
        authorId: this.state.selectedAuthorId,
        category: this.state.category,
        slug: 'react-authentication-security'+ this.state.newId
      });
    }
    this.setState({
      newCourse: "",
      selectedAuthorId: 0,
      category: "",
      newId: this.state.newId + 1,
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>Add Cours</h2>
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
  console.log(state);
  return {
    courses: state.courses,
    authors: state.authors
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addCourse: course => dispatch(addCourse(course.id, course.title, course.authorId, course.category, course.slug)),
    editCourse: course => dispatch(editCourse(course.id, course.title, course.authorId, course.category, course.slug)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Course);
