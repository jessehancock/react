import React from 'react';

const Headline = () => {
  return(
    <h1 className='thing'>hello world </h1>
  )
}

const Greetings = (props) => {
  const {name, age} = props;
  return(
    // you can either do props.name or just age if you desructure props(see line 10)
    <p>this is the {props.name} {age}</p>
  )
}

const App = () => {
  return(
    <div>
      <Headline />
      <Greetings name="jesse" age={23}/>
    </div>

  )
}






export default App;
