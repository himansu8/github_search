import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom"
function Users(props) {
    //console.log(props.users)
    return (
<div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            // backgroundColor: '#ffcccc', 
            padding: '20px', 
        }}>
            {props.users.map((ele, index) => {
                return (
                    <Card style={{ 
                        width: '18rem', 
                        margin: '10px', 
                        textAlign: 'center', 
                        backgroundColor: '#f7f7f7',
                        color: '#333',
                        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center', 
                    }} key={index}> 
                        <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}> {/* Flex container for image */}
                            <Card.Img 
                                variant="top" 
                                src={ele.avatar_url} 
                                style={{ 
                                    width: '100px', 
                                    height: '100px', 
                                    borderRadius: '50%', 
                                    border: '5px solid #ff9a9e', // Added border style
                                }} 
                            /> 
                        </div>
                        <Card.Body>
                            <Card.Title style={{ margin: '0' }}>{ele.login}</Card.Title> 
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item style={{ textAlign: 'center', marginTop: '10px' }}> 
                                    <Link to={`/user/${ele.login}`} style={{ 
                                        display: 'inline-block', 
                                        padding: '5px 10px', 
                                        backgroundColor: '#ff9a9e',
                                        color: '#fff', 
                                        borderRadius: '5px', 
                                        textDecoration: 'none', 
                                    }}>
                                        Profile
                                    </Link>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                );
            })}
        </div>
    )
}

export default Users