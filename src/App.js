import Navbar from './components/Navbar';
import Product from './components/Product';
import "./App.css";

const products = [
  {
    id: 1,
    name: 'کولر پنجره ای ال جی',
    status: 1,
    price: 950000,
    location: 'لحضاتی پیش در سبز میدان',
  },
  {
    id: 2,
    name: 'کولر پنجره',
    status: 0,
    price: 80000,
    location: 'لحضاتی پیش در استادسرا',
  },
  {
    id: 3,
    name: 'کولر',
    status: 1,
    price: 800000,
    location: 'لحضاتی پیش ',
  },
  {
    id: 4,
    name: ' پنجره ',
    status: 1,
    price: 1200000,
    location: 'لحضاتی پیش در استادسرا',
  },
  {
    id: 5,
    name: ' پنجره ',
    status: 1,
    price: 1200000,
    location: 'لحضاتی پیش در استادسرا',
  },
];
function App() {
  return (
    <div>
      <Navbar />
      <div className='productList'>
        {products.map((item) => (
          <Product
            key={item.id}
            name={item.name}
            status={item.status}
            location={item.location}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
