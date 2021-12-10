import { Form, Button, Row } from "react-bootstrap";
import { ImLocation2 } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import { useState, React } from "react";
import { Accordion } from "react-bootstrap";
const Classifications = () => {
    return (<>

        <div class="row">
            <div class="col-md-8 offset-md-2">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>U</Accordion.Header>
                        <Accordion.Body>
                            <div class="container-fluid px-5 my-5" id="contactUsBody">
                                <div class="row justify-content-center">
                                    <div class="col-xl-10">
                                        <div class="card border-0 rounded-3 shadow-lg overflow-hidden">
                                            <div class="card-body p-0">
                                                <div class="row g-0">
                                                    <div class="col-sm-6 d-sm-block" id="uImage">
                                                        <div class="container h-100">
                                                            <div class="row h-100 align-items-center text-white">
                                                                <div class="col text-center">

                                                                    <div class="h3 fw-light">U</div>

                                                                    <p>Suitable for all </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-6 p-4">
                                                        <div class="text-center">
                                                            <div class="h3 fw-light">U films should be set within a positive framework and should offer reassuring counterbalances to any violence, threat or horror. If a work is particularly suitable for pre-school children, this will be indicated in the Ratings Info.</div>
                                                            <br></br>
                                                            <div class="h3 fw-light">Dangerous behaviour</div>
                                                            <p class="mb-4 text-muted">Potentially dangerous or anti-social behaviour which young children may copy must be clearly disapproved of. No emphasis on realistic or easily accessible weapons.</p>
                                                            <br></br>
                                                            <div class="h3 fw-light">Discrimination</div>
                                                            <p class="mb-4 text-muted">Discriminatory language or behaviour is unlikely to be acceptable unless clearly disapproved of</p>
                                                            <br></br>
                                                            <div class="h3 fw-light">Drugs</div>
                                                            <p class="mb-4 text-muted">References to illegal drugs or drug misuse must be infrequent and innocuous, or have a clear educational purpose or anti-drug message suitable for young children.</p>
                                                            <br></br>
                                                            <div class="h3 fw-light">Language</div>
                                                            <p class="mb-4 text-muted">Infrequent use only of very mild bad language.</p>
                                                            <br></br>
                                                            <div class="h3 fw-light">Nudity</div>
                                                            <p class="mb-4 text-muted">Occasional nudity, with no sexual context.</p>
                                                            <br></br>
                                                            <div class="h3 fw-light">Sex</div>
                                                            <p class="mb-4 text-muted">Occasional nudity, with no sexual context.</p>
                                                            <br></br>
                                                            <div class="h3 fw-light">Threat and Horror</div>
                                                            <p class="mb-4 text-muted">Scary or potentially unsettling sequences should be mild, brief and unlikely to cause undue anxiety to young children. The outcome should be reassuring.</p>
                                                            <br></br>
                                                            <div class="h3 fw-light">Violence</div>
                                                            <p class="mb-4 text-muted">Violence will generally be very mild. Mild violence may be acceptable if it is justified by context (for example, comedic, animated, wholly unrealistic).</p>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>PG</Accordion.Header>
                        <Accordion.Body>
                            <div class="container-fluid px-5 my-5" id="contactUsBody">
                                <div class="row justify-content-center">
                                    <div class="col-xl-10">
                                        <div class="card border-0 rounded-3 shadow-lg overflow-hidden">
                                            <div class="card-body p-0">
                                                <div class="row g-0">
                                                    <div class="col-sm-6 d-sm-block" id="pg13Image">
                                                        <div class="container h-100">
                                                            <div class="row h-100 align-items-center text-white">
                                                                <div class="col text-center">

                                                                    <div class="h3 fw-light">PG</div>

                                                                    <p>Parental Guidance </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-6 p-4">
                                                        <div class="text-center">
                                                            <div class="h3 fw-light">General viewing, but some scenes may be unsuitable for young children. A PG film should not unsettle a child aged around eight or older. Unaccompanied children of any age may watch, but parents are advised to consider whether the content may upset younger, or more sensitive, children.</div>
                                                            <br></br>
                                                            <div class="h3 fw-light">Dangerous behaviour</div>
                                                            <p class="mb-4 text-muted">No detail of potentially dangerous behaviour which young children are likely to copy, if that behaviour is presented as safe or fun. No glamorisation of realistic or easily accessible weapons such as knives. No focus on anti-social behaviour which young children are likely to copy.</p>
                                                            <br></br>
                                                            <div class="h3 fw-light">Discrimination</div>
                                                            <p class="mb-4 text-muted">Discriminatory language or behaviour is unlikely to be acceptable unless clearly disapproved of, or in an educational or historical context, or in a particularly dated work with no likely appeal to children. Discrimination by a character with whom children can readily identify is unlikely to be acceptable.</p>
                                                            <br></br>
                                                            <div class="h3 fw-light">Drugs</div>
                                                            <p class="mb-4 text-muted">References to illegal drugs or drug misuse must be innocuous or carry a suitable anti-drug message.</p>
                                                            <br></br>
                                                            <div class="h3 fw-light">Language</div>
                                                            <p class="mb-4 text-muted">Mild bad language only. Aggressive or very frequent use of mild bad language may result in a work being passed at a higher category.</p>
                                                            <br></br>
                                                            <div class="h3 fw-light">Nudity</div>
                                                            <p class="mb-4 text-muted">There may be nudity with no sexual context.</p>
                                                            <br></br>
                                                            <div class="h3 fw-light">Sex</div>
                                                            <p class="mb-4 text-muted">Sexual activity may be implied, but should be discreet and infrequent. Mild sex references and innuendo only.</p>
                                                            <br></br>
                                                            <div class="h3 fw-light">Threat and Horror</div>
                                                            <p class="mb-4 text-muted">Frightening sequences or situations where characters are in danger should not be prolonged or intense. Fantasy settings and comedy may be mitigating factors.</p>
                                                            <br></br>
                                                            <div class="h3 fw-light">Violence</div>
                                                            <p class="mb-4 text-muted">Violence will usually be mild. However there may be moderate violence, without detail, if justified by its context (for example, history, comedy or fantasy).</p>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>12A</Accordion.Header>
                        <Accordion.Body>
                            <div class="container-fluid px-5 my-5" id="contactUsBody">
                                <div class="row justify-content-center">
                                    <div class="col-xl-10">
                                        <div class="card border-0 rounded-3 shadow-lg overflow-hidden">
                                            <div class="card-body p-0">
                                                <div class="row g-0">
                                                    <div class="col-sm-6 d-sm-block" id="pg12AImage">
                                                        <div class="container h-100">
                                                            <div class="row h-100 align-items-center text-white">
                                                                <div class="col text-center">

                                                                    <div class="h3 fw-light">12A</div>

                                                                    <p>Cinema release suitable for 12 years and over </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-6 p-4">
                                                        <div class="text-center">
                                                            <div class="h3 fw-light">Films classified 12A and video works classified 12 contain material that is not generally suitable for children aged under 12. No one younger than 12 may see a 12A film in a cinema unless accompanied by an adult. Adults planning to take a child under 12 to view a 12A film should consider whether the film is suitable for that child. To help them decide, we recommend that they check the Ratings Info for that film in advance. No one younger than 12 may rent or buy a 12 rated video work.</div>
                                                            <br></br>
                                                            <div class="h3 fw-light">Dangerous behaviour</div>
                                                            <p class="mb-4 text-muted">No promotion of potentially dangerous behaviour which children are likely to copy. No glamorisation of realistic or easily accessible weapons such as knives. No endorsement of anti-social behaviour.</p>
                                                            <br></br>
                                                            <div class="h3 fw-light">Discrimination</div>
                                                            <p class="mb-4 text-muted">Discriminatory language or behaviour must not be endorsed by the work as a whole. Aggressive discriminatory language or behaviour is unlikely to be acceptable unless clearly condemned.</p>
                                                            <br></br>
                                                            <div class="h3 fw-light">Drugs</div>
                                                            <p class="mb-4 text-muted">Misuse of drugs must be infrequent and should not be glamorised or give detailed instruction.</p>
                                                            <br></br>
                                                            <div class="h3 fw-light">Language</div>
                                                            <p class="mb-4 text-muted">There may be moderate bad language. Strong language may be permitted, depending on the manner in which it is used, who is using the language, its frequency within the work as a whole and any special contextual justification.</p>
                                                            <br></br>
                                                            <div class="h3 fw-light">Nudity</div>
                                                            <p class="mb-4 text-muted">There may be nudity, but in a sexual context it must be brief and discreet.</p>
                                                            <br></br>
                                                            <div class="h3 fw-light">Sex</div>
                                                            <p class="mb-4 text-muted">Sexual activity may be briefly and discreetly portrayed. Moderate sex references are permitted, but frequent crude references are unlikely to be acceptable.</p>
                                                            <br></br>
                                                            <div class="h3 fw-light">Threat and Horror</div>
                                                            <p class="mb-4 text-muted">There may be moderate physical and psychological threat and horror sequences. Although some scenes may be disturbing, the overall tone should not be. Horror sequences should not be frequent or sustained.</p>
                                                            <br></br>
                                                            <div class="h3 fw-light">Violence</div>
                                                            <p class="mb-4 text-muted">There may be moderate violence but it should not dwell on detail. There should be no emphasis on injuries or blood, but occasional gory moments may be permitted if justified by the context.</p>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>12</Accordion.Header>
                        <Accordion.Body>
                            <div class="container-fluid px-5 my-5" id="contactUsBody">
                                <div class="row justify-content-center">
                                    <div class="col-xl-10">
                                        <div class="card border-0 rounded-3 shadow-lg overflow-hidden">
                                            <div class="card-body p-0">
                                                <div class="row g-0">
                                                    <div class="col-sm-6 d-sm-block" id="pg12Image">
                                                        <div class="container h-100">
                                                            <div class="row h-100 align-items-center text-white">
                                                                <div class="col text-center">

                                                                    <div class="h3 fw-light">12</div>

                                                                    <p>Video release suitable for 12 years and over</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-6 p-4">
                                                        <div class="text-center">
                                                            <div class="h3 fw-light">Films classified 12A and video works classified 12 contain material that is not generally suitable for children aged under 12. No one younger than 12 may see a 12A film in a cinema unless accompanied by an adult. Adults planning to take a child under 12 to view a 12A film should consider whether the film is suitable for that child. To help them decide, we recommend that they check the Ratings Info for that film in advance. No one younger than 12 may rent or buy a 12 rated video work.</div>
                                                            <br></br>
                                                            <div class="h3 fw-light">Dangerous behaviour</div>
                                                            <p class="mb-4 text-muted">No promotion of potentially dangerous behaviour which children are likely to copy. No glamorisation of realistic or easily accessible weapons such as knives. No endorsement of anti-social behaviour.</p>
                                                            <br></br>
                                                            <div class="h3 fw-light">Discrimination</div>
                                                            <p class="mb-4 text-muted">Discriminatory language or behaviour must not be endorsed by the work as a whole. Aggressive discriminatory language or behaviour is unlikely to be acceptable unless clearly condemned.</p>
                                                            <br></br>
                                                            <div class="h3 fw-light">Drugs</div>
                                                            <p class="mb-4 text-muted">Misuse of drugs must be infrequent and should not be glamorised or give detailed instruction.</p>
                                                            <br></br>
                                                            <div class="h3 fw-light">Language</div>
                                                            <p class="mb-4 text-muted">There may be moderate bad language. Strong language may be permitted, depending on the manner in which it is used, who is using the language, its frequency within the work as a whole and any special contextual justification.</p>
                                                            <br></br>
                                                            <div class="h3 fw-light">Nudity</div>
                                                            <p class="mb-4 text-muted">There may be nudity, but in a sexual context it must be brief and discreet.</p>
                                                            <br></br>
                                                            <div class="h3 fw-light">Sex</div>
                                                            <p class="mb-4 text-muted">Sexual activity may be briefly and discreetly portrayed. Moderate sex references are permitted, but frequent crude references are unlikely to be acceptable.</p>
                                                            <br></br>
                                                            <div class="h3 fw-light">Threat and Horror</div>
                                                            <p class="mb-4 text-muted">There may be moderate physical and psychological threat and horror sequences. Although some scenes may be disturbing, the overall tone should not be. Horror sequences should not be frequent or sustained.</p>
                                                            <br></br>
                                                            <div class="h3 fw-light">Violence</div>
                                                            <p class="mb-4 text-muted">There may be moderate violence but it should not dwell on detail. There should be no emphasis on injuries or blood, but occasional gory moments may be permitted if justified by the context.</p>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>15</Accordion.Header>
                        <Accordion.Body>
                            <div class="container-fluid px-5 my-5" id="contactUsBody">
                                <div class="row justify-content-center">
                                    <div class="col-xl-10">
                                        <div class="card border-0 rounded-3 shadow-lg overflow-hidden">
                                            <div class="card-body p-0">
                                                <div class="row g-0">
                                                    <div class="col-sm-6 d-sm-block" id="pg15Image">
                                                        <div class="container h-100">
                                                            <div class="row h-100 align-items-center text-white">
                                                                <div class="col text-center">

                                                                    <div class="h3 fw-light">15</div>

                                                                    <p>Suitable only for 15 years and over</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-6 p-4">
                                                        <div class="text-center">
                                                            <div class="h3 fw-light">No one younger than 15 may see a 15 film in a cinema. No one younger than 15 may rent or buy a 15 rated video work.</div>
                                                            <br></br>
                                                            <div class="h3 fw-light">Dangerous behaviour</div>
                                                            <p class="mb-4 text-muted">Dangerous behaviour (for example, suicide, self-harming and asphyxiation) should not dwell on detail which could be copied. Whether the depiction of easily accessible weapons is acceptable will depend on factors such as realism, context and setting.</p>
                                                            <br></br>
                                                            <div class="h3 fw-light">Discrimination</div>
                                                            <p class="mb-4 text-muted">The work as a whole must not endorse discriminatory language or behaviour, although there may be racist, homophobic or other discriminatory themes and language.</p>
                                                            <br></br>
                                                            <div class="h3 fw-light">Drugs</div>
                                                            <p class="mb-4 text-muted">Drug taking may be shown but the work as a whole must not promote or encourage drug misuse (for example, through detailed instruction). The misuse of easily accessible and highly dangerous substances (for example, aerosols or solvents) is unlikely to be acceptable.</p>
                                                            <br></br>
                                                            <div class="h3 fw-light">Language</div>
                                                            <p class="mb-4 text-muted">There may be strong language. Very strong language may be permitted, depending on the manner in which it is used, who is using the language, its frequency within the work as a whole and any special contextual justification.</p>
                                                            <br></br>
                                                            <div class="h3 fw-light">Nudity</div>
                                                            <p class="mb-4 text-muted">There are no constraints on nudity in a non-sexual or educational context. Sexual nudity may be permitted but strong detail is likely to be brief or presented in a comic context.</p>
                                                            <br></br>
                                                            <div class="h3 fw-light">Sex</div>
                                                            <p class="mb-4 text-muted">Sexual activity may be portrayed, but usually without strong detail. There may be strong verbal references to sexual behaviour. Repeated very strong references, particularly those using pornographic language, are unlikely to be acceptable. Works whose primary purpose is sexual arousal are unacceptable.</p>
                                                            <br></br>
                                                            <div class="h3 fw-light">Threat and Horror</div>
                                                            <p class="mb-4 text-muted">There may be strong threat and horror. A sustained focus on sadistic threat is unlikely to be acceptable.</p>
                                                            <br></br>
                                                            <div class="h3 fw-light">Violence</div>
                                                            <p class="mb-4 text-muted">Violence may be strong but should not dwell on the infliction of pain or injury. The strongest gory images are unlikely to be acceptable. Strong sadistic violence is also unlikely to be acceptable.</p>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>18</Accordion.Header>
                        <Accordion.Body>
                            <div class="container-fluid px-5 my-5" id="contactUsBody">
                                <div class="row justify-content-center">
                                    <div class="col-xl-10">
                                        <div class="card border-0 rounded-3 shadow-lg overflow-hidden">
                                            <div class="card-body p-0">
                                                <div class="row g-0">
                                                    <div class="col-sm-6 d-sm-block" id="pg18Image">
                                                        <div class="container h-100">
                                                            <div class="row h-100 align-items-center text-white">
                                                                <div class="col text-center">

                                                                    <div class="h3 fw-light">18</div>

                                                                    <p>Suitable only for adults</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-6 p-4">
                                                        <div class="text-center">
                                                            <div class="h3 fw-light">No one younger than 18 may see an 18 film in a cinema. No one younger than 18 may rent or buy an 18 rated video work. Adults should be free to choose their own entertainment.</div>
                                                            <br></br>
                                                            <div class="h3 fw-light">Exceptions are most likely in the following areas</div>
                                                            <p class="mb-4 text-muted">where the material is in breach of the criminal law, or has been created through the commission of a criminal offence</p>
                                                            <br></br>

                                                            <p class="mb-4 text-muted">where material or treatment appears to us to risk harm to individuals or, through their behaviour, to society. For example, the detailed portrayal of violent or dangerous acts, or of illegal drug use, which may cause harm to public health or morals. This may include portrayals of sadistic violence, rape or other non-consensual sexually violent behaviour which make this violence look appealing; reinforce the suggestion that victims enjoy rape or other non-consensual sexually violent behaviour; or which invite viewer complicity in rape, other non-consensual sexually violent behaviour or other harmful violent activities</p>
                                                            <br></br>

                                                            <p class="mb-4 text-muted">where there are more explicit images of sexual activity in the context of a sex work (see right) In the case of video works, which may be more accessible to younger viewers, intervention may be more frequent than for cinema films.</p>
                                                            <br></br>
                                                            <div class="h3 fw-light">Sex Works at 18</div>
                                                            <p class="mb-4 text-muted">Adults should be free to choose their own entertainment. Exceptions are most likely in the following areas:</p>
                                                            <br></br>

                                                            <p class="mb-4 text-muted">Sex works are works whose primary purpose is sexual arousal or stimulation. Sex works containing only material which may be simulated are generally passed 18. Sex works containing clear images of real sex, strong fetish material, sexually explicit animated images, or other very strong sexual images will be confined to the R18 category. Material which is unacceptable in a sex work at R18 is also unacceptable in a sex work at 18.</p>
                                                            <br></br>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    </>);
}

export default Classifications;