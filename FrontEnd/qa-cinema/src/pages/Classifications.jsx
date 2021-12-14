import { React } from "react";
import { Accordion, Tab, Col, Nav, Row } from "react-bootstrap";
import imageU from "../resources/images/BBFC_U.png";
import imagePG from "../resources/images/BBFC_PG.png";
import image12A from "../resources/images/BBFC_12A.png";
import image12 from "../resources/images/BBFC_12.png";
import image15 from "../resources/images/BBFC_15.png";
import image18 from "../resources/images/BBFC_18.png";

const Classifications = () => {

    return (
        <div class="container-fluid">
            <div class="px-4 py-5 text-center text-white">
                <a href>
                    <img class="d-block mx-auto mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/BBFC_logo_%28new%29.svg/1200px-BBFC_logo_%28new%29.svg.png" alt="BBFC Logo" width="10%" />
                </a>
                <h1 class="display-5 fw-bold">Classifications</h1>
                <div class="col-lg-6 mx-auto">
                    <p class="lead mt-4">All classification decisions are based on the BBFC’s published and regularly updated Guidelines.</p>
                    <p class="lead">Please check the film's classification before viewing to see if you or anyone viewing are suitable to watch.</p>
                    <p class="lead">Click any of the rating images to see information about them!</p>
                </div>
            </div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Nav variant="pills" className="mx-auto">
                        <Col sm={2}>
                            <Nav.Item>
                                <Nav.Link eventKey="first"><img src={imageU} alt="U Image" width="100em" /></Nav.Link>
                            </Nav.Item>
                        </Col>
                        <Col sm={2}>
                            <Nav.Item>
                                <Nav.Link eventKey="second"><img src={imagePG} alt="PG Image" width="100em" /></Nav.Link>
                            </Nav.Item>
                        </Col>
                        <Col sm={2}>
                            <Nav.Item>
                                <Nav.Link eventKey="third"><img src={image12A} alt="12A Image" width="100em" /></Nav.Link>
                            </Nav.Item>
                        </Col>
                        <Col sm={2}>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth"><img src={image12} alt="12 Image" width="100em" /></Nav.Link>
                            </Nav.Item>
                        </Col>
                        <Col sm={2}>
                            <Nav.Item>
                                <Nav.Link eventKey="fifth"><img src={image15} alt="15 Image" width="100em" /></Nav.Link>
                            </Nav.Item>
                        </Col>
                        <Col sm={2}>
                            <Nav.Item>
                                <Nav.Link eventKey="sixth"><img src={image18} alt="18 Image" width="100em" /></Nav.Link>
                            </Nav.Item>
                        </Col>
                    </Nav>
                </Row>
                <Row>
                    <Col>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <div class="container-fluid px-5 my-5">
                                    <div class="row justify-content-center">
                                        <div class="col-xl-10">
                                            <div class="card border-0 rounded-3 shadow-lg overflow-hidden">
                                                <div class="card-body p-0">
                                                    <div class="row g-0">
                                                        <div class="col-sm-6 d-sm-block" id="uImage">
                                                            <div class="container h-100">
                                                                <div class="row h-100 align-items-center text-white">
                                                                    <div class="col text-center">
                                                                        <img src={imageU} alt="U Image" width="140em" />
                                                                        <div class="h3 fw-light my-5">U Universal - Suitable for all</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-6 p-4">
                                                            <div class="text-start p-3">
                                                                <div class="h3 fw-light mb-5">U films should be set within a positive framework and should offer reassuring counterbalances to any violence, threat or horror. If a work is particularly suitable for pre-school children, this will be indicated in the Ratings Info.</div>
                                                                <div class="h4 fw-light">Dangerous behaviour</div>
                                                                <p class="mb-4 text-muted">Potentially dangerous or anti-social behaviour which young children may copy must be clearly disapproved of. No emphasis on realistic or easily accessible weapons.</p>
                                                                <div class="h4 fw-light">Discrimination</div>
                                                                <p class="mb-4 text-muted">Discriminatory language or behaviour is unlikely to be acceptable unless clearly disapproved of</p>
                                                                <div class="h4 fw-light">Drugs</div>
                                                                <p class="mb-4 text-muted">References to illegal drugs or drug misuse must be infrequent and innocuous, or have a clear educational purpose or anti-drug message suitable for young children.</p>
                                                                <div class="h4 fw-light">Language</div>
                                                                <p class="mb-4 text-muted">Infrequent use only of very mild bad language.</p>
                                                                <div class="h4 fw-light">Nudity</div>
                                                                <p class="mb-4 text-muted">Occasional nudity, with no sexual context.</p>
                                                                <div class="h4 fw-light">Sex</div>
                                                                <p class="mb-4 text-muted">Occasional nudity, with no sexual context.</p>
                                                                <div class="h4 fw-light">Threat and Horror</div>
                                                                <p class="mb-4 text-muted">Scary or potentially unsettling sequences should be mild, brief and unlikely to cause undue anxiety to young children. The outcome should be reassuring.</p>
                                                                <div class="h4 fw-light">Violence</div>
                                                                <p class="mb-1 text-muted">Violence will generally be very mild. Mild violence may be acceptable if it is justified by context (for example, comedic, animated, wholly unrealistic).</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <div class="container-fluid px-5 my-5">
                                    <div class="row justify-content-center">
                                        <div class="col-xl-10">
                                            <div class="card border-0 rounded-3 shadow-lg overflow-hidden">
                                                <div class="card-body p-0">
                                                    <div class="row g-0">
                                                        <div class="col-sm-6 d-sm-block" id="pg13Image">
                                                            <div class="container h-100">
                                                                <div class="row h-100 align-items-center text-white">
                                                                    <div class="col text-center">
                                                                        <img src={imagePG} alt="PG Image" width="140em" />
                                                                        <div class="h3 fw-light my-5">PG Parental Guidance</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-6 p-4">
                                                            <div class="text-start p-3">
                                                                <div class="h3 fw-light mb-5">General viewing, but some scenes may be unsuitable for young children. A PG film should not unsettle a child aged around eight or older. Unaccompanied children of any age may watch, but parents are advised to consider whether the content may upset younger, or more sensitive, children.</div>
                                                                <div class="h4 fw-light">Dangerous behaviour</div>
                                                                <p class="mb-4 text-muted">No detail of potentially dangerous behaviour which young children are likely to copy, if that behaviour is presented as safe or fun. No glamorisation of realistic or easily accessible weapons such as knives. No focus on anti-social behaviour which young children are likely to copy.</p>
                                                                <div class="h4 fw-light">Discrimination</div>
                                                                <p class="mb-4 text-muted">Discriminatory language or behaviour is unlikely to be acceptable unless clearly disapproved of, or in an educational or historical context, or in a particularly dated work with no likely appeal to children. Discrimination by a character with whom children can readily identify is unlikely to be acceptable.</p>
                                                                <div class="h4 fw-light">Drugs</div>
                                                                <p class="mb-4 text-muted">References to illegal drugs or drug misuse must be innocuous or carry a suitable anti-drug message.</p>
                                                                <div class="h4 fw-light">Language</div>
                                                                <p class="mb-4 text-muted">Mild bad language only. Aggressive or very frequent use of mild bad language may result in a work being passed at a higher category.</p>
                                                                <div class="h4 fw-light">Nudity</div>
                                                                <p class="mb-4 text-muted">There may be nudity with no sexual context.</p>
                                                                <div class="h4 fw-light">Sex</div>
                                                                <p class="mb-4 text-muted">Sexual activity may be implied, but should be discreet and infrequent. Mild sex references and innuendo only.</p>
                                                                <div class="h4 fw-light">Threat and Horror</div>
                                                                <p class="mb-4 text-muted">Frightening sequences or situations where characters are in danger should not be prolonged or intense. Fantasy settings and comedy may be mitigating factors.</p>
                                                                <div class="h4 fw-light">Violence</div>
                                                                <p class="mb-1 text-muted">Violence will usually be mild. However there may be moderate violence, without detail, if justified by its context (for example, history, comedy or fantasy).</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <div class="container-fluid px-5 my-5">
                                    <div class="row justify-content-center">
                                        <div class="col-xl-10">
                                            <div class="card border-0 rounded-3 shadow-lg overflow-hidden">
                                                <div class="card-body p-0">
                                                    <div class="row g-0">
                                                        <div class="col-sm-6 d-sm-block" id="pg12AImage">
                                                            <div class="container h-100">
                                                                <div class="row h-100 align-items-center text-white">
                                                                    <div class="col text-center">
                                                                        <img src={image12A} alt="12A Image" width="140em" />
                                                                        <div class="h3 fw-light my-5">12A - Suitable for 12 years and over</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-6 p-4">
                                                            <div class="text-start p-3">
                                                                <div class="h3 fw-light mb-5">Films classified 12A and video works classified 12 contain material that is not generally suitable for children aged under 12. No one younger than 12 may see a 12A film in a cinema unless accompanied by an adult. Adults planning to take a child under 12 to view a 12A film should consider whether the film is suitable for that child. To help them decide, we recommend that they check the Ratings Info for that film in advance. No one younger than 12 may rent or buy a 12 rated video work.</div>
                                                                <div class="h4 fw-light">Dangerous behaviour</div>
                                                                <p class="mb-4 text-muted">No promotion of potentially dangerous behaviour which children are likely to copy. No glamorisation of realistic or easily accessible weapons such as knives. No endorsement of anti-social behaviour.</p>
                                                                <div class="h4 fw-light">Discrimination</div>
                                                                <p class="mb-4 text-muted">Discriminatory language or behaviour must not be endorsed by the work as a whole. Aggressive discriminatory language or behaviour is unlikely to be acceptable unless clearly condemned.</p>
                                                                <div class="h4 fw-light">Drugs</div>
                                                                <p class="mb-4 text-muted">Misuse of drugs must be infrequent and should not be glamorised or give detailed instruction.</p>
                                                                <div class="h4 fw-light">Language</div>
                                                                <p class="mb-4 text-muted">There may be moderate bad language. Strong language may be permitted, depending on the manner in which it is used, who is using the language, its frequency within the work as a whole and any special contextual justification.</p>
                                                                <div class="h4 fw-light">Nudity</div>
                                                                <p class="mb-4 text-muted">There may be nudity, but in a sexual context it must be brief and discreet.</p>
                                                                <div class="h4 fw-light">Sex</div>
                                                                <p class="mb-4 text-muted">Sexual activity may be briefly and discreetly portrayed. Moderate sex references are permitted, but frequent crude references are unlikely to be acceptable.</p>
                                                                <div class="h4 fw-light">Threat and Horror</div>
                                                                <p class="mb-4 text-muted">There may be moderate physical and psychological threat and horror sequences. Although some scenes may be disturbing, the overall tone should not be. Horror sequences should not be frequent or sustained.</p>
                                                                <div class="h4 fw-light">Violence</div>
                                                                <p class="mb-4 text-muted">There may be moderate violence but it should not dwell on detail. There should be no emphasis on injuries or blood, but occasional gory moments may be permitted if justified by the context.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <div class="container-fluid px-5 my-5">
                                    <div class="row justify-content-center">
                                        <div class="col-xl-10">
                                            <div class="card border-0 rounded-3 shadow-lg overflow-hidden">
                                                <div class="card-body p-0">
                                                    <div class="row g-0">
                                                        <div class="col-sm-6 d-sm-block" id="pg12Image">
                                                            <div class="container h-100">
                                                                <div class="row h-100 align-items-center text-white">
                                                                    <div class="col text-center">
                                                                        <img src={image12} alt="12 Image" width="140em" />
                                                                        <div class="h3 fw-light my-5">12 - Suitable for 12 years and over</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-6 p-4">
                                                            <div class="text-start p-3">
                                                                <div class="h3 fw-light mb-5">Films classified 12A and video works classified 12 contain material that is not generally suitable for children aged under 12. No one younger than 12 may see a 12A film in a cinema unless accompanied by an adult. Adults planning to take a child under 12 to view a 12A film should consider whether the film is suitable for that child. To help them decide, we recommend that they check the Ratings Info for that film in advance. No one younger than 12 may rent or buy a 12 rated video work.</div>
                                                                <div class="h4 fw-light">Dangerous behaviour</div>
                                                                <p class="mb-4 text-muted">No promotion of potentially dangerous behaviour which children are likely to copy. No glamorisation of realistic or easily accessible weapons such as knives. No endorsement of anti-social behaviour.</p>
                                                                <div class="h4 fw-light">Discrimination</div>
                                                                <p class="mb-4 text-muted">Discriminatory language or behaviour must not be endorsed by the work as a whole. Aggressive discriminatory language or behaviour is unlikely to be acceptable unless clearly condemned.</p>
                                                                <div class="h4 fw-light">Drugs</div>
                                                                <p class="mb-4 text-muted">Misuse of drugs must be infrequent and should not be glamorised or give detailed instruction.</p>
                                                                <div class="h4 fw-light">Language</div>
                                                                <p class="mb-4 text-muted">There may be moderate bad language. Strong language may be permitted, depending on the manner in which it is used, who is using the language, its frequency within the work as a whole and any special contextual justification.</p>
                                                                <div class="h4 fw-light">Nudity</div>
                                                                <p class="mb-4 text-muted">There may be nudity, but in a sexual context it must be brief and discreet.</p>
                                                                <div class="h4 fw-light">Sex</div>
                                                                <p class="mb-4 text-muted">Sexual activity may be briefly and discreetly portrayed. Moderate sex references are permitted, but frequent crude references are unlikely to be acceptable.</p>
                                                                <div class="h4 fw-light">Threat and Horror</div>
                                                                <p class="mb-4 text-muted">There may be moderate physical and psychological threat and horror sequences. Although some scenes may be disturbing, the overall tone should not be. Horror sequences should not be frequent or sustained.</p>
                                                                <div class="h4 fw-light">Violence</div>
                                                                <p class="mb-1 text-muted">There may be moderate violence but it should not dwell on detail. There should be no emphasis on injuries or blood, but occasional gory moments may be permitted if justified by the context.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fifth">
                                <div class="container-fluid px-5 my-5">
                                    <div class="row justify-content-center">
                                        <div class="col-xl-10">
                                            <div class="card border-0 rounded-3 shadow-lg overflow-hidden">
                                                <div class="card-body p-0">
                                                    <div class="row g-0">
                                                        <div class="col-sm-6 d-sm-block" id="pg15Image">
                                                            <div class="container h-100">
                                                                <div class="row h-100 align-items-center text-white">
                                                                    <div class="col text-center">
                                                                        <img src={image15} alt="15 Image" width="140em" />
                                                                        <div class="h3 fw-light my-5">15 - Suitable only for 15 years and over</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-6 p-4">
                                                            <div class="text-start p-3">
                                                                <div class="h3 fw-light mb-5">No one younger than 15 may see a 15 film in a cinema. No one younger than 15 may rent or buy a 15 rated video work.</div>
                                                                <div class="h4 fw-light">Dangerous behaviour</div>
                                                                <p class="mb-4 text-muted">Dangerous behaviour (for example, suicide, self-harming and asphyxiation) should not dwell on detail which could be copied. Whether the depiction of easily accessible weapons is acceptable will depend on factors such as realism, context and setting.</p>
                                                                <div class="h4 fw-light">Discrimination</div>
                                                                <p class="mb-4 text-muted">The work as a whole must not endorse discriminatory language or behaviour, although there may be racist, homophobic or other discriminatory themes and language.</p>
                                                                <div class="h4 fw-light">Drugs</div>
                                                                <p class="mb-4 text-muted">Drug taking may be shown but the work as a whole must not promote or encourage drug misuse (for example, through detailed instruction). The misuse of easily accessible and highly dangerous substances (for example, aerosols or solvents) is unlikely to be acceptable.</p>
                                                                <div class="h4 fw-light">Language</div>
                                                                <p class="mb-4 text-muted">There may be strong language. Very strong language may be permitted, depending on the manner in which it is used, who is using the language, its frequency within the work as a whole and any special contextual justification.</p>
                                                                <div class="h4 fw-light">Nudity</div>
                                                                <p class="mb-4 text-muted">There are no constraints on nudity in a non-sexual or educational context. Sexual nudity may be permitted but strong detail is likely to be brief or presented in a comic context.</p>
                                                                <div class="h4 fw-light">Sex</div>
                                                                <p class="mb-4 text-muted">Sexual activity may be portrayed, but usually without strong detail. There may be strong verbal references to sexual behaviour. Repeated very strong references, particularly those using pornographic language, are unlikely to be acceptable. Works whose primary purpose is sexual arousal are unacceptable.</p>
                                                                <div class="h4 fw-light">Threat and Horror</div>
                                                                <p class="mb-4 text-muted">There may be strong threat and horror. A sustained focus on sadistic threat is unlikely to be acceptable.</p>
                                                                <div class="h4 fw-light">Violence</div>
                                                                <p class="mb-1 text-muted">Violence may be strong but should not dwell on the infliction of pain or injury. The strongest gory images are unlikely to be acceptable. Strong sadistic violence is also unlikely to be acceptable.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="sixth">
                                <div class="container-fluid px-5 my-5">
                                    <div class="row justify-content-center">
                                        <div class="col-xl-10">
                                            <div class="card border-0 rounded-3 shadow-lg overflow-hidden">
                                                <div class="card-body p-0">
                                                    <div class="row g-0">
                                                        <div class="col-sm-6 d-sm-block" id="pg18Image">
                                                            <div class="container h-100">
                                                                <div class="row h-100 align-items-center text-white">
                                                                    <div class="col text-center">
                                                                        <img src={image18} alt="18 Image" width="140em" />
                                                                        <div class="h3 fw-light my-5">18 - Suitable only for adults</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-6 p-4">
                                                            <div class="text-start p-3">
                                                                <div class="h3 fw-light mb-5">No one younger than 18 may see an 18 film in a cinema. No one younger than 18 may rent or buy an 18 rated video work. Adults should be free to choose their own entertainment.</div>
                                                                <div class="h4 fw-light">Exceptions are most likely in the following areas</div>
                                                                <ul class="mb-4 px-3">
                                                                    <li class="mb-2 text-muted text-start">
                                                                        Where the material is in breach of the criminal law, or has been created through the commission of a criminal offence
                                                                    </li>
                                                                    <li class="mb-2 text-muted text-start">
                                                                        Where material or treatment appears to us to risk harm to individuals or, through their behaviour, to society. For example, the detailed portrayal of violent or dangerous acts, or of illegal drug use, which may cause harm to public health or morals. This may include portrayals of sadistic violence, rape or other non-consensual sexually violent behaviour which make this violence look appealing; reinforce the suggestion that victims enjoy rape or other non-consensual sexually violent behaviour; or which invite viewer complicity in rape, other non-consensual sexually violent behaviour or other harmful violent activities
                                                                    </li>
                                                                    <li class="mb-2 text-muted text-start">
                                                                        Where there are more explicit images of sexual activity in the context of a sex work (see right) In the case of video works, which may be more accessible to younger viewers, intervention may be more frequent than for cinema films.
                                                                    </li>
                                                                </ul>

                                                                <div class="h4 fw-light">Sex Works at 18</div>
                                                                <p class="mb-2 text-muted">Adults should be free to choose their own entertainment. Exceptions are most likely in the following areas:</p>
                                                                <p class="mb-1 text-muted">Sex works are works whose primary purpose is sexual arousal or stimulation. Sex works containing only material which may be simulated are generally passed 18. Sex works containing clear images of real sex, strong fetish material, sexually explicit animated images, or other very strong sexual images will be confined to the R18 category. Material which is unacceptable in a sex work at R18 is also unacceptable in a sex work at 18.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container >
        </div>

    );
}


export default Classifications;