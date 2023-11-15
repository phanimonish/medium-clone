import React from "react";
import posts from "../Data";

function Post() {
  const renderCard = (card, index) => {
    return (
      <div class="post card mb-3" key={index}>
        <div class="row g-0">
          <div class="col-8">
            <div class="card-body">
              <h5 class="card-title">{card.title}</h5>
              <p class="card-text">{card.para}</p>
            </div>
          </div>
          <div class="col-4">
            <img src={card.img} class="img-fluid p-3" alt="..." />
          </div>
        </div>
      </div>
    );
  };

  return <div>{posts.map(renderCard)}</div>;
}

export default Post;
