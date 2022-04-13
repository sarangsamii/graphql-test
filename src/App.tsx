import { BrowserRouter } from "react-router-dom";

import Layout from "layout";
import Routers from "routes";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routers />
      </Layout>
    </BrowserRouter>
  );
};
export default App;
