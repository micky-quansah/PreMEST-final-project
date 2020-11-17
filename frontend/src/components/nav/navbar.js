import React, { useState } from 'react';
import './navbar.css';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Collapse
} from "shards-react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../lander/landingPage';
import Register from '../form/registerUser'
import LogForm from '../form/logIn_form';
import SchoolList from '../schools/schoolsList';
// import School from '../schools/school';
import Footer from '../footer/footer';

function Navigationbar() {

  const [ dropdownOpen, toggleDropdown  ] = useState(false);
  const [ collapseOpen, toggleNavbar ] = useState(false);
  const [ activeHomeLink, setActiveHomeLink ] = useState('active');
  const [ activeSchoolsLink, setActiveSchoolsLink ] = useState('active');
  const [query, setQuery] = useState('');
  
  const [ isRegistered, setRegistered ] = useState(true);

  const handler = () => {
    setRegistered(true)
  }

  const handleSearchQuery = (e) => {
    setQuery(e.target.value);
    console.log(query);
  }
  

  const handleActiveHomeLink = (e) => {
    e.preventDefault();
      setActiveHomeLink('disabled');
      setActiveSchoolsLink('active');
      console.log('home '+activeHomeLink);
  }

  const handleActiveSchoolLink = (e) => {
    e.preventDefault();
      console.log(activeSchoolsLink);
      setActiveSchoolsLink('disabled');
      setActiveHomeLink('active');
  }

  return(
    
  <Router>
    <Navbar type="dark" theme="secondary" expand="md">
        <NavbarBrand href="#">Virtual School</NavbarBrand>
        <NavbarToggler onClick={() => toggleNavbar(!collapseOpen)} />

        <Collapse open={collapseOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink /* className={activeHomeLink} */ onClick={handleActiveHomeLink}>
                <Link to="/home">Home</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink /* className={activeSchoolsLink} */ onClick={handleActiveSchoolLink}>
                <Link to="/schools">School</Link>
              </NavLink>
            </NavItem>
            <Dropdown open={dropdownOpen}
              toggle={() => toggleDropdown(!dropdownOpen)}>
              <DropdownToggle nav caret>
                Account
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem><Link to="/Register">Register</Link></DropdownItem>
                <DropdownItem><Link to="/login">Log In</Link></DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Nav>

          <Nav navbar className="ml-auto">
            <InputGroup size="sm" seamless>
              <InputGroupAddon type="prepend">
                <InputGroupText>
                  <FontAwesomeIcon icon={faSearch} />
                </InputGroupText>
              </InputGroupAddon>
              <FormInput className="border-0" placeholder="Search for your school" onChange={handleSearchQuery} />
            </InputGroup>
          </Nav>
        </Collapse>
      </Navbar>

    <Switch>
      <Route path="/register">
        <Register handler={handler}/>
      </Route>
      <Route path="/login">
        <LogForm/>
      </Route>
      <Route path="/schools">
        <SchoolList searchQuery={query} />
      </Route>
      <Route exact path="/home">
        <Home handler={handler} isLoggedIn={isRegistered} />
      </Route>
    </Switch>
    <Footer/>
  </Router>
  );
}

export default Navigationbar;