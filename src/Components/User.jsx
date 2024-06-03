
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
function User() {

  const { username } = useParams();
  console.log(username)

  const [profile, setProfile] = useState({})
  const [repos, setRepos] = useState([])

  useEffect(() => {
    findUserProfile(username);
    userRepos(username)
  }, [])


  function findUserProfile(user) {
    const url = `https://api.github.com/users/${user}`
    axios.get(url)
      .then((res) => {
        console.log(res.data)
        setProfile(res.data)
      })
      .catch((err) => { console.log(err) })
  }

  function userRepos(user){
    const url=`https://api.github.com/users/${user}/repos`
    axios.get(url)
      .then((res) => {
        console.log(res.data)
        setRepos(res.data)
      })
      .catch((err) => { console.log(err) })
  }

  useEffect(() => {
    findUserProfile(username);
    userRepos(username)
  }, [])
  
  return (
    <div style={{ backgroundColor: "#ffcccc", padding: 0, margin: "-25px 0 0 0", minHeight: "100vh" }}>
    <div className="container mt-4" >
      <div className="row">
        <div className="col-md-4">
          <div className="card" style={{ marginTop: "20px" }}>
            <img
              className="card-img-top"
              src={profile.avatar_url}
              alt="User Avatar"
            />
            <div className="card-body">
              <h5 className="card-title" style={{ color: "#333", fontSize: "24px", fontWeight: "bold" }}>{profile.name}</h5>
              <p className="card-text" style={{ color: "#555", fontSize: "18px" }}>Login: {username}</p>
              <p className="card-text" style={{ color: "#555", fontSize: "18px" }}>Followers: {profile.followers}</p>
              <p className="card-text" style={{ color: "#555", fontSize: "18px" }}>Following: {profile.following}</p>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <h4 style={{ color: "#333",marginTop: "20px", marginBottom: "20px" }}>Repositories:</h4>
          <ul className="list-group">
            {repos.map((repo) => (
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
                key={repo.id}
                style={{ backgroundColor: "#ffcccc", color: "#333", fontSize: "16px", fontWeight: "bold" }}
              >
                <div>{repo.name}</div>
                <a
                  href={repo.html_url}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);
}
export default User