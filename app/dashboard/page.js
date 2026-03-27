async function getSignals() {
  const res = await  fetch("http://127.0.0.1:3000/api/signals", {
  cache: "no-store"
})
  return res.json();
}

export default async function Dashboard() {
  const data = await getSignals();

  return (
    <div>
      <h1>Signals</h1>
      {data.data.map((s, i) => (
        <div key={i}>
          {s.stock} - {s.signal}
        </div>
      ))}
    </div>
  );
}