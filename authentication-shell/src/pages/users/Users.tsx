import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../services/service";
import "./users.css";
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
      <Row className="g-4 container-fluid">
        {users &&
          users.map((val, i) => (
            <Col sm={12} md={4} key={i}>
              <Card className="customCard">
                <Card.Img
                  variant="top"
                  data-testid="card-img"
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
                  <button
                    className="forgetPassword"
                    data-testid="forgetpassword-btn"
                    onClick={() => handleUserNavigate(val.id)}
                  >
                    Details
                  </button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
}
