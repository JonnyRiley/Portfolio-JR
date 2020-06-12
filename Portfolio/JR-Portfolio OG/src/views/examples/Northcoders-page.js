import React from "react";
import { Container, Col, Row } from "reactstrap";
// import desktop from "../../assets/desktop1.png";
import ncNews from "../../assets/nc-news.png";
import ncNews2 from "../../assets/nc-news2.png";
import NCBackEnd from "../../assets/NC-BE.png";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function NorthcodersPage() {
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
          <Row>
            <section class="d-flex justify-content-center">
              <div class="shadow preload">
                <Col className="ml-auto mr-auto text-center" md="10">
                  <div className="name">
                    <h1 className="title">
                      NC-NEWS <br />
                    </h1>
                    <Row>
                      {" "}
                      <img
                        class="w-50 p-3"
                        src={ncNews}
                        alt="milkroom webApp"
                      ></img>
                      <img
                        class="w-50 p-3"
                        src={ncNews2}
                        alt="milkroom webApp"
                      ></img>
                    </Row>
                    <h4 className="description">
                      {" "}
                      A Full-Stack Reddit style news aggregation board. RESTful
                      API built with Node.js, JavaScript, Express.js and
                      frontend built using React.js, HTML and CSS. Testing was
                      carried out using Mocha, Chai and Supertest.
                    </h4>
                  </div>
                  <br></br>
                  <br></br>
                  <img
                    class="w-75 p-3"
                    src={NCBackEnd}
                    alt="milkroom webApp"
                  ></img>
                  <br></br>
                  {/* </Col>

                <Col className="ml-auto mr-auto text-center"> */}

                  {/* <h4 className="description">
                    This project was based around horizon scanning and thinking
                    about technological tools that can support efforts in
                    creating a sustainable future. My project was focused on how
                    the car industry is going to change by the year 2030. I
                    wanted to create a mobile application that was accessible to
                    all users by giving the user the ability to navigate and
                    plan their journey by highlighting the use of electric car
                    charging points, along with suggesting nearby locations to
                    visit whilst at each point of interest. The goal was to
                    self-teach the UI software development kit Flutter and the
                    client-optimizing language Dart that is native to Flutter.
                    In order to retrieve the data multiple Google API’s where
                    used in correlation with the OpenCharge Map API. The
                    back-end was built using Ruby on Rails and PostgreSQL. This
                    was set to challenge and test my ability to learn a new tech
                    stack under-pressure and build an App within the time
                    constraint of two weeks. I am proud that this project was
                    completed and presented on time and can be viewed upon
                    request.
                  </h4> */}
                  <br></br>
                  <br></br>
                  <br></br>
                  <Container>
                    <Row>
                      <Col className="mr-auto" md="4" sm="5">
                        <img
                          alt="..."
                          // className="img-thumbnail img-responsive"
                          class="w-100 p-3"
                          src={require("assets/react.png")}
                        />{" "}
                      </Col>
                      <Col className="mr-auto" md="3" sm="3">
                        {" "}
                        <img
                          alt="..."
                          // className="img-thumbnail img-responsive"
                          class="w-100 p-3"
                          src={require("assets/html5.png")}
                        />
                      </Col>
                      <Col className="mr-auto" md="3" sm="3">
                        <img
                          alt="..."
                          class="w-75 p-3"
                          // className="img-thumbnail img-responsive"
                          src={require("assets/CSS3.png")}
                        />
                      </Col>
                    </Row>
                  </Container>
                </Col>
              </div>
            </section>
          </Row>
        </Container>

        {/* <br></br>
        <br></br>
        <Container>
          <Row className="ml-auto mr-auto text-center">
            <Col>
              {" "}
              <img
                class="shadow preload"
                src={desktop}
                alt="milkroom webApp"
              ></img>
            </Col>
          </Row>
        </Container> */}
        {/* <Container>
          <Row className="ml-auto mr-auto text-center">
            <Col>
              {" "}
              <img src={video} alt="milkroom webApp"></img>
            </Col>
            <Col>
              {" "}
              <h4 className="description">
                {" "}
                <br></br>
                <br></br>
                My focus points for the web app centred on it being; user
                centric, visually engaging and easy to navigate. Importantly, I
                monitor the application analytics to assess trends and popular
                pages to ensure that my focus points are maintained over time.
              </h4>
            </Col>
          </Row>
        </Container> */}
      </div>
      <DemoFooter />
    </>
  );
}

export default NorthcodersPage;
