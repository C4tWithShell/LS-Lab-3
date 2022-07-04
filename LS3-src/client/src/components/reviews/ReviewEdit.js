import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchReview, editReview } from "../../actions";
import ReviewForm from "./ReviewForm";

class ReviewEdit extends React.Component {
  componentDidMount() {
    this.props.fetchReview(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editReview(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.review) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit a Review</h3>
        <ReviewForm
          initialValues={_.pick(this.props.review, "title", "description")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { review: state.reviews[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchReview, editReview })(
  ReviewEdit
);
