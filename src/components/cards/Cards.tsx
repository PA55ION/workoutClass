import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { Context } from "../../Context";
import Rating from "../Rating";
import Badge from "react-bootstrap/Badge";
import { FaCheckCircle } from 'react-icons/fa'
import './Cards.css'

interface Cards {
  id?: string;
  image?: string;
  title?: string;
  rating?: number;
  isFavorite?: boolean;
  item: any;
}

const Cards = ({ item }: Cards) => {
  const { addToFavorite, addVideo }: any = useContext(Context);

  const isAlreadyAdded = (item: { id: any }) => {
    return addVideo.find((video: any) => video.id === item.id);
  };

  return (
    <>
      {isAlreadyAdded(item) && (
        <div className="container overlay d-flex justify-content-center">
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
              </Card.Body>
              <Card.Footer>
              {/* <span className="tag is-primary is-light">Added</span> */}
              <FaCheckCircle className='check-icon'/>
                <Badge >Added</Badge>
              </Card.Footer>
            </Card>
          </CardDeck>
        </div>
      )}

      {!isAlreadyAdded(item) && (
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
                <Card.Title className='title'>{item.title}</Card.Title>
              </Card.Body>
              <Card.Footer>
                <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={() => addToFavorite(item)}
                >
                  Add
                </Button>
              </Card.Footer>
            </Card>
          </CardDeck>
        </div>
      )}
    </>
  );
};

export default Cards;
