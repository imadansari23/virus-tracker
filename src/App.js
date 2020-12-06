import React, {useEffect, useState} from 'react';
import Cards from './components/Cards';
import CountrySelector from './components/CountrySelector';
import Chart from './components/Chart';
import Footer from './components/Footer';
import { fetchData } from './components/Api';

import './App.css';

export default function App() {
    const [globalData, setGlobalData] = useState({});
    const [selectedCountry, setCountry] = useState('');
    useEffect(() => {
        const getData = async() => {
            const {confirmed, deaths, recovered, lastUpdate} = await fetchData();
            setGlobalData({confirmed, deaths, recovered, lastUpdate});
        }
        getData();
    },[setGlobalData]);

    let handleCountry = async(country) => {
        const {confirmed, deaths, recovered, lastUpdate} = await fetchData(country);
        setGlobalData({confirmed, deaths, recovered, lastUpdate });
        setCountry(country);
    }

    return (
        <div className='container'>
            <h1 className='heading1'>COVID-19 Tracker</h1>
            <Cards data={globalData}/>
            <CountrySelector data={handleCountry}/>
            <Chart data={globalData} country={selectedCountry}/>
            <Footer />
        </div>
    )
}
