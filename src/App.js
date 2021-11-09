import React from 'react';
import image from "../src/Electrifiers.png"
import Image from './features/components/Image';
import Controls from './features/components/Controls';
import {useRef, useState, useEffect} from "react"
import "../src/main.css"
import checkImage from './features/components/checkImage';
import classnames from "classnames";
function App() {
  
  const handleSubmit =   (e)=>{
    e.preventDefault();
    let userUrl = inputRef.current.value;
     let validImage =  checkImage(userUrl);
    if( validImage){
    setUrl(userUrl);
    }
    else{
      inputRef.current.value = "";
      setIsValid(false);
    }
    
  }
    const [url,setUrl] = useState(image);
    const imageRef1 = useRef(null);
    const imageRef2 = useRef(null);
    const imageRef3 = useRef(null);
    const imageRef4 = useRef(null);
    const refArray = [imageRef1, imageRef2, imageRef3 , imageRef4]
    const inputRef = useRef(null);
    const [isValid, setIsValid] = useState(true);
  const render = Array.from(Array(4).keys()).map((x, index) => {
    return (
      <article key={index} className="row">
        <Image
          props={{ src: url, alt: "An image", imageRef: refArray[index] }}
        ></Image>
        <Controls imageRef={refArray[index]}></Controls>
      </article>
    );
  });
  
  useEffect(() => {
    if(!isValid){
      let timeOut = setTimeout(()=>{
      setIsValid(true);
      },2000)
      return ()=>{
        clearTimeout(timeOut)
      }  
    }
  }, [isValid]); 
  const inputClassname = classnames(
    {"form-input" : isValid},
    { "alert": !isValid },
    { "alert-danger": !isValid }
  );

  return (
    <section>
      <h1>Image Flipper</h1>
      <form className="form">
        <h4>Supply an image url</h4>
        <div className="form-row">
          {!isValid && <h5>Set Valid URL</h5>}
          <label className = "form-label" htmlFor="url">Enter URL</label>
          <input
            className={inputClassname} 
            name="url"
            type="text"
            ref={inputRef}
          />
        </div>
        <div className="form-row  flex-center">
          <button
            type="submit"
            className="btn btn-submit "
            onClick={handleSubmit}
          >
            Set Picture
          </button>
        </div>
      </form>
      <div className="grid">{render}</div>
    </section>
  );
}

export default App;
