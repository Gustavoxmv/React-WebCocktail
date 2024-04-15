import React, { useEffect, useState } from 'react';
import { Input, Form, FormGroup, Label, Card, CardBody, Container, Row, Col, CardImg, CardTitle, Button } from "reactstrap";
import { Link } from 'react-router-dom';


export const FetchCocktail = () => {
  const [cocktails, setcocktails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [letters, setLetters] = useState("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""));
  const [selectedCocktail, setSelectedCocktail] = useState(null); // Estado para el cóctel seleccionado

  useEffect(() => {
    const fetchCocktailsByLetter = async (letter) => {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
      const data = await response.json();
      setcocktails(data.drinks || []);
    };

    fetchCocktailsByLetter('A');
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleLetterChange = async (letter) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
    const data = await response.json();
    setcocktails(data.drinks || []);
  };

  const toggleIngredients = (cocktail) => {
    setSelectedCocktail(cocktail);
  };

  const filteredCocktails = cocktails.filter((cocktail) => {
    const nameMatch = cocktail.strDrink.toLowerCase().includes(searchTerm.toLowerCase());
    const typeMatch =
      selectedType === "All" ||
      (selectedType === "Alcoholic" && cocktail.strAlcoholic.toLowerCase() === "alcoholic") ||
      (selectedType === "Non_Alcoholic" && cocktail.strAlcoholic.toLowerCase() === "non alcoholic");
    return nameMatch && typeMatch;
  });

  return (
    <>
      <div className='section section-dark'>
        <Container>
          <Row>
            <Col md='5'>
              <Form>
                <FormGroup>
                  <Label for="search">Buscar cóctel:</Label>
                  <Input type="text" name="search" id="search" placeholder="Escribe el nombre" onChange={handleSearch} />
                </FormGroup>
              </Form>
            </Col>
            <Col md='3'>
              <Form>
                <FormGroup>
                  <Label for="type">Filtrar por tipo:</Label>
                  <Input type="select" name="type" id="type" onChange={handleTypeChange}>
                    <option value="All">Todos</option>
                    <option value="Alcoholic">Alcohólico</option>
                    <option value="Non_Alcoholic">No alcohólico</option>
                  </Input>
                </FormGroup>
              </Form>
            </Col>
            <Col md='2'>
              <Form>
                <FormGroup>
                  <Label for="letter">Filtrar por letra:</Label>
                  <Input type="select" name="letter" id="letter" onChange={(e) => handleLetterChange(e.target.value)}>
                    <option value="">Todas</option>
                    {letters.map((letter, index) => (
                      <option key={index} value={letter}>
                        {letter}
                      </option>
                    ))}
                  </Input>
                </FormGroup>
              </Form>
            </Col>
          </Row>

          <Row>
            {filteredCocktails.map((cocktail) => (
              <Col md='3' key={cocktail.idDrink}>
                <Card style={{ marginBottom: '20px', width: '100%' }}>
                  <CardImg
                    width="100%"
                    src={cocktail.strDrinkThumb}
                    alt={cocktail.strDrink}
                  />
                  <CardBody>
                    <CardTitle><h5>{cocktail.strDrink}</h5></CardTitle>
                    <Button color="primary" onClick={() => toggleIngredients(cocktail)}>Ver Ingredientes</Button>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Mostrar el componente CocktailInfo si se ha seleccionado un cóctel */}
          {selectedCocktail && (
            <CocktailInfo cocktail={selectedCocktail} />
          )}

        </Container>
      </div>
    </>
  );
};

