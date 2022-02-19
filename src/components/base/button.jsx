import styles from "./button.module.scss";
import React from "react";
//# styled-components 
// import styled from "styled-components";

//# styled-components 
// const Button = styled.button`
//   color: white;
//   width: 100%;
//   min-width:150px;
//   height: 35px;
//   margin: 5px;
//   background-color: blue;
//   border-radius: 15px;
//   transition: 0.1s;
//   transform: scale(0.9);
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   -webkit-touch-callout: none; /* iOS Safari */
//   -webkit-user-select: none; /* Safari */
//   -khtml-user-select: none; /* Konqueror HTML */
//   -moz-user-select: none; /* Old versions of Firefox */
//   -ms-user-select: none; /* Internet Explorer/Edge */
//   user-select: none; /* Non-prefixed version, currently
//   supported by Chrome, Edge, Opera and Firefox */

//   &:hover {
//     transform: scale(0.99);
//     cursor: pointer;
//   }
//   &:active {
//     background-color: rgb(0, 255, 115);
//     transform: skewX(5deg);
//     span {
//       font-size: 1.2em;
//     }
//   }
//   span {
//     color: white;
//   }

//   @media (min-width: 768px) {
//     width: auto;
//   }
// `;.
//# styled-components 
///////////////////////////////
const Button = ({ label, onClick ,children}) => {
  return (
    <>
      <div className={styles.buttonBox} onClick={onClick}>
        <span>{children}</span>
      </div>
    </>
  );
};

export default Button;
