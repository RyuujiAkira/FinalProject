import { Form, Button } from "react-bootstrap";
import { ImLocation2 } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";

const ContactUs = () => {
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
                                                <p>fraser.smith@gmail.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 p-4">
                                    <div class="text-center">
                                        <div class="h3 fw-light">Contact Us</div>
                                        <p class="mb-4 text-muted">Get in touch by sending us a message here about anything!</p>
                                    </div>

                                    <Form>
                                        <Form.Group className="mb-3 mx-5" controlId="formGridName">
                                            <Form.Label>Full Name</Form.Label>
                                            <Form.Control type="name" placeholder="Enter name" />
                                        </Form.Group>

                                        <Form.Group className="mb-3 mx-5" controlId="formGridPhone">
                                            <Form.Label>Phone Number</Form.Label>
                                            <Form.Control placeholder="Enter phone number" />
                                        </Form.Group>

                                        <Form.Group className="mb-3 mx-5" controlId="formGridEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>

                                        <Form.Group className="mb-3 mx-5" controlId="formGridSubject">
                                            <Form.Label>Subject</Form.Label>
                                            <Form.Control type="email" placeholder="Enter subject" />
                                        </Form.Group>
                                        <Form.Group className="mb-3 mx-5" controlId="formGridMessage">
                                            <Form.Label>Enter your message</Form.Label>
                                            <Form.Control as="textarea" rows={7} placeholder="Enter a message here" />
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
}

export default ContactUs;