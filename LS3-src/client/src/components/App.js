import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import CreateReview from "./reviews/CreateReview";
import ReviewDelete from "./reviews/ReviewDelete";
import ReviewEdit from "./reviews/ReviewEdit";
import ReviewList from "./reviews/ReviewList";
import ReviewShow from "./reviews/ReviewShow";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={ReviewList} />
            <Route path="/reviews/new" exact component={CreateReview} />
            <Route path="/reviews/edit/:id" exact component={ReviewEdit} />
            <Route path="/reviews/delete/:id" exact component={ReviewDelete} />
            <Route path="/reviews/:id" exact component={ReviewShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
