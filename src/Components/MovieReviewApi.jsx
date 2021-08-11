import React, { Component } from "react";
import "./MovieReviewApi.css";

class MovieReviewApi extends Component {
  constructor(props) {
    super(props);
    this.State = {
      Movies: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://api.nytimes.com/svc/movies/v2/reviews/all.json?query=&api-key=EL60qpjMJbSG8Gi3c7ozM9h4GRpInBwR"
    )
      .then((res) => {
        if (!res.ok) {
          throw Error("data unfetched");
        }
        return res.json();
      })
      .then((data) => {
        this.setState(data);
        console.log(this.state.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      this.state &&
      this.state.results.map((review, id) => {
        return (
          <div className="review1" key={id}>
            <div className="img-box">
              <img src={review.multimedia.src} alt="apiReview" />
            </div>
            <div>
              <h2>
                <span className="title">Movie Title :</span>
                {review.display_title}
              </h2>

              <p>
                <span className="pick">Critics Pick :</span>
                {review.critics_pick}
              </p>
              <p>
                <span className="byline">ByLine :</span> {review.byline}
              </p>
            </div>
          </div>
        );
      })
    );
  }
}
export default MovieReviewApi;
