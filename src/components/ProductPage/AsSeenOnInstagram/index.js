import React from "react";
import { Container, Row , Col} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import TitleComponent from "../../TitleComponent";
import styles from "./styles.module.css"

const Data=[{
  id:0,
  imgSrc:"/assets/AsSeenOnInsta/insta1.png"
},
{
  id:1,
  imgSrc:"/assets/AsSeenOnInsta/insta2.png"
},
{
  id:2,
  imgSrc:"/assets/AsSeenOnInsta/insta3.png"
},
{
  id:3,
  imgSrc:"/assets/AsSeenOnInsta/insta4.png"
}]

const AsSeenOnInstagram = () => {
  return (
    <div>
      <TitleComponent title="As Seen On Instagram" />
      <Container className={styles.mainContainer}>
          <Row  className={styles.row}>
            {Data.map((item , id)=>(
              <Col xl="3" lg="3" md="6" sm="6" key={id} >
              <Card className={styles.card} style={{ width: "16rem" }}>
                <div className={styles.wrapper}>
                <Card.Img  variant="top" src={item.imgSrc} />
                </div>
              </Card>
                </Col>

            ))}
        </Row>
        </Container>
    
      {/* <Container>
        <Row>
          {Data.map((item)=>(
             <Col>
             <img src="/assets/AsSeenOnInsta/insta1.png" alt="" />
             </Col>

          ))}
         
        </Row>
      </Container> */}
     

      {/* <Col xl="3" lg="4" md="4" sm="5" key={id}>
      <Card className={styles.productCard}>
        <div className={styles.imageDiv}>
          {" "}
          <Card.Img variant="top" src={image} className={styles.cardImage} />
        </div>
        <Card.Body>
          <Card.Title className={styles.cardTitle}>{title}</Card.Title>
          <Card.Text>{price}</Card.Text>
        </Card.Body>
        <div className={styles.QuickButton}>
          <SharedButton buttonLabel={"Quick View"} onCLickButton={()=>onClickQuickView(id)}/>
        </div>
      </Card>
    </Col> */}
    </div>
  );
};

export default AsSeenOnInstagram;
