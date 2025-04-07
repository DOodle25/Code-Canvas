import React, { useState } from 'react';
import Circle1 from "./circle1/circle1";
import Circle2 from "./circle2/circle2";
import Circle3 from "./circle3/circle3";
import Circle4 from "./circle4/circle4";

function landingPage({ setIsLoggedIn }) {
  return (
    <>
      <Circle1 setIsLoggedIn={setIsLoggedIn}/>
      <Circle2 />
      <Circle3 setIsLoggedIn={setIsLoggedIn}/>
      <Circle4 />
  </>
)};
export default landingPage;
