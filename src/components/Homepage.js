import React from "react";
import Form from "./Form/Form";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Main from "./pages/Main";

const Homepage = () => {
  return (
    <>
      <div className="homepage">
       <Header/>
        <Main/>       
        <Form />
        <Footer/>
      </div>
    </>
  );
};

export default Homepage;
