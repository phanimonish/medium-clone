import React from "react";
import { posts } from "../Data";
import { useParams } from "react-router-dom";
import RenderCard from "../components/RenderCard";
import Navbar from "../components/Navbar";

function OpenPost() {
  const { id } = useParams();
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        {posts.map((card) => {
          if (Number(id) === card.id) {
            return <RenderCard card={card} />;
          }
        })}
      </div>
    </div>
  );
}

export default OpenPost;
