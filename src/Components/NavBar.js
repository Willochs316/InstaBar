import "./NavBar.css";
import NavBarIcons from "./NavBarIcons";
import { FaRegCompass, FaSearch } from "react-icons/fa";
import Input from "./Input";

const NavBar = ({ figures }) => {
  const userFigures = (userId) => {
    const existingFigures = figures.filter((figure) => figure.id === userId);
    return existingFigures;
  };
  console.log(userFigures(2), "fat head");

  return (
    <div className="navigation-container">
      <div className="navigation-bar">
        <div className="navigation-image">
          <img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
            alt=""
            width="103"
            height="29"
          />
        </div>
        <div className="search-input-container">
          <NavBarIcons icon={FaSearch} className="fa-search" />

          <Input
            type="text"
            name="text"
            className="navigation-input"
            placeholder="Search"
          />
        </div>

        <div className="icons-container">
          {userFigures(1).map((figure) => (
            <img src={figure.image} alt="" width="24" height="24" />
          ))}
          {userFigures(2).map((figure) => (
            <img src={figure.image} alt="" width="24" height="24" />
          ))}
          <NavBarIcons icon={FaRegCompass} style={{ fontSize: "24px" }} />

          {userFigures(4).map((figure) => (
            <img src={figure.image} alt="" width="24" height="24" />
          ))}

          {userFigures(5).map((figure) => (
            <img
              src={figure.image}
              alt=""
              width="24"
              height="24"
              style={{ borderRadius: "50%", border: "1px solid #dbdbdb" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
