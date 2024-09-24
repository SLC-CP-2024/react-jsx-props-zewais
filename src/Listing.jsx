import "./App.css";

export default function Listing({ pic, country, location, rating, price }) {
  const styles = rating >= 4.0 ? { color: "green" } : { color: "red" };
  return (
    <div className="Listing">
      <img src={pic} alt="" width="100" />
      <h3>
        <strong>{country}</strong>
      </h3>
      <h4>{location}</h4>
      <p style={styles}>{rating} &#9733;</p>
      <p className="price">${price}/night</p>
    </div>
  );
}
