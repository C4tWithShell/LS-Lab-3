import React from "react";
import { connect } from "react-redux";
import { createReview } from "../../actions";
import ReviewForm from "./ReviewForm";

class CreateReview extends React.Component {
  onSubmit = (formValues) => {
    this.props.createReview(formValues);
  };

  render() {
    return (
      <div>
        <h3>Add review</h3>
        <ReviewForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createReview })(CreateReview);
