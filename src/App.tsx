import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";

import { client } from "utils/configs";

import Layout from "layout";
import Routers from "routes";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Layout>
          <Routers />
        </Layout>
      </BrowserRouter>
    </ApolloProvider>
  );
};
export default App;
