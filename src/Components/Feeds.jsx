import { Container, Row, Col, Carousel } from "react-bootstrap";

const Feeds = (props) => {
  return (
    <div className="my-5 px-5">
      <Container>
        <Row>
          <Col sm>
            <Carousel fade data-bs-theme="light">
              <Carousel.Item>
                <img src={props.image1} alt="feed" className="feed-image" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={props.image2} alt="feed" className="feed-image" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={props.image3} alt="feed" className="feed-image" />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col sm>
            <h4>Title: {props.title}</h4>
            <p>Description: {props.description}</p>
            <p>Price:{props.price}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Feeds;
