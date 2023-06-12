import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div
        style={{
          display: 'flex',
          border: '1px solid #444',
          borderRadius: '5px',
          overflow: 'hidden',
          width:"400px",
          justifyContent:"space-between"
        }}
      >
        <div style={{display:"flex", gap:"20px", flexDirection:"column"}}>
          <h3>کولر پنجره ای ال جی</h3>
          <p>کارکرده</p>
          <p>9500000 تومان</p>
          <p>لحضاتی پیش در استادسرا</p>
        </div>
        <img style={{width:"200px", height:"200px"}} src="https://s100.divarcdn.com/static/thumbnails/1686608740/AZHqWCXa.webp" alt='کولر پنجره ای ال جی'/>
      </div>
    </div>
  );
}

export default App;
