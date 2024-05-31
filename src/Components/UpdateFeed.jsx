import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Axios } from "axios";

const UpdateFeed = (props) => {
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /*
  const url = ''

   useEffect(() => {
     if (image1 !== "" && image3 !== "" && title !== "" && description !== "" && price !== '') {
       Axios.post(url, {
         image1: image1,
         image3: image3,
         description: description,
         title: title,
         price: price
       })
         .then((response) => response.json())
         .then(feedData);
     }
   }, []);

   */

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Product
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add your product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            className="profile-form"
            id="editmodal"
            onSubmit={(e) => {
              handleClose();
              e.preventDefault();
              props.feeds(image1, image2, image3, title, description, price);
            }}
          >
            <div className="">
              <input
                type="text"
                className="mb-2 py-2 px-4 profile-input"
                placeholder="Add product image"
                id="img"
                name="img"
                value={image1}
                onChange={(e) => {
                  setImage1(e.target.value);
                }}
              />
            </div>
            <div className="">
              <input
                type="text"
                className="mb-2 py-2 px-4 profile-input"
                placeholder="Add product image"
                id="img"
                name="img"
                value={image2}
                onChange={(e) => {
                  setImage2(e.target.value);
                }}
              />
            </div>
            <div className="">
              <input
                type="text"
                className="mb-2 py-2 px-4 profile-input"
                placeholder="Add product image"
                id="img"
                name="img"
                value={image3}
                onChange={(e) => {
                  setImage3(e.target.value);
                }}
              />
            </div>
            <div className="">
              <input
                className="mb-2 py-2 px-4 profile-input"
                placeholder="Enter a title"
                id="text"
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="">
              <input
                className="mb-2 py-2 px-4 profile-input"
                placeholder="Describe your product"
                id="img"
                type="text"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
            <div className="">
              <input
                className="mb-2 py-2 px-4 profile-input"
                placeholder="Enter your product price range"
                id="img"
                type="text"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button className="btn btn-success" form="editmodal">
            Update
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default UpdateFeed;
