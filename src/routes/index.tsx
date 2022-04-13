import {  Routes, Route } from "react-router-dom";

import Home from "pages/Home";

const Routers: React.FC = () => {
  return (
   
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

  );
};
export default Routers;
