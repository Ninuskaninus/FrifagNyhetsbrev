import React, { Children } from "react";
import Layout from "./layout";
import Main from "./pages/main";

function App() {
  return (
    <div className="App">
      <Layout>
        <Main />
      </Layout>
    </div>
  );
}

export default App;
