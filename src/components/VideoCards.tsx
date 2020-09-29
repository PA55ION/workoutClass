import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import { Context } from '../Context'
import Rating from './Rating'

interface VideoCard {
    id?: string;
    image?: string;
    title?: string;
    rating?: number;
    isFavorite?: boolean
    item: any;
}

const VideoCards = ({ item }: VideoCard) => {
    const { removeFromFavorite }: any = useContext(Context)
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
            <Rating ratings={item.rating}/>
          </Card.Body>
          <Card.Footer>
            <Button
              variant="outline-danger"
              onClick={() => removeFromFavorite(item.id)}
            >
              Remove
            </Button>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
};

export default VideoCards;
