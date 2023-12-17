import React from "react";
import logo from "./logo.png";
import account from "./account.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div
        class="modal fade account-modal "
        id="staticBackdrop"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-sm modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-body pb-0">
              <div className="ps-2 pt-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-label="Profile"
                  className="me-2"
                >
                  <circle cx="12" cy="7" r="4.5" stroke="currentColor"></circle>
                  <path
                    d="M3.5 21.5v-4.34C3.5 15.4 7.3 14 12 14s8.5 1.41 8.5 3.16v4.34"
                    stroke="currentColor"
                    stroke-linecap="round"
                  ></path>
                </svg>
                Profile
              </div>
              <div className="ps-2 mt-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="me-2"
                  fill="none"
                  aria-label="Lists"
                >
                  <path
                    d="M6.44 6.69h0a1.5 1.5 0 0 1 1.06-.44h9c.4 0 .78.16 1.06.44l.35-.35-.35.35c.28.28.44.66.44 1.06v14l-5.7-4.4-.3-.23-.3.23-5.7 4.4v-14c0-.4.16-.78.44-1.06z"
                    stroke="currentColor"
                  ></path>
                  <path
                    d="M12.5 2.75h-8a2 2 0 0 0-2 2v11.5"
                    stroke="currentColor"
                    stroke-linecap="round"
                  ></path>
                </svg>
                Library
              </div>
              <div className="ps-2 mt-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="me-2"
                  fill="none"
                  aria-label="Stories"
                >
                  <path
                    d="M4.75 21.5h14.5c.14 0 .25-.11.25-.25V2.75a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25v18.5c0 .14.11.25.25.25z"
                    stroke="currentColor"
                  ></path>
                  <path
                    d="M8 8.5h8M8 15.5h5M8 12h8"
                    stroke="currentColor"
                    stroke-linecap="round"
                  ></path>
                </svg>
                Stories
              </div>
              <div className="ps-2 mt-2">
                <svg
                  width="24"
                  height="24"
                  className="me-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-label="Stats"
                >
                  <path
                    d="M2.75 19h4.5c.14 0 .25-.11.25-.25v-6.5a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v6.5c0 .14.11.25.25.25zM9.75 19h4.5c.14 0 .25-.11.25-.25V8.25a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v10.5c0 .14.11.25.25.25zM16.75 19h4.5c.14 0 .25-.11.25-.25V4.25a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v14.5c0 .14.11.25.25.25z"
                    stroke="currentColor"
                  ></path>
                </svg>
                Stats
              </div>
            </div>
            <hr className="ms-0 w-100" />
            <div class="modal-body pt-0 ps-4 pb-0">
              <p>Settings</p>
              <p>Refine recommendations</p>
              <p>Manage pubblications</p>
              <p>Help</p>
            </div>
            <hr className="ms-0 w-100" />
            <div class="modal-body pt-0 ps-4 pb-0">
              <p>Become a medium member</p>
              <p>Apply for author verification</p>
              <p>Gift a membership</p>
            </div>
            <hr className="ms-0 w-100" />
            <div class="modal-body ps-4 pt-0 pb-0">
              <p>Sign Out</p>
            </div>
          </div>
        </div>
      </div>
      <nav class="navbar h-25 pt-0 pb-0 ps-2 pe-5">
        <div className="left-nav-content d-flex">
          <a class="navbar-brand ms-3" href="/">
            <img className="logo" src={logo} alt=""></img>
          </a>
          <div className="search">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.1 11.06a6.95 6.95 0 1 1 13.9 0 6.95 6.95 0 0 1-13.9 0zm6.94-8.05a8.05 8.05 0 1 0 5.13 14.26l3.75 3.75a.56.56 0 1 0 .8-.79l-3.74-3.73A8.05 8.05 0 0 0 11.04 3v.01z"
                fill="currentColor"
              ></path>
            </svg>
            <input placeholder="Search" className="ps-2 pb-1" />
          </div>
        </div>
        <div className="right-nav-content d-flex">
          <div className="search-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.1 11.06a6.95 6.95 0 1 1 13.9 0 6.95 6.95 0 0 1-13.9 0zm6.94-8.05a8.05 8.05 0 1 0 5.13 14.26l3.75 3.75a.56.56 0 1 0 .8-.79l-3.74-3.73A8.05 8.05 0 0 0 11.04 3v.01z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <Link className="write" to="/addpost">
            <button className="write write-btn">
              <div className=" write ms-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-label="Write"
                >
                  <path
                    d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2"
                    stroke="currentColor"
                  ></path>
                </svg>

                <p className="ms-2 mb-0">Write</p>
              </div>
            </button>
          </Link>
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
            <button
              className="write-btn"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <img className="account ms-4" src={account} alt=""></img>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
