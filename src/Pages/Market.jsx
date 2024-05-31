import { Container, Row, Col, Carousel } from "react-bootstrap";
import crop1 from "../Images/cocoafarm.jpeg";
import crop2 from "../Images/oilpalm.jpeg";
import crop3 from "../Images/food-crops.jpeg";

const Market = () => {
  return (
    <div className="market mt-5">
      <Container className="pb-4">
        <Row>
          <p>10 secs ago</p>
          <Col>
            <Carousel fade data-bs-theme="light">
              <Carousel.Item>
                <img src={crop1} alt="" className="feed-image" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={crop2} alt="" className="feed-image" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={crop3} alt="" className="feed-image" />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col>
            <h3>Chibuso Obasanjo</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, iste?</p>
            <p>#100,000</p>
        
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Market