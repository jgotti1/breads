const React = require("react");
const Default = require("./layouts/Default");

function Show({ bread, index }) {
  return (
    <Default>
      <h3>{bread.name}</h3>
      {/* <p>Baked by {bread.baker}</p> */}
      <p>{bread.getBakedBy()}</p>

      <p>
        and it
        {bread.hasGluten ? <span> does </span> : <span> does NOT </span>}
        have gluten.
      </p>
      <img className="imgBread" src={bread.image} alt={bread.name} />
      <div className="show-buttons">
        <a href="/breads">
          <button className="btn">Go home</button>{" "}
        </a>
        <a href={`/breads/${bread.id}/edit`}>
          <button>Edit</button>
        </a>
        <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
          <input type="submit" value="DELETE" />
        </form>
      </div>
    </Default>
  );
}

module.exports = Show;
