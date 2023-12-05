import styled from "styled-components";
const Circles = styled.div`
  position: absolute;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  z-index: -1;
  animation-name: anil;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: linear;

  @keyframes anil {
    0% {
      scale: 0%;
    }
    10% {
      scale: 20%;
    }
    20% {
      scale: 40%;
    }
    30% {
      scale: 60%;
    }
    40% {
      scale: 80%;
    }
    50% {
      scale: 100%;
    }
    60% {
      scale: 80%;
    }
    70% {
      scale: 60%;
    }
    80% {
      scale: 40%;
    }
    90% {
      scale: 15%;
    }
    100% {
      scale: 0%;
    }
  }
`;

const Circle = (props) => {
  console.log(props);
  const myStyle = {
    backgroundColor: `${props.color}`,
    top: `${props.top}`,
    left: `${props.left}`,
  };
  return <Circles style={myStyle}></Circles>;
};

export default Circle;
