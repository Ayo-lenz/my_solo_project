import { Container, Row, Col } from "react-bootstrap";

const Account = (props) => {
   return (
     <div className="">
       <Container>
         <Row>
           <Col sm className="my-5 px-5">
             <h3>Ayodeji Segun</h3>
             <p>Contact: {props.phone} </p>
             <p>State/Country: {props.location}</p>
             <p>Username: {props.username}</p>

             <p>About: {props.about}</p>
             {props.updateProfile}
           </Col>
           <Col sm className="mt-5">
             <img src={props.img} alt="" />
           </Col>
         </Row>
       </Container>
       <div className="px-5">
         <h4>Company Summary</h4>
         <p>{props.summary}</p>
       </div>
       <h4 className="my-5 px-5">Upload a Product</h4>
     </div>
   );
};
export default Account;
