import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import styles from "./styles.module.css"

const Pictures = () => {
  const Data = [
    {
      id: 0,
      title: "Lorem ipsum dolor sit amet 0",
      imgSrc: "/assets/AfterBanner/pic1.png",
    },
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet 1",
      imgSrc: "/assets/AfterBanner/pic2.png",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet 2",
      imgSrc: "/assets/AfterBanner/pic3.png",
    },
  ]
  return (
        <div >
       
          <Container>
          <Row className={styles.mainContainer}>
            {Data.map((item ,id)=>(
              <Col  key={id} className={styles.wrapper}>
              <Card className={styles.card} style={{ width: "18rem" }}>
                <Card.Img className={styles.cardd} variant="top" src={item.imgSrc} />
                <Card.Body>
                  <Card.Title className={styles.title}>{item.title}</Card.Title>
                </Card.Body>
              </Card>
                </Col>

            ))}
        </Row>
        </Container>
    
          </div>
        
  );
};


export default Pictures;


