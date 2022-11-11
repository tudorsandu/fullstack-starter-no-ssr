import React from "react";
import { Route, Router } from "wouter";
import { Navigation } from "./components/Navigation";
import { StateDemo } from "./pages/StateDemo";
import { Home } from "./pages/Home";
import { QueryClient, QueryClientProvider } from "react-query";
import FetchDemo from "./pages/FetchDemo";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Navigation />
          <Route path="/" component={Home}></Route>
          <Route path="/state" component={StateDemo}></Route>
          <Route path="/fetch" component={FetchDemo}></Route>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
