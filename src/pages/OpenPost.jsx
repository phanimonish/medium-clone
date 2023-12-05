import React from "react";
import { posts } from "../Data";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import RenderPost from "../components/RenderPost";

function OpenPost() {
  const { id } = useParams();
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        {posts.map((card) => {
          if (Number(id) === card.id) {
            return <RenderPost card={card} />;
          }
        })}
      </div>
    </div>
  );
}

export default OpenPost;
