import About from "../../components/About";
import Category from "../../components/Category";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HomePage from "../../components/HomePage";
import Products from "../../components/Products";
import SendEmail from "../../components/SendEmail";

const Home = () => {
  return (
    <>
      <Header />
      <HomePage />
      <Category />
      <Products />
      <About />
      <SendEmail />
      <Footer />
    </>
  );
};

export default Home;
