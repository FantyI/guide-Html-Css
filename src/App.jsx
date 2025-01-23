import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState('#bf98e4');
  const [backgroundColor, setBackgroundColor] = useState('#16a034')

  const changeColor = (value) => {
    setColor(value)
  }

  const changeBackgroundColor = (value) => {
    setBackgroundColor(value)
  }

  return (
    <>
      <div className="html">
        <div className="heading">HTML</div>
        <div className="wrap">
          <p className="description">
            Параграф. Используется для текстового контента
          </p>
          <input className="code" name="" id="" value={"<p></p>"} readOnly></input>
          <p className="example">Пример</p>
        </div>

        <div className="wrap">
          <p className="description">Контейнер для группировки:</p>
          <input
            className="code"
            name=""
            id=""
            value={"<div></div>"}
            readOnly
          ></input>
          <div className="example">Пример</div>
        </div>

        <div className="wrap">
          <p className="description">Изображение </p>
          <input
            className="code"
            name=""
            id=""
            value={
              '<img src="путь к изображению" alt="альтернативный текст, если изображение не загрузилось"/>'
            }
            readOnly
          ></input>
          <img className="example" src="public/example.png" alt="Пример" />
        </div>
        <div className="wrap">
          <p className="description">Ссылка</p>
          <input
            className="code"
            name=""
            id=""
            value={'<a href="адрес, на который ведет ссылка"></a>'}
            readOnly
          ></input>
          <a href="" className="example">
            Пример
          </a>
        </div>
        <div className="wrap">
          <p className="description">Главный заголовок</p>
          <input
            className="code"
            name=""
            id=""
            value={"<h1></h1>"}
            readOnly
          ></input>
          <h1 className="example">Пример</h1>
        </div>
        <div className="wrap">
          <p className="description">Нумерованный список</p>
          <input
            className="code"
            name=""
            id=""
            value={`<ol> <li></li> </ol>`}
            readOnly
          ></input>
          <ol className="example">
            <li>Пример</li>
            <li>Пример</li>
          </ol>
        </div>

        <div className="wrap">
          <p className="description">Ненумерованный список</p>
          <input
            className="code"
            name=""
            id=""
            value={`<ul> <li></li> </ul>`}
            readOnly
          ></input>
          <ul className="example">
            <li>Пример</li>
            <li>Пример</li>
          </ul>
        </div>
      </div>
      <div className="heading">CSS</div>
      <div className="css">
        <div className="style">
          <div className="name">color</div>
          <div style={{color:color}} className="example color">color: {color}</div>
          <input value={color} type="color" className="inp" onChange={e => changeColor(e.target.value)}/>
        </div>
        <div className="style">
          <div className="name">background-color</div>
          <div className="example background-color" style={{backgroundColor: backgroundColor}}>
            background-color: rgb(22, 160, 52)
          </div>
          <input value={backgroundColor} type="color" className="inp" onChange={e => changeBackgroundColor(e.target.value)}/>
        </div>
        <div className="style">
          <div className="name">font-size</div>
          <div className="example font-size">font-size: 24px</div>
        </div>
        <div className="style">
          <div className="name">font-weight</div>
          <div className="example font-weight">font-weight: 900</div>
        </div>
        <div className="style">
          <div className="name">font-family</div>
          <div className="example font-family">font-family: 'Courier New'</div>
        </div>
        <div className="style">
          <div className="name">
            <div>display</div>
            <div>display</div>
            <div>display</div>
          </div>
          <div className="example display-flex">
            <div>display: flex </div>
            <div>display: flex </div>
            <div>display: flex </div>
          </div>
        </div>
        <div className="style">
          <div className="name">
            <div>align-items</div>
            <div>align-items</div>
            <div>align-items</div>
          </div>
          <div className="example align-items">
            <div>align-items: center </div>
            <div>align-items: center </div>
            <div>align-items: center </div>
          </div>
        </div>
        <div className="style">
          <div className="name">
            <div>justify-content</div>
            <div>justify-content</div>
            <div>justify-content</div>
          </div>
          <div className="example justify-content">
            <div>justify-content: space-between </div>
            <div>justify-content: space-between </div>
            <div>justify-content: space-between </div>
          </div>
        </div>
        <div className="style">
          <div className="name">text-align</div>
          <div className="example text-align">text-align: right</div>
        </div>
        <div className="style">
          <div className="name">
            <div>display</div>
            <div>display</div>
            <div>display</div>
          </div>
          <div className="example display-grid">
            <div>display: grid</div>
            <div>display: grid</div>
            <div>display: grid</div>
          </div>
        </div>
        <div className="style">
          <div className="name">
            <div>grid-template-columns</div>
            <div>grid-template-columns</div>
            <div>grid-template-columns</div>
          </div>
          <div className="example grid-template-columns">
            <div>grid-template-columns: repeat(3, 100px)</div>
            <div>grid-template-columns: repeat(3, 100px)</div>
            <div>grid-template-columns: repeat(3, 100px)</div>
          </div>
        </div>
        <div className="style">
          <div className="name">
            <div>grid-template-rows</div>
            <div>grid-template-rows</div>
            <div>grid-template-rows</div>
          </div>
          <div className="example grid-template-rows">
            <div>grid-template-rows: repeat(3, 50px)</div>
            <div>grid-template-rows: repeat(3, 50px)</div>
            <div>grid-template-rows: repeat(3, 50px)</div>
          </div>
        </div>
        <div className="style">
          <div className="name">margin</div>
          <div className="example margin">margin: 20px</div>
        </div>
        <div className="style">
          <div className="name">padding</div>
          <div className="example padding">padding: 20px</div>
        </div>
        <div className="style">
          <div className="name">border</div>
          <div className="example border">border: 3px solid black</div>
        </div>
        <div className="style">
          <div className="name">border-radius</div>
          <div className="example border-radius">border-radius: 10px</div>
        </div>
        <div className="style">
          <div className="name">width</div>
          <div className="example width">width: 300px</div>
        </div>
        <div className="style">
          <div className="name">height</div>
          <div className="example height">height: 100px</div>
        </div>
        <div className="style">
          <div className="name transition">transition</div>
          <div className="example transition transition-active">
            transition: all .3s ease-in-out
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
