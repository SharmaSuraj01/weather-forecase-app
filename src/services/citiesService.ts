import axios from 'axios';
import { City } from '../types/city';

const CITIES_API_URL = 'https://public.opendatasoft.com/api/records/1.0/search/';

export const fetchCities = async (offset: number = 0, limit: number = 20): Promise<City[]> => {
    try {
        const response = await axios.get(CITIES_API_URL, {
            params: {
                dataset: 'geonames-all-cities-with-a-population-1000',
                rows: limit,
                start: offset,
                sort: 'name',
            },
        });

        return response.data.records.map((record: any) => ({
    id: record.recordid, // Assuming `recordid` is the unique ID
    name: record.fields.name,
    country: record.fields.cou_name_en,
    timezone: record.fields.timezone,
    population: record.fields.population,
    latitude: record.fields.latitude,
    longitude: record.fields.longitude,
}));
    } catch (error) {
        console.error('Error fetching cities:', error);
        throw new Error('Could not fetch cities');
    }
};