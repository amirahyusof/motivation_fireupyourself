import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css';
import App from './components/App';
import Data from './components/motivData'
import reportWebVitals from './reportWebVitals';

const display = document.getElementById('root');

function Main(){
  const [motivation, setMotivation] = React.useState({
    content :"Be the change that you wish to see in the world.",
    color :"#778899"
  })

  const [allMotivation, setAllMotivation] = React.useState(Data)


  function getContent(){
    const motivationArray = allMotivation
    const randomNumber = Math.floor(Math.random() * motivationArray.length);
    const number = motivationArray[randomNumber].content
    const backgroundColor = motivationArray[randomNumber].color

    setMotivation( prevMotivation => ({
      ...prevMotivation, 
      content: number,
      color: backgroundColor
    }))
  }


  return(
    <App 
    currentMotivation = {motivation.content}
    curentColor = {motivation.color}
    handleClick={getContent} />
  )
}

ReactDOM.render( <Main />, display)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
