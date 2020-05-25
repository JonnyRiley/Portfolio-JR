/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">About</h2>
                <h5 className="description">
                  An adaptable and responsible Business graduate that has
                  recently completed an industry-led coding Bootcamp,
                  NorthCoders. I have a clear, logical mind with a practical
                  approach to problem solving and a drive to see things through
                  to completion. Coding has enabled me to further my curiosity
                  into problem solving and how the world of tech works.
                </h5>
                <br />
                <Button
                  className="btn-round"
                  color="info"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  See Details
                </Button>
              </Col>
            </Row>
            <Container>
              {/*  <div class="d-flex justify-content-center">
                <Row>
                  <Col md="17">
                    <div className="title">
                      <h3>Software Skills</h3>
                      <br />
                    </div>
                    <p>
                      {" "}
                      Javascript
                      <Progress
                        max="100"
                        value="90"
                        barClassName="progress-bar-success"
                      />
                    </p>
                    <p>
                      React
                      <Progress
                        max="100"
                        value="85"
                        barClassName="progress-bar-success"
                      />
                    </p>
                    <p>
                      {" "}
                      HTML5
                      <Progress
                        max="100"
                        value="85"
                        barClassName="progress-bar-success"
                      />
                    </p>
                    <p>
                      {" "}
                      CSS
                      <Progress
                        max="100"
                        value="85"
                        barClassName="progress-bar-success"
                      />
                    </p>
                    <p>
                      {" "}
                      Bootstrap
                      <Progress
                        max="100"
                        value="78"
                        barClassName="progress-bar-success"
                      />
                    </p>
                    <p>
                      {" "}
                      NodeJs
                      <Progress
                        max="100"
                        value="78"
                        barClassName="progress-bar-success"
                      />
                    </p>
                    <p>
                      {" "}
                      Express.js
                      <Progress
                        max="100"
                        value="70"
                        barClassName="progress-bar-warning"
                      />
                    </p>{" "}
                    <p>
                      {" "}
                      PostgreSQL
                      <Progress
                        max="100"
                        value="70"
                        barClassName="progress-bar-warning"
                      />
                    </p>
                    <p>
                      {" "}
                      Flutter
                      <Progress
                        max="100"
                        value="70"
                        barClassName="progress-bar-warning"
                      />
                    </p>
                    <p>
                      {" "}
                      Dart
                      <Progress
                        max="100"
                        value="70"
                        barClassName="progress-bar-warning"
                      />
                    </p>
                    <br />
                  </Col>
                </Row>
              </div> */}
              <div className="title">
                <h2>Projects</h2>
              </div>
              <Row>
                <Col md="4" sm="7">
                  <h4 className="images-title">Front-End</h4>
                  <img
                    alt="..."
                    className="img-rounded img-responsive"
                    src={require("assets/img/faces/milkroom.png")}
                  />
                  <div className="img-details">
                    <div className="author">
                      <img
                        alt="..."
                        className="img-circle img-no-padding img-responsive"
                        src={require("assets/img/faces/milkroom-logo.jpg")}
                      />
                    </div>
                    <p>React Web App</p>
                  </div>
                </Col>
                <Col md="4" sm="7">
                  <h4 className="images-title">Back-End</h4>
                  <img
                    alt="..."
                    className="img-rounded img-responsive"
                    src={require("assets/img/faces/milkroom.png")}
                  />
                  <div className="img-details">
                    <div className="author">
                      <img
                        alt="..."
                        className="img-circle img-no-padding img-responsive"
                        src={require("assets/img/faces/milkroom-logo.jpg")}
                      />
                    </div>
                    <p>RESTful API</p>
                  </div>
                </Col>{" "}
                <Col md="4" sm="7">
                  <h4 className="images-title">Rounded Image</h4>
                  <img
                    alt="..."
                    className="img-rounded img-responsive"
                    src={require("assets/img/faces/milkroom.png")}
                  />
                  <div className="img-details">
                    <div className="author">
                      <img
                        alt="..."
                        className="img-circle img-no-padding img-responsive"
                        src={require("assets/img/faces/milkroom-logo.jpg")}
                      />
                    </div>
                    <p>The milkroom Web App</p>
                  </div>
                </Col>
              </Row>
            </Container>
            <br />
            <br />
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Travel</h4>
                    <p className="description">
                      Exploring the world encourages me to work harder and
                      occasionally put my laptop down.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Business Projects</h4>
                    <p>
                      Projects that I am either currently or previously been
                      involved in.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Skills</h4>
                    <p>
                      Tech languages and frameworks that I have implemented so
                      far
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-sun-fog-29" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">About</h4>
                    <p>My hobbies and interests outside the world of coding</p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <div className="section section-dark text-center">
          <Container>
            <h2 className="title">Let's talk about us</h2>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/clem-onojeghuo-3.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Henry Ford</CardTitle>
                        <h6 className="card-category">Product Manager</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/joe-gardner-2.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Sophie West</CardTitle>
                        <h6 className="card-category">Designer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      A group becomes a team when each member is sure enough of
                      himself and his contribution to praise the skill of the
                      others. No one can whistle a symphony. It takes an
                      orchestra to play it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/erik-lucatero-2.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Robert Orben</CardTitle>
                        <h6 className="card-category">Developer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      The strength of the team is each individual member. The
                      strength of each member is the team. If you can laugh
                      together, you can work together, silence isn’t golden,
                      it’s deadly.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div> */}
        <div className="section section-dark ">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Keep in touch?</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
