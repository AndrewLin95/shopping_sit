import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="main">
      <img id="backgroundImg" src={require("Images/background.png")}></img>
      <div id="landingTxt">All the candy you can imagine... and more!</div>
      <Link id="clickToBegin" to="/shopping_site/products">Click to here to discover endless choices*</Link>
    </div>
  )
}

export default Home;