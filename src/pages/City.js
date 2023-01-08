import { useParams } from "react-router-dom";

const cities = require("data/cities.json");

function City() {
  const { cityCode } = useParams();
  const city = cities.find((ci) => ci.cityCode === cityCode);

  return (
    <div className="content-column">
      <h2>
        {city.name} ({city.cityCode})
      </h2>
      <p>Welcome to {city.name}</p>
      <img
        alt={`A street scene of ${city.name}.`}
        src={require(`assets/images/${city.name
          .toLowerCase()
          .replace(" ", "-")}.jpg`)}
      />
    </div>
  );
}

export default City;
