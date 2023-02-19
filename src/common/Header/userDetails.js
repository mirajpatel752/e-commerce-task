import "./style.scss";
import * as React from "react";
import {
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Modal,
  Tooltip,
  UncontrolledDropdown,
} from "reactstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstanceAuth from "../../apiServices/axiosInstanceAuth";
import useEncryption from "../../customHook/useEncryption";
const UserDetails = ({ flag, fields }) => {
  const [conform, setConform] = React.useState(false);
  const [userData, setUserData] = React.useState();
  const [queLeave, setQueLeave] = React.useState(false);
  const [navigateURL, setNavigateURL] = React.useState("");
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { decryptData } = useEncryption();

  const getUser = async () => {
    await axiosInstanceAuth
      .get("user/get")
      .then((res) => {
        const data = decryptData(res.data.data);
        if (res?.data?.status) {
          setUserData(data);
        } else {
          toast.error(res?.data?.message);
        }
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  React.useEffect(() => {
    if (!flag) {
      getUser();
    }
  }, []);

  const logOutConform = () => {
    setConform(true);
  };
  const conformLogOut = () => {
    localStorage.clear();
    navigate("/");
  };

  const onNavigation = (path) => {
    if (pathname === "/question") {
      setNavigateURL(path);
      setQueLeave(true);
    } else if (pathname !== path) {
      navigate(path);
    }
  };

  return (
    <>
      <div className="header-user">
        <div className="user-profile">
          <div className="d-flex align-items-center user-name position-relative">
            <UncontrolledDropdown setActiveFromChild>
              <DropdownToggle
                tag="a"
                className="nav-link d-flex align-items-center"
                caret
                style={{
                  color:
                    pathname === "/dashboard" || pathname === "/topics"
                      ? "#ffffff"
                      : "#000000",
                }}
              >
                <div>
                  <img
                    src={flag === true ? fields.avatar : userData?.avatar}
                    alt=""
                    className="profile_logo"
                  />
                </div>
                {flag === true ? fields.user_name : userData?.user_name}{" "}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem className="p-0">
                  <div
                    onClick={() => onNavigation("/settings")}
                    className="py-1 px-3 d-block"
                    style={{
                      color: "#1a2b51",
                      textDecoration: "none",
                    }}
                  >
                    <img
                      src={
                        require("../../Assets/Img/Settings-sidenar.svg").default
                      }
                      alt=""
                      className=""
                    />
                    Settings
                  </div>
                </DropdownItem>
                <DropdownItem tag="a" onClick={logOutConform}>
                  <img
                    src={require("../../Assets/Img/logout.svg").default}
                    alt=""
                    className=""
                  />
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        </div>
      </div>

      <Modal
        className="conform-modal"
        autoFocus={true}
        centered={true}
        backdrop="static"
        isOpen={conform}
      >
        <div className="conform-modal-wrapper">
          <h4>Are you sure you want to log out?</h4>
          <Button className="conform-button" onClick={conformLogOut}>
            YES
          </Button>
          <Button className="no-button" onClick={() => setConform(false)}>
            NO
          </Button>
        </div>
      </Modal>

      <Modal
        className="conform-modal"
        autoFocus={true}
        centered={true}
        backdrop="static"
        isOpen={queLeave}
      >
        <div className="conform-modal-wrapper">
          <h4>Are you sure you want to leave the game?</h4>
          <Button
            className="conform-button"
            onClick={() => navigate(navigateURL)}
          >
            YES
          </Button>
          <Button className="no-button" onClick={() => setQueLeave(false)}>
            NO
          </Button>
        </div>
      </Modal>
    </>
  );
};
export default UserDetails;
