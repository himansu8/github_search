import { useState } from "react"
import Alert from "./Alert";

function Search(props) {
  //console.log(props.searchUsers);
  const [username, setUsername] = useState("")


  function onChangeHandler(e) {
    //console.log(e.target.value);
    setUsername(e.target.value)

  }
  function onClickHandler(e) {
    e.preventDefault();
  
    props.searchUsers(username);
    if (username.trim().length === 0){
      setUsername('')
    }
  }
  function onClearHandler(e) {
    e.preventDefault();
    props.clearUsers();
    setUsername('')
  }


  return (

    <>
      <center>
        <Alert alert={props.alert} />
        <form>
          <input type="text" placeholder="Enter User Name" onChange={onChangeHandler} value={username} /><br />
          <button onClick={onClickHandler}>Search</button>
          <button onClick={onClearHandler}>Clear</button>

        </form>

      </center>
    </>

  )
}

export default Search