import React, { useEffect, useState } from "react";
import { getUser } from "../../services/service";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./users.css";
import "../../index.css";

export default function Users() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUser().then((res) => {
      console.log(res.data);
      setUsers(res.data);
    });
  }, []);

  const handleUserNavigate = (id) => {
    console.log(id);
    navigate(`/users/${id}`);
  };
  return (
    <div>
      <Row className="g-4 container-fluid mt-3">
        {users &&
          users.map((val, i) => (
            <Col sm={12} md={4} key={i}>
              <Card className="customCard">
                <Card.Img
                  variant="top"
                  src={`https://picsum.photos/200?=${i}`}
                />
                <Card.Body>
                  <Card.Title>
                    {val.firstName} {val.lastName}({val.id})
                  </Card.Title>
                  <Card.Text>
                    {val.email}{" "}
                    {val.isActive ? (
                      <i className="bi bi-check-circle-fill text-success"></i>
                    ) : (
                      <i className="bi bi-x-circle-fill text-danger"></i>
                    )}
                  </Card.Text>
                  <Button
                    className="forgetPassword"
                    onClick={() => handleUserNavigate(val.id)}
                  >
                    Details
                  </Button>
                  {/* <button className='forgetPassword'>learn More</button> */}
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
}
