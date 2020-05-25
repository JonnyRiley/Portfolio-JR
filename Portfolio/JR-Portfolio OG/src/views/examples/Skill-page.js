import React from "react";

// reactstrap components
import { Button, Progress, Container, Row, Col } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function Skills() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <IndexNavbar />
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/faces/NC-Photo copy.PNG")}
              />
            </div>
            <div className="name">
              <h2 className="title">Skills</h2>
              <h5 className="description">
                An adaptable and responsible Business graduate that has recently
                completed an industry-led coding Bootcamp, NorthCoders. I have a
                clear, logical mind with a practical approach to problem solving
                and a drive to see things through to completion. Coding has
                enabled me to further my curiosity into problem solving and how
                the world of tech works.
              </h5>
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <Row>
              <Col md="25">
                <div className="title">
                  <h3>Software Languages and Frameworks</h3>
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
          </div>

          {/* <Col>
            <div class="d-flex justify-content-center">
              <div className="title">
                <h3>Software Languages and Frameworks</h3>
                <br />
              </div>
            </div>
          </Col> */}
          <Container>
            <div className="section text-center">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe
                  title="Graduation Video"
                  class="embed-responsive-item"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/4RUl9N7pYt4"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>

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
                <Col>
                  <div className="img-details">
                    <Button
                      className="btn-round ml-1"
                      color="info"
                      type="button"
                    >
                      MORE PROJECTS
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
          {/* <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p>
                An artist of considerable range, Jane Faker — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure.
              </p>
              <br />
              <Button className="btn-round" color="default" outline>
                <i className="fa fa-cog" /> Settings
              </Button>
            </Col>
          </Row>
          <br /> */}
          {/* <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
              <Nav role="tablist" tabs>
                <NavItem>
                  <NavLink
                    className={activeTab === "1" ? "active" : ""}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    Follows
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "2" ? "active" : ""}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    Following
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>
          Tab panes */}
          {/* <TabContent className="following" activeTab={activeTab}>
            <TabPane tabId="1" id="follows">
              <Row>
                <Col className="ml-auto mr-auto" md="6">
                  <ul className="list-unstyled follows">
                    <li>
                      <Row>
                        <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={require("assets/img/faces/NC-Photo copy.PNG")}
                          />
                        </Col>
                        <Col className="ml-auto mr-auto" lg="7" md="4" xs="4">
                          <h6>
                            Flume <br />
                            <small>Musical Producer</small>
                          </h6>
                        </Col>
                        <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                          <FormGroup check>
                            <Label check>
                              <Input
                                defaultChecked
                                defaultValue=""
                                type="checkbox"
                              />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </Col>
                      </Row>
                    </li>
                    <hr />
                    <li>
                      <Row>
                        <Col className="mx-auto" lg="2" md="4" xs="4">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={require("assets/img/faces/NC-Photo copy.PNG")}
                          />
                        </Col>
                        <Col lg="7" md="4" xs="4">
                          <h6>
                            Banks <br />
                            <small>Singer</small>
                          </h6>
                        </Col>
                        <Col lg="3" md="4" xs="4">
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue="" type="checkbox" />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </Col>
                      </Row>
                    </li>
                  </ul>
                </Col>
              </Row>
            </TabPane>
            <TabPane className="text-center" tabId="2" id="following">
              <h3 className="text-muted">Not following anyone yet :(</h3>
              <Button className="btn-round" color="warning">
                Find artists
              </Button>
            </TabPane>
          </TabContent> */}
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default Skills;
