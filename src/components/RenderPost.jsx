import React from "react";

function RenderPost({ card, index }) {
  return (
    <div>
      <div class="" key={index}>
        <div class=" g-0">
          <div class="">
            <div class="post-body">
              <h1 class="post-title w-75">{card.title} <br/> </h1>
            </div>
          </div>
          <div class="text-center">
            <img src={card.img} class=" w-75 p-3" alt=".." />
          </div>
        </div>
      </div>
      <p class="w-75 mx-auto"><br/>{card.para} </p>
    </div>
  );
}
export default RenderPost;
