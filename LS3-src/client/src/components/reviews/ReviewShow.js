import React from "react";
import { connect } from "react-redux";
import { fetchReview } from "../../actions";

class ReviewShow extends React.Component {
  componentDidMount() {
    this.props.fetchReview(this.props.match.params.id);
  }

  render() {
    if (!this.props.review) {
      return <div>Loading...</div>;
    }
    const { title, description } = this.props.review;
    return (
      <div>
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { review: state.reviews[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchReview })(ReviewShow);
