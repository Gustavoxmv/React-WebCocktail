import React from 'react'
// nodejs library that concatenates strings
import classnames from "classnames";
import '../assets/css/Table.css'
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Col,
} from "reactstrap";


export const NavbarCocktail = () => {

    const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
    const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  
    const toggleNavbarCollapse = () => {
      setNavbarCollapse(!navbarCollapse);
      document.documentElement.classList.toggle("nav-open");
    };
  
    React.useEffect(() => {
      const updateNavbarColor = () => {
        if (
          document.documentElement.scrollTop > 299 ||
          document.body.scrollTop > 299
        ) {
          setNavbarColor("");
        } else if (
          document.documentElement.scrollTop < 300 ||
          document.body.scrollTop < 300
        ) {
          setNavbarColor("navbar-transparent");
        }
      };
  
      window.addEventListener("scroll", updateNavbarColor);
  
      return function cleanup() {
        window.removeEventListener("scroll", updateNavbarColor);
      };
    });


  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
    <Container>
      <div className="navbar-translate">
        <NavbarBrand
          data-placement="bottom"
          href="./index"
          target="_blank"
          title="Gustavo"
         
        >
        
        </NavbarBrand>
        <button
          aria-expanded={navbarCollapse}
          className={classnames("navbar-toggler navbar-toggler", {
            toggled: navbarCollapse,
          })}
          onClick={toggleNavbarCollapse}
        >
          <span className="navbar-toggler-bar bar1" />
          <span className="navbar-toggler-bar bar2" />
          <span className="navbar-toggler-bar bar3" />
        </button>
      </div>
      <Collapse
        className="justify-content-center"
        navbar
        isOpen={navbarCollapse}
      >
        <Nav navbar  >
        
          <NavItem>
            <NavLink 
              href=""
              target="_blank"
              className='active'
            >
            Cockteles
            </NavLink>
          </NavItem>
          <NavItem>
          <NavLink
              href=""
              target="_blank"
              className='active'
            >
              Gastronomia
            </NavLink>
          </NavItem>




          
        </Nav>
      </Collapse>

      
    </Container>
  </Navbar>
  )
}
