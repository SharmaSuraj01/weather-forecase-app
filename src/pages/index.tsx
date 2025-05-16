import { useEffect, useState } from 'react';
import CityTable from '../components/CityTable';
import { fetchCities } from '../services/citiesService';

const Home = () => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadCities = async () => {
      try {
        const data = await fetchCities();
        setCities(data);
      } catch (err) {
        setError('Failed to load cities');
      } finally {
        setLoading(false);
      }
    };

    loadCities();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Weather Forecast App</h1>
      <CityTable cities={cities} />
    </div>
  );
};

export default Home;