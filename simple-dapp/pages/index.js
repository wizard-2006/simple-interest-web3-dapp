export default function Home() {
  return (
    <div style={box}>
      <h2>A Simple Decentralized Web-App</h2>

      <a href="/manager">Manager Page</a>
      <br /><br />
      <a href="/user">User Page</a>
    </div>
  );
}

const box = {
  width: "400px",
  margin: "40px auto",
  padding: "30px",
  background: "#cfe0f7",
  textAlign: "center",
  border: "1px solid black"
};
