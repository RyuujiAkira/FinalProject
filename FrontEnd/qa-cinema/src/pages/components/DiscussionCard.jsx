import { FaStar } from "react-icons/fa";
import { Card, Row, Col, Dropdown, Form } from "react-bootstrap";
import React, { useState } from "react";
import axios from "axios";
import ExistingReview from "./ExistingReview";

const DiscussionCard = ({ movie, discussion }) => {
  const [userName, setUserName] = useState("");
  const [comment, setComment] = useState("");
  const stars = Array(5).fill(0);
  const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9",
  };
  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const makeDiscussion = () => {
    const moderate = (text) => {
      const badNouns = [
        "bad code",
        "fuck",
        "shit",
        "crap",
        "idiot",
        "wank",
        "shit",
        "bollocks",
        "cunt",
        "dick",
      ];

      for (let i = 0; i < badNouns.length; i++) {
        if (text.includes(badNouns[i]) == true) {
          const replacement = "Message deleted by auto-mod";
          text = replacement;
          break;
        }
      }

      return text;
    };
    const commentBuilder = {
      movie_id: movie._id,
      datePosted: Date.now(),
      userName: userName,
      comment: moderate(comment),
      rating: currentValue,
    };
    axios
      .post("http://localhost:6969/createComment", commentBuilder)
      .then(console.log(commentBuilder))
      .catch((error) => {
        console.log(error);
      });
    console.log(commentBuilder);
  };
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "rgba(225, 225, 225, 0.1)",
    },
    stars: {
      display: "flex",
      flexDirection: "row",
    },
    textarea: {
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      padding: 10,
      margin: "20px 0",
      minHeight: 100,
      width: 300,
    },
    button: {
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      width: 100,
      padding: 10,
    },
  };

  const idFiltered = discussion.filter((review) => {
    return review.movie_id.includes(movie._id);
  });
  const [currentValue, setCurrentValue] = React.useState(0);
  const [hoverValue, setHoverValue] = React.useState(undefined);

  return (
    <div className="container">
      <Col>
        <Card className="card text-white glassCard" style={{ height: "80%" }}>
          <Card.Img
            className="mx-auto"
            src={movie.img}
            variant="top"
            style={{ height: "12em", width: "8em" }}
          />
          <Card.Body>
            <Card.Text>
              <h6>Review</h6>
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-center">
            <h3>{movie.title}</h3>
            <Form onSubmit={makeDiscussion}>
              <div>
                <input
                  type="text"
                  placeholder="Username"
                  onChange={(e) => setUserName(e.target.value)}
                ></input>
              </div>
              <div>
                <h6>We appreciate your feedback</h6>
              </div>
              <textarea
                rows="5"
                cols="50"
                placeholder="Enter your review here"
                id="review-input"
                onChange={(e) => setComment(e.target.value)}
              />
              <div style={styles.stars}>
                {stars.map((_, index) => {
                  return (
                    <FaStar
                      key={index}
                      size={24}
                      style={{
                        marginRight: 10,
                        cursor: "pointer",
                      }}
                      color={
                        (hoverValue || currentValue) > index
                          ? colors.orange
                          : colors.grey
                      }
                      onClick={() => handleClick(index + 1)}
                    />
                  );
                })}
              </div>

              <button type="submit" style={styles.button}>
                Submit
              </button>
            </Form>

            <ExistingReview review={idFiltered} />
          </Card.Footer>
        </Card>
      </Col>
    </div>
  );
};

export default DiscussionCard;