//import Search from "./Search"
import Users from "./Users"

function Home(props) {
  return (
   <div style={{backgroundColor: "#ffcccc", minHeight: "100vh"}}>
   <Users  users={props.users}/>
   </div>
  )
}

export default Home