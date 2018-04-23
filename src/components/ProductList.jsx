import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import "./css/ProductList.css";

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {
          this.props.products.map((product) => {
            return <Card>
              <CardImg top width="100%" src={product.image} alt="Card image cap" />
              <CardBody>
                <CardTitle>{product.name}</CardTitle>
                <CardSubtitle>{product.price}</CardSubtitle>
                <CardText>{product.description}</CardText>
                <Button color="primary">Buy</Button>
              </CardBody>
            </Card>
          })
        }
      </div>
    );
  }
}
