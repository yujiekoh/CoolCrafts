import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useStateValue } from "./StateProvider";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";


const ItemDetails = () => {
  // const [carousel, setCarousel] = useState(
  //   "https://i.etsystatic.com/28359924/r/il/57444a/2969898698/il_570xN.2969898698_ayvm.jpg"
  // );

  const [carousel, setCarousel] = useState([]);

  const [details, setDetails] = useState({
    images: [],
    shopName: "",
    listing: {}
  });

  console.log(details.listing.title);

  const { id } = useParams();
  console.log(id);

  const allCarousels = [];
  for (let i = 0; i < details.images.length; i++) {
    allCarousels.push(
      <Carousel.Item>
        <img
          className="carousel-img"
          src={details.images[i]["url_570xN"]}
          alt="image failed to load"
        />
      </Carousel.Item>
    );
  }

  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const imagesURL = `https://openapi.etsy.com/v2/listings/${id}/images?api_key=${API_KEY}`;
    const shopURL = `https://openapi.etsy.com/v2/shops/listing/${id}?api_key=${API_KEY}`;
    const listingURL = `https://openapi.etsy.com/v2/listings/${id}?api_key=${API_KEY}`;
    Promise.all([
      axios.get(imagesURL),
      axios.get(shopURL),
      axios.get(listingURL),
    ]).then((res) => {
      console.log(res[0].data.results);
      console.log(res[1].data.results[0].shop_name);
      console.log(res[2].data.results[0]);
      setDetails({
        images: res[0].data.results,
        shopName: res[1].data.results[0].shop_name,
        listing: res[2].data.results[0]
      });
    });

    // axios.get(imagesURL).then((res) => {
    //   console.log("ItemDetails.js axios call made");
    //   console.log(res.data.results);
    //   setDetails({
    //     images: res.data.results,
    //   });
    // });
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <Carousel>{allCarousels}</Carousel>
        </Col>
        <Col>
          <Card className="item-details-card">
            <Card.Body className="item-details-card-body">
              <Card.Subtitle>{details.shopName}</Card.Subtitle>
              <br />
              <Card.Title>{details.listing.title}</Card.Title>
              <br />
              <Card.Subtitle>
                {details.listing.num_favorers} people have this in their favourites list.
              </Card.Subtitle>
              <br />
              <Card.Title>${details.listing.price}</Card.Title>
              <br />
              <Form>
                <Form.Group controlId="exampleForm.SelectCustom">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control as="select" custom>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </Form.Control>
                </Form.Group>
              </Form>
              <Button>Add to Basket</Button>
              <br />
              <br />
              <Card.Subtitle>
                <strong>Other people want this. </strong>Only{" "}
                <u>{details.listing.quantity}</u> left.
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    //   <div className="item-details">
    //     <Carousel>
    //         {allCarousels}
    //     </Carousel>

    //   </div>
  );
};

export default ItemDetails;
