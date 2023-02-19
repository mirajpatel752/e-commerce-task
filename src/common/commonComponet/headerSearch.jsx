import { useNavigate } from "react-router-dom";

const HeaderSearch = () => {
  const navigate = useNavigate();

  const shopingpage = () => {
    navigate("/shopsdefault");
  };
  return (
    <>
      
        <div className="header-center">
          <div className="header-title">
            <h1 className="heading">Shop from your favourite</h1>
            <h1 className="heading-sub-title">grocery stores!</h1>
          </div>
        </div>
        <div className="search-box">
          <div className="search-box-border">
            <input
              className="search-input"
              placeholder="I am shopping for..."
            />
            <button className="search-button" onClick={() => shopingpage()}>
              SEARCH{" "}
            </button>
          </div>
        </div>
    </>
  );
};

export default HeaderSearch;
