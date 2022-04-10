
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Error from './components/Error';
import Home from './components/Home';
import UsersList from './components/UsersList';
import { Description } from './Description';
import DescriptionPage from './DescriptionPage';


function App() {
  
  return (
    <div className="App">
      
      <Navbar  bg="dark" expand="lg" >
      <Container>
        <Navbar.Brand style={{ marginRight:"200px", color:" goldenrod", fontSize:"18px", fontWeight:"bolder", fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}} href="#home"> Achraf Sallem Logo </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/"  className="Home"> Home </Link>
            <Link to="/user" className="Users"> Users </Link>
            </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
            
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/user' element={<UsersList/>}/>
              <Route path='/UserList/:name' element={<DescriptionPage Description={Description} />} />
              <Route path='*' element={<Error/>}/>
              </Routes>
              </div>
              );
            }

export default App;
