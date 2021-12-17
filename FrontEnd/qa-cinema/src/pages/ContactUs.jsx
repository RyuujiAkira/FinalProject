import { Form, Button } from "react-bootstrap";
import { ImLocation2 } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import { useState, React } from "react";
import emailjs from 'emailjs-com';

export default function ContactUs() {

    const [validated, setValidated] = useState(false);

    function sendEmail(e) {
        const form = e.currentTarget;
        e.preventDefault();
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        else {
            window.alert("Email has been sent!");
        }
        setValidated(true);

        emailjs.sendForm('service_bsmkosj', 'template_outs34d', e.target, 'user_Dpn0HMLp7C1GAsq1WDyXO')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div class="container-fluid px-5 my-5" id="contactUsBody">
            <div class="row justify-content-center">
                <div class="col-xl-10">
                    <div class="card border-0 rounded-3 shadow-lg overflow-hidden">
                        <div class="card-body p-0">
                            <div class="row g-0">
                                <div class="col-sm-6 d-sm-block" id="contactImage">
                                    <div class="container h-100">
                                        <div class="row h-100 align-items-center text-white">
                                            <div class="col text-center">
                                                <h4><ImLocation2 /> Address </h4>
                                                <p>8, St James's Bldg, 61-95 Oxford St, Manchester M1 6FQ</p>
                                                <h4 class="pt-3"><AiOutlineMail /> Email</h4>
                                                <p>cinemaqa@gmail.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 p-4">
                                    <div class="text-center">
                                        <div class="h3 fw-light">Contact Us</div>
                                        <p class="mb-4 text-muted">Get in touch by sending us a message here about anything!</p>
                                    </div>

                                    <Form noValidate validated={validated} onSubmit={sendEmail}>
                                        <Form.Group className="mb-3 mx-5" controlId="formGridName">
                                            <Form.Label>Full Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter name" name="name" id="name" />
                                        </Form.Group>

                                        <Form.Group className="mb-3 mx-5" controlId="formGridPhone">
                                            <Form.Label>Phone Number</Form.Label>
                                            <Form.Control type="tel" placeholder="Enter phone number" name="phone" id="phone" />
                                        </Form.Group>

                                        <Form.Group className="mb-3 mx-5" controlId="formGridEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" required name="email" id="email" />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a valid email.
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group className="mb-3 mx-5" controlId="formGridSubject">
                                            <Form.Label>Subject</Form.Label>
                                            <Form.Control type="text" placeholder="Enter subject" required name="subject" id="subject" />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a subject.
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group className="mb-3 mx-5" controlId="formGridMessage">
                                            <Form.Label>Enter your message</Form.Label>
                                            <Form.Control as="textarea" type="text" rows={7} placeholder="Enter a message here" name="message" id="message" />
                                        </Form.Group>

                                        <Button variant="primary" type="submit" className="mx-5">
                                            Submit
                                        </Button>
                                    </Form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};