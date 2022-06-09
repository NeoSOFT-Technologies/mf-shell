import React, { useEffect, useState } from "react";
import { Button, Card, Container, Form, Modal } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { regexForName } from "../../resources/constants";
import { getUserDetails, deleteUser, updateUser } from "../../services/service";

export default function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    firstName: "",
    id: undefined,
    isActive: undefined,
    lastName: "",
    password: "",
  });
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    //  isActive: undefined
  });
  const [formError, setFormError] = useState({
    firstName: "",
    lastName: "",
    //  isActive: undefined
  });
  // const [validated, setValidated] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  useEffect(() => {
    getUserDetails(id).then((res) => {
      console.log(res.data);
      setUser(res.data);
      setFormData({
        firstName: res.data.firstName,
        lastName: res.data.lastName,
      });
    });
  }, []);

  const handleDeleteUser = () => {
    deleteUser(id).then((res) => {
      console.log(res.data);
      navigate("/users");
    });
  };
  // const handleUpdateUser = () => {
  //   console.log("update");
  // }
  const handleUpdateModalOpen = () => {
    setShowUpdateModal(true);
  };
  const handleUpdateModalClose = () => {
    setShowUpdateModal(false);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "firstName":
        setFormError({
          ...formError,
          firstName: regexForName.test(value) ? "" : "Enter a Valid First Name",
        });
        break;
      case "lastName":
        setFormError({
          ...formError,
          lastName: regexForName.test(value) ? "" : "Enter a Valid Last Name",
        });
        break;
      // case "isActive":
      //   setFormError({
      //     ...formError,
      //     isActive: regexForName.test(value) ? "" : "Enter a Valid ",
      //   });
      //   break;
    }
    setFormData({ ...formData, [name]: value });
  };
  const handleFormEmpty = () => {
    const empty = !!(
      (formData.firstName === "" && formData.lastName === "")
      // && formData.isActive === ""
    );
    return empty;
  };
  const handleFormValidate = () => {
    const validate = !!(
      (formError.firstName === "" && formError.lastName === "")
      // && formError.isActive === ""
    );
    return validate;
  };
  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }
  //   setValidated(true);
  // };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (!handleFormEmpty()) {
      if (handleFormValidate()) {
        console.log(formData);
        updateUser(id, formData);
        setUser({
          ...user,
          firstName: formData.firstName,
          lastName: formData.lastName,
        });
        setShowUpdateModal(false);
      } else {
        // ToastAlert("Please Enter Valid Details", "warning");
        console.log("Please Enter Valid Details", "warning");
      }
    } else {
      // ToastAlert("Please Fill All Fields", "warning");
      console.log("Please Fill All Fields", "warning");
    }
  };
  return (
    <>
      <Container className="my-4 py-4">
        <Card>
          <Card.Header>
            <h2>User Details</h2>
          </Card.Header>
          <Card.Body>
            <p>
              <b>id: </b>
              {user.id}
            </p>
            <p>
              <b>firstName: </b>
              {user.firstName}
            </p>
            <p>
              <b>lastName: </b>
              {user.lastName}
            </p>
            <p>
              <b>email: </b>
              {user.email}
            </p>
            <p>
              <b>password: </b>
              {user.password}
            </p>
            <p>
              <b>Status: </b>
              {user.isActive ? "active" : "inactive"}
            </p>
            <Button
              variant="warning"
              className="me-2"
              onClick={handleUpdateModalOpen}
            >
              Update
            </Button>
            <Button
              variant="danger"
              className="me-2"
              onClick={handleDeleteUser}
            >
              Delete
            </Button>
          </Card.Body>
        </Card>
        <Modal show={showUpdateModal} onHide={handleUpdateModalClose}>
          <Form noValidate onSubmit={handleFormSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>Update User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
                <Form.Control.Feedback>
                  {formError.firstName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
                <Form.Control.Feedback>
                  {formError.lastName}
                </Form.Control.Feedback>
              </Form.Group>
              {/* <Form.Group>
                <Form.Label>Status</Form.Label>
                <Form.Select name="isActive" onChange={handleInputChange} required>
                  <option value={""}>select status</option>
                  <option value="true">Active</option>
                  <option value="false">Inactive</option>
                </Form.Select>
              </Form.Group> */}
              {/* <Button type="submit">Submit form</Button> */}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleUpdateModalClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </Container>
    </>
  );
}
