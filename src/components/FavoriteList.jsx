import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import "./css/ProductList.css";

export default class FavoriteList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {
          this.props.favorites.map((product) => {
            console.log(product.image);
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
