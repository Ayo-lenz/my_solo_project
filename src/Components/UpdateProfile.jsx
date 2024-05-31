import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Axios } from "axios";

const UpdateProfile = (props) => {
  const [username, setUsername] = useState(props.username);
  const [phone, setPhone] = useState(props.phone);
  const [location, setLocation] = useState(props.location);
  const [img, setImg] = useState(props.img);
  const [about, setAbout] = useState(props.about);
  const [summary, setSummary] = useState(props.summary);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // to post the form data on an Api so that the information can be retrieved

  const url = ''
  /*
  useEffect(() => {
    if (username !== '' && phone !=='' && location !== '' && img !== '') {
       Axios.post(url, {
         name: username,
         phone: phone,
         location: location,
         img: img
       })
      .then((response) => response.json())
      .then((profileData))

    }

  }, [])
  */

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit Profile
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Edit your information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            className="profile-form"
            id="editmodal"
            onSubmit={(e) => {
              handleClose();
              e.preventDefault();
              props.profiles(props.id, phone, location, username, img, about, summary);
            }}
          >
            <div className="">
              <input
                type="number"
                className="mb-2 py-2 px-4 profile-input"
                placeholder="Edit Phone number"
                id="password"
                name="password"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
            <div className="">
              <input
                type="text"
                className="mb-2 py-2 px-4 profile-input"
                placeholder="Edit location"
                id="location"
                name="location"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              />
            </div>
            <div className="">
              <input
                type="text"
                className="mb-2 py-2 px-4 profile-input"
                placeholder="Edit Username"
                id="username"
                name="username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className="">
              <textarea
                className="mb-2 py-3 px-4 profile-input"
                placeholder="Enter your About"
                id="text"
                name="text"
                type="text"
                value={about}
                onChange={(e) => {
                  setAbout(e.target.value);
                }}
              />
            </div>
            <div className="">
              <input
                className="mb-2 py-2 px-4 profile-input"
                placeholder="Enter your image URL"
                id="img"
                type="text"
                value={img}
                onChange={(e) => {
                  setImg(e.target.value);
                }}
              />
            </div>
            <div className="">
              <textarea
                className="mb-2 py-2 px-4 profile-input"
                placeholder="Give a short summary of your company"
                id="img"
                type="text"
                value={summary}
                onChange={(e) => {
                  setSummary(e.target.value);
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
export default UpdateProfile;
