import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import { fetchReview, deleteReview } from "../../actions";
import history from "../../history";

class ReviewDelete extends React.Component {
  componentDidMount() {
    this.props.fetchReview(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteReview(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.review) {
      return "Are you sure you want to delete this review?";
    }
    return `Are you sure you want to delete the review with title: "${this.props.review.title}"?`;
  }

  render() {
    return (
      <Modal
        title="Delete Review"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { review: state.reviews[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchReview, deleteReview })(
  ReviewDelete
);
