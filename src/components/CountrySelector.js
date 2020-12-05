import React, { useEffect, useState } from 'react';
import { FormControl, NativeSelect } from "@material-ui/core";
import axios from 'axios';



export default function CountrySelector({data}) {


  const [Countries, setCountries] = useState([]);
  const fetchCountries = async () => {
    try {
      const { data: { countries } } = await axios.get('https://covid19.mathdro.id/api/countries');

      //   return countries.map((country) => country.name);
      let a = countries.map(c => c.name);
      return a;
      // console.log(a)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    const fetchCountry = async () => {
      const fc = await fetchCountries();

      setCountries(fc);
    }
    fetchCountry();
  }, [])


  // console.log(Countries)
  return (
    <FormControl style={{ margin: '30px auto', width: '50px !important' }}>
      <NativeSelect defaultValue="" onChange={(e) => data(e.target.value)} style={{ width: '500px', padding: '10px' }}>
        <option value="">Global</option>
        {Countries.map((country, key) => (<option value={country} key={key}>{country}</option>))}
      </NativeSelect>
    </FormControl>
  );
}
