import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import styles from "./styles.module.css";
import Card from "react-bootstrap/Card";
import SharedButton from "../../SharedButton";
import CardDes from "./CardDes";
import ProductModal from "../../ProductModal";
// { id, title, image, price }

const ProductCard = (item1) => {
  const { id, title, image, price }=item1
  const[cart,setCart]=useState([])
  const [openModal, setOpenModal] = useState(false);
  const onClickQuickView = (id) => {
    setOpenModal(!openModal);
  };
  const handleClick=(item1)=>{
    setCart([...cart,item1])
    console.log(cart);
  }

  return (
    <>
      {openModal && <ProductModal productID={id}  handleClick={handleClick} item={item1}/>}
      <Col xl="3" lg="4" md="4" sm="5" key={id}>
        <Card className={styles.productCard}>
          <div className={styles.imageDiv}>
            <Card.Img variant="top" src={image} className={styles.cardImage} />
          </div>
          <CardDes title={title} price={price} />

          <div className={styles.QuickButton}>
            <SharedButton
              buttonLabel={"Quick View"}
              onCLickButton={() => onClickQuickView(id)}
            />
          </div>
        </Card>
      </Col>
    </>
  );
};

export default ProductCard;