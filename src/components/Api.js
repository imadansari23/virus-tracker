
const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let anotherUrl = url;
    if(country){
        anotherUrl = `${url}/countries/${country}`;
    }
    try {
        const fetchApi = await fetch(anotherUrl);
        const response =  await fetchApi.json();
        return response;
        
    } catch (error) {
        // console.log(error)
    }
}


export const fetchDialy = async() => {
    try {
        const response = await fetch(`${url}/daily`);
        const data = await response.json();
        const dailyData = data.map((daily) => ({
            confirmed : daily.confirmed.total,
            deaths : daily.deaths.total,
            date : daily.reportDate
        }))
        return dailyData;
    } catch (error) {
        console.log(error)
    }
}