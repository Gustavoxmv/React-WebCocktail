import React from "react";
import {
  Card,
  Container,
  Row,
  Col,
  List,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import '../assets/css/Table.css'
import soroushImage from "../assets/img/Cokctails/bar-498420_1920.jpg";
import federicoImage from "../assets/img/Cokctails/drink-3237895_1920.jpg";
import joshuaImage from "../assets/img/Cokctails/cocktail-594173_1920.jpg";

const items = [
  {
    src: soroushImage,
    altText: "Somewhere",
    caption: "Somewhere",
  },
  {
    src: federicoImage,
    altText: "Somewhere else",
    caption: "Somewhere else",
  },
  {
    src: joshuaImage,
    altText: "Here it is",
    caption: "Here it is",
  },
];
export const TableSection = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };


  return (
    <>

      <div className="section section-dark">
        <Container >
          <Row >
          <Col  md="5">
    <h2 className="title">Explora el Mundo de los Cocteles</h2>
    <p className="description text-sm-left text-md-left text-lg-left">
      Descubre una amplia variedad de cocteles y sus ingredientes. Ya sea que estés buscando nuevas recetas
      para probar o desees conocer los ingredientes de tus cocteles favoritos, nuestra aplicación tiene todo lo que necesitas.
    </p>
  </Col>
            <Col className="ml-auto mr-auto" md="7">
              <Card className="page-carousel">
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {items.map((item) => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={item.src}
                      >
                        <img src={item.src} alt={item.altText} />
                        <CarouselCaption
                          captionText={item.caption}
                          captionHeader=""
                        />
                      </CarouselItem>
                    );
                  })}
                  <a
                    className="left carousel-control carousel-control-prev"
                    data-slide="prev"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-left" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="right carousel-control carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-right" />
                    <span className="sr-only">Next</span>
                  </a>
                </Carousel>
              </Card>
            </Col>

          </Row>


          <Row>

            <Col>
              <List>

                 

              </List>

            </Col>

          </Row>


        </Container>

<hr />
      </div>
    </>
  )
}
