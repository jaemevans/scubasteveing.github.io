import "./Homepage.css";
// import React from 'react';
import React from "react";
import TextLoop from "react-text-loop";
// import pic from '../../public/images/profpic.jpeg';
// import Link from "react-router";
// import { BodyText } from "./ui";
// import Navigation from './Shared/Navigation';

function Homepage() {
  return (

    <div className="homepagemain">
      <div className="greetings">
        <TextLoop
          children={[
            "hello ",
            "howdy ",
            "aloha ",
            "ciao ",
            "bonjour ",
            "hola ",
            "shalom ",
            "你好 ",
            "olá ",
            "أهلا ",
            "hallo ",
            "こんにちは ",
            "안녕하세요 ",
            "γεια ",
            "kamusta "
          ]}
          springConfig={{ stiffness: 180, damping: 8 }}
        />
       
      </div>
      <div className="spacer">
      <p> my name is jaelyn. </p>
      </div>
        

      <div className="picdiv">
        <img src="images/profpic1.png" alt="its me yall" className="img1" />
      </div>

      <div className="quote">
        <p>
          "destrcution leads to a very rough road but it also breeeds creation"-
          red hot chili peppers
          <br></br>
          with that being said, please bear with me as i develop this site to be
          more creative and less buggy its a marathon not a sprint.
        </p>
      </div>
    </div>
  );
}

export default Homepage;