import React from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import logo from "../components/logo.png";
import account from "../components/account.png";
import { Link } from "react-router-dom";

function Addpost() {
  const { quillRef } = useQuill();
  return (
    <div>
      <nav class="navbar h-25 pt-0 pb-0 ps-2 pe-5">
        <div className="left-nav-content d-flex">
          <a class="navbar-brand ms-3" href="/">
            <img className="logo" src={logo} alt=""></img>
          </a>
        </div>
        <div className="right-nav-content d-flex">
          <div className="ms-4">
            <Link to="/">
              <button type="button" class="btn btn-outline-dark">
                publish
              </button>
            </Link>
          </div>
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-label="Notifications"
              className="ms-4"
            >
              <path
                d="M15 18.5a3 3 0 1 1-6 0"
                stroke="currentColor"
                stroke-linecap="round"
              ></path>
              <path
                d="M5.5 10.53V9a6.5 6.5 0 0 1 13 0v1.53c0 1.42.56 2.78 1.57 3.79l.03.03c.26.26.4.6.4.97v2.93c0 .14-.11.25-.25.25H3.75a.25.25 0 0 1-.25-.25v-2.93c0-.37.14-.71.4-.97l.03-.03c1-1 1.57-2.37 1.57-3.79z"
                stroke="currentColor"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <div class="">
            <img className="account ms-4" src={account} alt=""></img>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="title">
          <h4>
            <input className="write-title w-75 mt-3 p-3" placeholder="Title..." />
          </h4>
        </div>
        <div
          style={{ fontSize: 20, border: "1px solid black"  }}
          className="write-para b w-75 mx-auto mt-2"
        >
          <div
            style={{ height: 450, fontSize: 20, border: "-1 px solid black"}}
            className="b p-3"
            ref={quillRef}
          />
        </div>
      </div>
    </div>
  );
}

export default Addpost;
