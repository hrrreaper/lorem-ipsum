import React, { useState } from 'react';
import data from './data';


const App = ()=> {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    console.log(data.length)
    setText(data.sort(() => Math.random() - 0.5).slice(0, amount));
  }

  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <h4>generate some fun text for your next project!</h4>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>
          paragraphs:
        </label>
        <input type='number' min="0" max="20"  name='amount' id='amount' value={count} onChange={(e) => setCount(e.target.value)} />
        <button type='submit' className='btn'>generate</button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>
        })} 
        
      </article>
    </section>
    )
}

export default App;
