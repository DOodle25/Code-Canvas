// import logo from "../codecanvas.png";
import React, { useState } from "react";
import "./styles.css";
// import coverimg from "../cover.jpg";
// import componentsData from "./uicomponents.js";
import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import {
  FaSearch,
  FaBars,
  FaUser,
  FaCopy,
  FaHtml5,
  FaReact,
  FaCss3Alt,
} from "react-icons/fa";
// import { CgProfile } from "react-icons/cg";

const Aproject = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [currentCode, setCurrentCode] = useState("htmlCss");
  const [isPremium, setIsPremium] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [displayComponents, setDisplayComponents] = useState(componentsData);
  const [isToasterVisible, setIsToasterVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const switchCode = (type) => {
    setCurrentCode(type);
  };

  function searchHandler(e, value) {
    e.preventDefault();
    document.getElementById("loader").style.zIndex = "100";

    if (value == "") {
      setDisplayComponents(componentsData);
    } else {
      let temporaryDataToBeDisplayed = [];
      componentsData.forEach((component) => {
        if (
          component.name.toLowerCase().includes(value) ||
          component.category.toLowerCase().includes(value) ||
          component.tags.some((tag) => tag.includes(value))
        ) {
          temporaryDataToBeDisplayed.push(component);
        }
      });
      if (temporaryDataToBeDisplayed.length == 0) {
        if(!isToasterVisible){
          setIsToasterVisible(true);
          toast.warning("No Match Found! Consider searching something else", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            onClose:()=>{setIsToasterVisible(false)}
          });
        } 
        setDisplayComponents([]);
      } else {
        setDisplayComponents(temporaryDataToBeDisplayed);
      }
    }
    setTimeout(() => {
      document.getElementById("loader").style.zIndex = "-100";
    }, 1000);
  }

  function categoryChangeHandler(e, value) {
    e.preventDefault();
    document.getElementById("loader").style.zIndex = "100";
    if (selectedCategory === value) {
      document
        .getElementById(selectedCategory)
        .classList.remove("highlighted-link");
      setSelectedCategory(null);
      setDisplayComponents(componentsData);
    } else {
      if (selectedCategory === null) {
        document.getElementById(value).classList.add("highlighted-link");
        setSelectedCategory(value);
        let tempCategorySelectResult = [];
        componentsData.forEach((component) => {
          if (component.category.toLowerCase === value) {
            tempCategorySelectResult.push(component);
          }
        });
        setDisplayComponents(tempCategorySelectResult);
      } else {
        document
          .getElementById(selectedCategory)
          .classList.remove("highlighted-link");
        document.getElementById(value).classList.add("highlighted-link");
        setSelectedCategory(value);
        let tempCategorySelectResult = [];
        componentsData.forEach((component) => {
          if (component.category.toLowerCase() === value) {
            tempCategorySelectResult.push(component);
          }
        });

        setDisplayComponents(tempCategorySelectResult);
      }
    }
    setTimeout(() => {
      document.getElementById("loader").style.zIndex = "-100";
    }, 1000);
  }

  return (
    <div className="app">
      <nav className="navbar">
        <div className="left-section">
          <img 
            alt="logo" 
            className="logo" 
            src={logo} 
          />
          <button className="icon-button" onClick={toggleSidebar}>
            <FaBars />
          </button>
        </div>
        <div className="mid-section">
          <div className="search-bar">
            <input
              onChange={(e) => {
                searchHandler(e, e.target.value.toLowerCase());
              }}
              type="text"
              className="search-input"
              placeholder="Search..."
            />
            <button className="search-button">
              <FaSearch />
            </button>
          </div>
        </div>
        <div className="right-section">
          <CgProfile size={40} />

          <span className="profile-name" onClick={toggleProfile}>
            Manas
          </span>
          {isProfileOpen && (
            <div className="profile-dropdown">
              <button className="profile-button">Open Profile</button>
              <button className="logout-button">Logout</button>
            </div>
          )}
        </div>
      </nav>
      {isSideBarOpen && (
        <div class="sidebar">
          <h1 class="explore-heading">Filter by Category</h1>
          <div id="links" class="link-list">
            <a
              href="#"
              id="sidebar"
              onClick={(e) => {
                categoryChangeHandler(e, e.target.innerHTML.toLowerCase());
              }}
              class="link"
            >
              SideBar
            </a>
            <a
              href="#"
              id="card"
              onClick={(e) => {
                categoryChangeHandler(e, e.target.innerHTML.toLowerCase());
              }}
              class="link"
            >
              Card
            </a>
            <a
              href="#"
              id="button"
              onClick={(e) => {
                categoryChangeHandler(e, e.target.innerHTML.toLowerCase());
              }}
              class="link"
            >
              Button
            </a>
            <a
              href="#"
              id="form"
              onClick={(e) => {
                categoryChangeHandler(e, e.target.innerHTML.toLowerCase());
              }}
              class="link"
            >
              Form
            </a>
            <a
              href="#"
              id="carousel"
              onClick={(e) => {
                categoryChangeHandler(e, e.target.innerHTML.toLowerCase());
              }}
              class="link"
            >
              Carousel
            </a>
            <a
              href="#"
              id="popup"
              onClick={(e) => {
                categoryChangeHandler(e, e.target.innerHTML.toLowerCase());
              }}
              class="link"
            >
              Popup
            </a>
            <a
              href="#"
              id="gallery"
              onClick={(e) => {
                categoryChangeHandler(e, e.target.innerHTML.toLowerCase());
              }}
              class="link"
            >
              Gallery
            </a>
          </div>
        </div>
      )}
      <div id="loader" class="loader-div">
        <span class="loader">
          <span></span>
          <span></span>
        </span>
      </div>
      {displayComponents.length > 0 && (
        <div
          id="content"
          className={`content ${
            isSideBarOpen ? "content-sidebar-open" : "content-sidebar-closed"
          }`}
        >
          {displayComponents.map((component, index) => (
            <div key={index} className="component">
              <h2 className="component-name">{component.name}</h2>
              <h4 className="category-name">{component.category}</h4>
              <div className="component-body">
                <div className="image-container">
                  <img src={coverimg} alt="coverimg" className="coverimg" />
                  <img
                    src={component.image}
                    alt="component"
                    className="component-image"
                  />
                </div>
                <div className="component-details">
                  <p>{component.description}</p>
                  <div className="code-buttons">
                    <button
                      className="code-button html-css"
                      onClick={() => switchCode("htmlCss")}
                    >
                      <FaHtml5 /> HTML + CSS
                    </button>
                    <button
                      className="code-button react-css"
                      onClick={() => switchCode("reactCss")}
                    >
                      <FaReact /> React + CSS
                    </button>
                    <button
                      className="code-button react-tailwind"
                      onClick={() => switchCode("reactTailwind")}
                    >
                      <FaReact /> React + Tailwind
                    </button>
                  </div>
                  <div className="code-container">
                    {component.isPaid && !isPremium ? (
                      <div className="code-box-locked">
                        <pre className="blurred">
                          {component.code[currentCode]}
                        </pre>
                        <button
                          className="premium-button"
                          onClick={() => setIsPremium(true)}
                        >
                          Get Premium
                        </button>
                        <p className="premium-text">The component is paid</p>
                      </div>
                    ) : (
                      <div className="code-box">
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(
                              component.code[currentCode]
                            );
                            toast.success(
                              "Copied Success!",
                              {
                                position: "top-center",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "dark",
                                
                              }
                            );
                          }}
                          className="copy-button"
                        >
                          <FaCopy /> Copy Code
                        </button>
                        <pre>{component.code[currentCode]}</pre>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Aproject;