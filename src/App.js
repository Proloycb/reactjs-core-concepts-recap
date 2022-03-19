import { useEffect, useState } from 'react';
import './App.css';
import Todos from './components/Todos/Todos';

function App() {
  const titleStyle = {
    fontSize : '48px',
    textAlign : 'center',
    margin : '20px'
  }
  return (
    <div className="App">
      <Todos></Todos>
      <div>
        <article className='blog'>
          <h2 style={titleStyle}>Blog post</h2>
          <p style={{border: '2px solid green', background: 'lightGrey'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero cum animi atque. Aliquid laudantium, quis nostrum iure culpa earum nemo minima iusto, aperiam vel, molestias asperiores dolor! Vitae molestiae fugit alias atque iusto nihil quos sint doloribus est dicta sunt iure inventore perferendis accusamus aliquid quasi itaque optio, adipisci ex dolorem aspernatur aperiam repellat illo rem! Sapiente harum blanditiis et natus laboriosam reiciendis ex beatae inventore at. Voluptates consequuntur repellendus voluptatibus ullam! Asperiores velit, maxime nesciunt vel tenetur voluptas corporis repudiandae, odio minus ea doloribus ipsam nihil iure voluptatibus nam dignissimos eos impedit facere similique doloremque ab, nobis non eveniet.</p>
        </article>
      </div>
      <Blog heading="Tumi amar jiboner sera golpo" author="Durjoy"></Blog>
      <Blog heading="Tumi amar jiboner sera muhurtho" author="Joy"></Blog>
      <Blog heading="Tumi amar jiboner ekmatro asha" author="Dhoni"></Blog>
      <Mobile></Mobile>
     {/*  <LoadPosts></LoadPosts>
      <District name="Kishoreganj" specialty= "kishore"></District>
      <District name="B-Baria" specialty= "jograjati"></District>
      <District name="Cumilla" specialty= "moyna and moti"></District> */}
    </div>
  );
}

function Blog (props) {
  return (
    <div>
      <h2>Heading: {props.heading}</h2>
      <p>Author: {props.author}</p>
    </div>
  )
}

function Mobile () {
  const [perchantage, setPerchantage] = useState(100);
  const decrease = () => {
    let newPerchantage = perchantage - 10;
    if(perchantage <= 0){
      newPerchantage = perchantage ;
    }
    
    setPerchantage(newPerchantage);
  }
  return (
    <div>
      <h4>Perchantage: {perchantage}</h4>
      <button onClick={decrease}>Battery down</button>
    </div>
  )
}

/* const districtStyle = {
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
} */
export default App;
