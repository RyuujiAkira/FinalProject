import React from "react";
import "../resources/css/discussion.css";
import { Card, Row, Col, Dropdown } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { DropdownButton } from "react-bootstrap";
import { BrowserRouter as Link } from "react-router-dom";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
}

const Discussion = () => {
    const stars = Array(5).fill(0);
    const [currentValue, setCurrentValue] = React.useState(0);
    const [hoverValue, setHoverValue] = React.useState(undefined);
    const handleClick = value => {
        setCurrentValue(value)
    };
    const handleMouseOver = value => {
        setHoverValue(value)
    };
    const handleMouseLeave = () => {
        setHoverValue(undefined)
    };
    const makeDiscussion = {

    }

    return (
        <div className="Discussion">
            <div className="container" id="container">
                <h1>Discussion</h1>
                <div className="row">
                    <Row className="mx-auto">
                        <Col className="mx-1">
                            <Card className="text-white glassCard">
                                <Card.Img variant="top" className="mx-auto mt-4" style={{ height: "6em", width: "6em", borderRadius: "50%" }} />
                                <Card.Body>
                                    <Card.Text>
                                        <h6 class="text-center">Review</h6>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-center">
                                    <h3>Movie <span>username</span></h3>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col className="mx-1">
                            <Card className="text-white glassCard">
                                <Card.Img variant="top" className="mx-auto mt-4" style={{ height: "6em", width: "6em", borderRadius: "50%" }} />
                                <Card.Body>
                                    <Card.Text>
                                        <h6 class="text-center">Review</h6>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-center">
                                    <h3>Movie <span>username</span></h3>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col className="mx-1">
                            <Card className="text-white glassCard">
                                <Card.Img variant="top" className="mx-auto mt-4" style={{ height: "6em", width: "6em", borderRadius: "50%" }} />
                                <Card.Body>
                                    <Card.Text>
                                        <h6 class="text-center">Review</h6>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-center">
                                    <h3>Movie <span>username</span></h3>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
            <div style={styles.container}>
                <h2>Leave a review</h2>
                <div style={styles.stars}>
                    {stars.map((_, index) => {
                        return (
                            <FaStar
                                key={index}
                                size={24}
                                style={{
                                    marginRight: 10,
                                    cursor: "pointer"
                                }}
                                color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                onClick={() => handleClick(index + 1)}
                            />
                        )
                    })}
                </div>
                <DropdownButton title="Which movie" id="basic-nav-dropdown">
                    <Dropdown.Item>
                        Movie1
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                        Movie2
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                        Movie3
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                        Movie4
                    </Dropdown.Item>
                    <Dropdown.Divider />
                </DropdownButton>
                <button style={styles.button}>Submit</button>
            </div>
            <div className="forumtitle col">
                <h2>Older Reviews</h2>
            </div>
            <div className="forum">
                <div class="row justify-content-md-center">
                    <div class="front col col-lg-2">
                        <h5>Movie + img</h5>
                    </div>
                    <div class="mid col-md-auto">
                        Review
                    </div>
                    <div class="end col col-lg-2">
                        username <span>date</span>
                    </div>
                </div>
                <div class="row justify-content-md-center">
                    <div class="front col col-lg-2">
                        <h5>Movie + img</h5>
                    </div>
                    <div class="mid col-md-auto">
                        Review
                    </div>
                    <div class="end col col-lg-2">
                        username <span>date</span>
                    </div>
                </div>
                <div class="row justify-content-md-center">
                    <div class="front col col-lg-2">
                        <h5>Movie + img</h5>
                    </div>
                    <div class="mid col-md-auto">
                        Review
                    </div>
                    <div class="end col col-lg-2">
                        username <span>date</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
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
        width: 300
    },
    button: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        width: 100,
        padding: 10,
    }

};
export default Discussion;