import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { Context } from '../Context'
import Rating from './Rating'

interface Cards {
    id?: string;
    image?: string;
    title?: string;
    rating?: number;
    isFavorite?: boolean
    item: any;
}

const Cards = ({ item }: Cards) => {
    const { addToFavorite }: any = useContext(Context)
  return (
    <div className="container d-flex justify-content-center">
      <CardDeck>
        <Card>
          <a
            href={`https://youtube.com/vi/${item.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card.Img variant="top" src={item.image} />
          </a>
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            {/* <Rating ratings={item.rating}/> */}
          </Card.Body>
          <Card.Footer>
            <Button
              variant="outline-primary"
              onClick={() => addToFavorite(item)}
            >
              Add
            </Button>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
};

export default Cards;
