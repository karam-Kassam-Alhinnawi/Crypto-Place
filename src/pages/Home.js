import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import CoinsTable from '../components/CoinsTable';

const Home = ({coins, setCoins, currency, setCurrency}) => {
  return (
  <div>

   <Hero/>

   <SearchBar coins={coins} setCoins={setCoins}/>

   <CoinsTable coins={coins} setCoins={setCoins} currency={currency} setCurrency={setCurrency}/>

  </div>
)
}

export default Home