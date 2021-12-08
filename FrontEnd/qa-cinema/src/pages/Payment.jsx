import { Form, Button } from "react-bootstrap";
import { ImLocation2 } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";

const Payment = () => {
    return (<>
        <div class="container-fluid px-5 my-5" id="contactUsBody">
            <div class="row justify-content-center">
                <div class="col-xl-3">
                    <div class="card border-0 rounded-3 shadow-lg overflow-hidden">
                        <div class="card-body p-3">
                            <div class="row g-0">

                                <div class="col-sm-12 p-2">
                                    <div class="text-center">
                                        <div class="h2 fw-light">Payment Details</div>
                                        <p class="mb-4 text-muted">Enter your payment details below, then go to checkout!</p>
                                    </div>

                                    <Form>
                                        <Form.Group className="mb-3 mx-3" controlId="formGridName">
                                            <Form.Label>Full Name (As it appears on your card)</Form.Label>
                                            <Form.Control type="name" placeholder="Enter name" />
                                        </Form.Group>

                                        <Form.Group className="mb-3 mx-3" controlId="formGridPhone">
                                            <Form.Label>Card Number</Form.Label>
                                            <Form.Control placeholder="XXXX-XXXX-XXXX-XXXX" />
                                        </Form.Group>

                                        <Form.Group className="mb-3 mx-3" controlId="formGridPhone">
                                            <Form.Label>CSV</Form.Label>
                                            <Form.Control placeholder="123" />
                                        </Form.Group>

                                        <Form.Group className="mb-3 mx-3" controlId="formGridPhone">
                                            <Form.Label>Expiry Date</Form.Label>
                                            <Form.Control placeholder="XX/XX" />
                                        </Form.Group>

                                        <Form.Group className="mb-3 mx-3" controlId="formGridEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>

                                        <Form.Group className="mb-3 mx-3" controlId="formGridSubject">
                                            <Form.Label>Leave Us A Message</Form.Label>
                                            <Form.Control type="email" placeholder="..." />
                                        </Form.Group>

                                        <Button variant="primary" type="submit" className="mx-3">
                                            Checkout
                                        </Button>
                                    </Form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    </>);
};

export default Payment;