import React from "react";

// reactstrap components
import { Progress, Container, Row, Col } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import { Link } from "react-router-dom";
import { NavLink } from "reactstrap";
import SectionCarousel from "views/index-sections/SectionCarousel.js";

function About() {
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
        <Container className="shadow preload">
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/faces/NC-Photo copy.PNG")}
              />
            </div>
            <div className="name">
              <div className="name">
                <h1 className="title">
                  Jonathon Riley <br />
                </h1>
              </div>
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

          <SectionCarousel />
          {/* <Col>
              {" "}
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <div class="text-center">
                <div className="title">
                  <h2>Random Facts</h2>
                </div>
                <div class="d-flex justify-content-center">
                  <ul class="list-group">
                    <li class="list-inline-item">Tea Drinker</li>

                    <li class="list-inline-item">
                      {" "}
                      I enjoy travelling the world
                    </li>

                    <li class="list-inline-item">
                      I love playing and watching all sports
                    </li>

                    <li class="list-inline-item">
                      I go to the gym regularly to keep myself fit
                    </li>
                  </ul>
                </div>
              </div>
            </Col> */}

          <div class="d-flex justify-content-center">
            <Row>
              <Col>
                <div className="container-fluid">
                  <div className="title">
                    <h2>Software Languages and Frameworks</h2>
                  </div>
                  <br />
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
                </div>
                <br />
              </Col>
            </Row>
          </div>
          <Container>
            <div className="section text-center">
              <div className="title">
                <h2>Projects</h2>
              </div>
              <Row>
                <Col md="4" sm="7">
                  <h4 className="images-title">Front-End/Back-End</h4>
                  <NavLink to="/milkroom" tag={Link}>
                    <img
                      alt="..."
                      className="img-rounded img-responsive"
                      src={require("assets/img/faces/milkroom.png")}
                    />{" "}
                    <br></br> <br></br>
                    <div className="img-details">
                      <p>React Web App</p>
                    </div>
                  </NavLink>
                </Col>
                <Col md="4" sm="7">
                  <h4 className="images-title">Front-End/Back-End</h4>
                  <NavLink to="/northcoders" tag={Link}>
                    <img
                      alt="..."
                      className="img-rounded img-responsive"
                      src={require("assets/ncNews-thumbnail.png")}
                    />
                    <br></br> <br></br>
                    <div className="img-details">
                      <p>React Web App</p>
                    </div>
                  </NavLink>
                </Col>{" "}
                <Col md="4" sm="7">
                  <h4 className="images-title">Front-end</h4>
                  <NavLink to="/reCharge" tag={Link}>
                    {" "}
                    <img
                      alt="..."
                      className="img-rounded img-responsive"
                      src={require("assets/reChargeThumbnail.png")}
                    />
                    <br></br> <br></br>
                    <div className="img-details">
                      <p>Flutter App</p>
                    </div>
                  </NavLink>
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

export default About;
