import "../App.css";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import cocoa from "../Images/cocoa-image.jpg";
import crop1 from "../Images/cocoafarm.jpeg";
import crop2 from "../Images/oilpalm.jpeg";
import crop3 from "../Images/food-crops.jpeg";
import crop4 from "../Images/cattles.jpeg";
import crop5 from "../Images/fishes.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Home = () => {
  return (
    <div className="home ">
      <h1
        className="home-text text-center"
        data-aos="fade-down"
        data-aos-duration="3000"
      >
        Welcome to the place where your farm products trade is made easy, fast
        and transparent
      </h1>

      <Container className="mt-5 text-center">
        <Row>
          <Col sm>
            <div
              className="category bg-success rounded"
              data-aos="zoom-in-down"
              data-aos-duration="3000"
            >
              <h3 className="py-5">Crops</h3>
              <div>
                <img src={cocoa} alt="" width="80" height="80" />
              </div>
              <p className="py-5 px-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                aperiam.
              </p>
            </div>
          </Col>
          <Col sm>
            <div
              className="category bg-success rounded"
              data-aos="zoom-in-down"
              data-aos-duration="3000"
            >
              <h3 className="py-5">Livestock</h3>
              <div>
                <img src={cocoa} alt="" width="80" height="80" />
              </div>
              <p className="py-5 px-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                aperiam.
              </p>
            </div>
          </Col>
          <Col sm>
            <div
              className="category bg-success rounded"
              data-aos="zoom-in-down"
              data-aos-duration="3000"
            >
              <h3 className="py-5">Sea Food</h3>
              <div>
                <img src={cocoa} alt="" width="80" height="80" />
              </div>
              <p className="py-5 px-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                aperiam.
              </p>
            </div>
          </Col>
          <Col sm>
            <div
              className="category bg-success rounded"
              data-aos="zoom-in-down"
              data-aos-duration="3000"
            >
              <h3 className="py-5">Farm feed</h3>
              <div>
                <img src={cocoa} alt="" width="80" height="80" />
              </div>
              <p className="py-5 px-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                aperiam.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <section className="information">
        <h1 className="text-center mb-5">ABOUT US</h1>
        <Container>
          <Row>
            <Col sm>
              <h2 data-aos="flip-down" data-aos-duration="3000">
                WHO WE ARE
              </h2>
              <p data-aos="slide-right" data-aos-duration="3000">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                repudiandae dignissimos veritatis maxime odit illo nostrum aut
                aliquid porro pariatur iste molestias, dolorem totam quis hic
                itaque repellendus similique reiciendis. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Porro nemo maxime recusandae
                voluptatum! Quas fugiat nostrum possimus accusamus et enim
                beatae delectus doloremque corporis ab nisi quos, ipsa
                accusantium atque odio vitae soluta. Vero cumque mollitia
                consectetur error praesentium totam.
              </p>
            </Col>
            <Col sm>
              <Carousel fade data-bs-theme="light" className="slider-container">
                <Carousel.Item>
                  <img
                    className="d-block w-100 slider-img"
                    src={crop1}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 slider-img"
                    src={crop2}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 slider-img"
                    src={crop3}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 slider-img"
                    src={crop4}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 slider-img"
                    src={crop5}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="information">
        <Container>
          <Row>
            <Col sm className="vision">
              <div
                className="px-5 pb-5"
                data-aos="zoom-out"
                data-aos-duration="3000"
              >
                <h3 className="pb-4">OUR VISION</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Mollitia, corporis blanditiis animi repellat error voluptates
                  ea veniam cupiditate modi eos itaque qui consequatur ipsum,
                  beatae aperiam quibusdam, labore repudiandae iure.
                </p>
              </div>
            </Col>
            <Col sm>
              <div
                className="px-5 pb-5"
                data-aos="zoom-out"
                data-aos-duration="3000"
              >
                <h3 className="pb-4">OUR MISSION</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur quia praesentium temporibus, perspiciatis deserunt,
                  quisquam quaerat culpa odio maiores, porro reprehenderit eaque
                  id consequatur optio corporis ex voluptatem. Commodi, error!
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};
export default Home;
