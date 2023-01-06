import { useParams } from "react-router-dom";

const cities = [
  { cityCode: "DAL", id: 0, name: "Dallas" },
  { cityCode: "AUS", id: 1, name: "Austin" },
  { cityCode: "SAN", id: 2, name: "San Antonio" },
  { cityCode: "HOU", id: 3, name: "Houston" },
  { cityCode: "ELP", id: 4, name: "El Paso" },
];

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
