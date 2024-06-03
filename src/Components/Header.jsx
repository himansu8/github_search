import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Alert from './Alert';
import { useNavigate } from 'react-router-dom';
function Header(props) {
    const [username, setUsername] = useState("")
const navigate = useNavigate()

  function onChangeHandler(e) {
    console.log(e.target.value);
    const inputValue = e.target.value;
    setUsername(inputValue)
    //props.searchUsers(inputValue);
  }
  function onClickHandler(e) {
    e.preventDefault();
    props.searchUsers(username);
    //setUsername('');
  
    if (username.trim().length === 0){
      setUsername('')
    }
    navigate('/')
  }
  function onClearHandler(e) {
    e.preventDefault();
    props.clearUsers();
    setUsername('')
    props.fetchUsers()
  }
    return (
        // <div style={{backgroundColor: "#f0f6ff", minHeight: "100vh"}}>
        <div style={{ margin: 0 }}> {/* Applying inline CSS to set margin to 0 */}
        <Navbar expand="lg" style={{ backgroundImage: "linear-gradient(to right, #ff9a9e, #fecfef)" }}>
            <Container>
                <Link to="/" style={{ textDecoration: "none" }}><Navbar.Brand className="me-4">Github Search</Navbar.Brand></Link>
                <Form className="d-flex align-items-center">
                    <Form.Control type="text" placeholder="Enter Name" className="me-2" onChange={onChangeHandler} value={username} style={{ height: '38px' }} />
                    <Button variant="primary" type="submit" onClick={onClickHandler} style={{ height: '38px' }}>
                        Submit
                    </Button>
                    <Button variant="secondary" className="ms-2" onClick={onClearHandler} style={{ height: '38px' }}>
                        Cancel
                    </Button>
                </Form>
            </Container>
        </Navbar>
        <center> <Alert alert={props.alert} /></center>
    </div>
    )
}

export default Header