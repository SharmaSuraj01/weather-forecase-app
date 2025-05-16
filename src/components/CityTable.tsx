import InfiniteScroll from 'react-infinite-scroll-component';
import { useState, useEffect } from 'react';
import { fetchCities } from '../services/citiesService';

import Link from 'next/link';

const CitiesTable = () => {
    const [cities, setCities] = useState<City[]>([]);
    const [offset, setOffset] = useState(0);
    const [hasMore, setHasMore] = useState(true);

    const loadMoreCities = async () => {
        try {
            const newCities = await fetchCities(offset, 20);
            setCities((prevCities) => [...prevCities, ...newCities]);
            setOffset((prevOffset) => prevOffset + 20);
            if (newCities.length === 0) setHasMore(false);
        } catch (error) {
            console.error('Error loading more cities:', error);
        }
    };

    useEffect(() => {
        loadMoreCities();
    }, []);

    return (
        <InfiniteScroll
            dataLength={cities.length}
            next={loadMoreCities}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
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
<Link href={`/city/${encodeURIComponent(city.name.replace(/^[''‘’\s]+/, ''))}?country=${city.countryCode}`}>
    {city.name.replace(/^[''‘’\s-]+/, '')}
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