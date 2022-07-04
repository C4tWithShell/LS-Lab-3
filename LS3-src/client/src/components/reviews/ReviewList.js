import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchReviews } from "../../actions";

class ReviewList extends React.Component {
  componentDidMount() {
    this.props.fetchReviews();
  }

  renderAdmin(review) {
    return (
      <div className="right floated content">
        <Link to={`/reviews/edit/${review.id}`} className="ui button primary">
          Edit
          </Link>
        <Link
          to={`/reviews/delete/${review.id}`}
          className="ui button negative"
        >
          Delete
          </Link>
      </div>
    );
  }

  renderList() {
    return this.props.reviews.map((review) => {
      return (
        <div className="item" key={review.id}>
          {this.renderAdmin(review)}
          <div className="content">
            <Link to={`/reviews/${review.id}`} className="header">
              {review.title}
            </Link>
            <div className="description">{review.description}</div>
          </div>
        </div>
      );
    });
  }

  renderCreate() {
    return (
      <div style={{ textAlign: "right" }}>
        <Link to="/reviews/new" className="ui button primary">
          Create Review
          </Link>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h2>Reviews</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    reviews: Object.values(state.reviews),
  };
};

export default connect(mapStateToProps, { fetchReviews })(ReviewList);
