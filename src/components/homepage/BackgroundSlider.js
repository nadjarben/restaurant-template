import React from "react";
import BackgroundSlider from "react-background-slider";

import bg1 from "../../assets/bg1.jpg";
import bg2 from "../../assets/bg2.jpg";

const Background = () => {
  return (
    <div>
      <BackgroundSlider images={[bg1, bg2]} duration={5} transition={1} />
    </div>
  );
};

export default Background;
