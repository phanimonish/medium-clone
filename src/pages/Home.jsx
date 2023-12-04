import React from "react";
import Navbar from "../components/Navbar";
import RenderCard from "../components/RenderCard";
import { Link } from "react-router-dom";
import { posts } from "../Data";
import StaticData from "../components/StaticData";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="left-content col-8">
            <div className="li-items mt-4 ms-4 d-flex">
              <Link
                to="/addpost"
                style={{ textDecoration: "none", color: "#000" }}
              >
                <p className="pb-0 mb-0 ">
                  <svg width="19" height="19" class="hk hl hm">
                    <path
                      d="M9 9H3v1h6v6h1v-6h6V9h-6V3H9v6z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </p>
              </Link>
              <Link to="/">
                <p className="items pb-0 mb-0 ps-4">For You</p>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/following">
                <p className="items pb-0 mb-0 ps-4">Following</p>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/javascript">
                <p className="items mb-0 ps-4">JavaScript</p>
              </Link>{" "}
              <Link style={{ textDecoration: "none" }} to="/reactpage">
                <p className="items pb-0 mb-0 ps-4">React</p>
              </Link>{" "}
              <Link style={{ textDecoration: "none" }} to="/webdevelopment">
                <p className="web-items items pb-0 mb-0">Web Development</p>
              </Link>{" "}
            </div>
            <hr className="" />
            <div className="posts-div">
              {posts.map((card) => {
                return <RenderCard card={card} />;
              })}
            </div>
          </div>
          <div className="col-4">
              <StaticData/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
