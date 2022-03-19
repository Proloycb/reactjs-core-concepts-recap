import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>
      <District name="Kishoreganj" specialty= "kishore"></District>
      <District name="B-Baria" specialty= "jograjati"></District>
      <District name="Cumilla" specialty= "moyna and moti"></District>
    </div>
  );
}

const districtStyle = {
  backgroundColor: 'lightgrey',
  padding: '20px',
  margin: '15px'

}
function District(props) {
  const[power, setPower] = useState(1);
  const boostPower= () => setPower(power * 2);
  return (
    <div style={districtStyle}>
      <h2>Name:{props.name}</h2>
      <p>Specialty:{props.specialty}</p>
      <h4>Power: {power}</h4>
      <button onClick={boostPower}>Power of boost</button>
    </div>
  );
}

function LoadPosts() {
  const [posts, setPosts] = useState([]);
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);
  return (
    <div>
      <h1>Posts: {posts.length}</h1>
      {
        posts.map( post => <Post 
          title= {post.title} 
          body= {post.body}
          key = {post.id}></Post>)
      }
    </div>
  );
}

function Post (props) {
  return (
    <div>
      <h4>Title: {props.title}</h4>
      <p><strong>Body:</strong>{props.body}</p>
    </div>
  )
}
export default App;
