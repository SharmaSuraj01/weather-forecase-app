import InfiniteScroll from 'react-infinite-scroll-component';
import { useState, useEffect } from 'react';
import { fetchCities } from '../services/citiesService';
import Link from 'next/link';
import { City } from '../types/city';

function slugifyCityName(name: string): string {
    return name
        .normalize('NFKD')                      
        .replace(/[\u0300-\u036f]/g, '')        
        .replace(/^['‘’`´-]+/, '')              
        .replace(/[^\w\s-]/g, '')              
        .trim();
}

const CitiesTable = () => {
    const [cities, setCities] = useState<City[]>([]);
    const [offset, setOffset] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    const loadMoreCities = async () => {
        try {
            setIsLoading(true);
            const newCities = await fetchCities(offset, 20);
            setCities((prevCities) => [...prevCities, ...newCities]);
            setOffset((prevOffset) => prevOffset + 20);
            if (newCities.length === 0) setHasMore(false);
        } catch (error) {
            console.error('Error loading more cities:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadMoreCities();
    }, []);

    if (isLoading && cities.length === 0) {
        return <div style={{ textAlign: 'center', padding: '2rem' }}>Loading cities...</div>;
    }

    return (
        <InfiniteScroll
            dataLength={cities.length}
            next={loadMoreCities}
            hasMore={hasMore}
            loader={<h4 style={{ textAlign: 'center' }}>Loading more...</h4>}
        >
            <table>
                <thead>
                    <tr>
                        <th>City Name</th>
                        <th>Country</th>
                        <th>Timezone</th>
                    </tr>
                </thead>
                <tbody>
                    {cities.map((city) => (
                        <tr key={city.id}>
                            <td>
                                <Link href={`/city/${encodeURIComponent(slugifyCityName(city.name))}?country=${city.countryCode}`}>
                                    {city.name}
                                </Link>
                            </td>
                            <td>{city.country}</td>
                            <td>{city.timezone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </InfiniteScroll>
    );
};

export default CitiesTable;
