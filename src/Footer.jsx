import React from "react";
import styled from "styled-components";
const Footers = styled.div`
// position: sticky;
  bottom: 0;
  width: 100%;
  display: flex;
  max-width: 100%;
  margin: auto;
  justify-content: center;
  text-align: center;
  color: black;
  letter-spacing: 2px;
  font-decoration: underline;
  font-weight: 300;
  font-size: 1rem;
  .anil {
    color: purple;
    font-weight: bold;
    letter-spacing: 3px;
  }
`;

const Footer = () => {
  return (
    <Footers>
      It is designed & deploy by <span className="anil">@anil</span>
    </Footers>
  );
};

export default Footer;
