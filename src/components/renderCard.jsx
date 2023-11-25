import { useNavigate } from "react-router-dom";

const RenderCard = ({ card, index }) => {
  const navigate = useNavigate();

  const handleOnClick = (e) => {
    const id = e.target.getAttribute("data-id");
    console.log(id);
    navigate("/openpost/" + id );
  };
  return (
    <div class="post card mb-3" key={index}>
      <div class="row g-0">
        <div class="col-8">
          <div class="card-body">
            <h5 class="card-title">{card.title}</h5>
            <p class="card-text cut-off">{card.para}</p>

            <button
              type="button"
              data-id={`${card.id}`}
              class="btn btn-outline-dark"
              onClick={handleOnClick}
            >
              view post
            </button>
          </div>
        </div>
        <div class="col-4">
          <img src={card.img} class="img-fluid p-3" />
        </div>
      </div>
    </div>
  );
};
export default RenderCard;
