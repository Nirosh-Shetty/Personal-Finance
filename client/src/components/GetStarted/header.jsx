import React from "react";
import { Link } from "react-router-dom";
import { toggleAuthAtom } from "../../recoil/atom/toggleAuthAtom";
import { useRecoilState } from "recoil";
export const Header = (props) => {
  const [authToggle, setAuthToggle] = useRecoilState(toggleAuthAtom);
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay1">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <Link
                  to="/auth"
                  className="btn btn-custom btn-lg page-scroll"
                  onClick={() => {
                    setAuthToggle("signUp");
                  }}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
