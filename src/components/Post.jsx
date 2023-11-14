import React from "react";
import post_img from "./post-img.jpg"

function Post() {
  return (
    <div class="post card mb-3">
      <div class="row g-0">
        <div class="col-8">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small class="text-body-secondary">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="col-4">
          <img src={post_img} class="img-fluid p-3" alt="..." />
        </div>
      </div>
    </div>
  );
}

export default Post;
