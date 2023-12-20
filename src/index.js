import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css';
import App from './components/App';
import Data from './components/motivData'
import reportWebVitals from './reportWebVitals';

const display = document.getElementById('root');

function Main(){
  const [content, setContent] = React.useState(Data)


  const [backgroundColor, setBackgroundColor] = React.useState('white')

  function handleChangeColor(){
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
    setBackgroundColor(randomColor)
  }

  function getContent(){
    const contentArray = content.content
    const randomNumber = Math.floor(Math.random() * contentArray.length);
    const number = contentArray[randomNumber]

    setContent( prevContent => ({
      ...prevContent, 
      Content: number
    }))
  }


  return(
    <App 
    motiv = {content.content} 
    handleClick={handleChangeColor}/>
  )
}

ReactDOM.render( <Main />, display)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
