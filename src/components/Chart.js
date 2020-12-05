import React, { useState, useEffect } from 'react';
import { fetchDialy } from './Api';
import { Line, Bar } from 'react-chartjs-2';
import './Components.css';



export default function Chart({data : {confirmed, deaths, recovered}}) {
    const [daily, setDaily] = useState([]);
    useEffect(() => {
        const newFunc = async() =>{
            const dataDaily = await fetchDialy();
            setDaily(dataDaily);
            // console.log(confirmed.value)
        }
        newFunc()
    },[daily]);

    // const lineChart = (
    //     daily.length !== 0 ?
    //     (<Line 
    //         data = {{
    //             labels : daily.map(({date}) => date),
    //             datasets : [{
    //                 data : daily.map(({confirmed}) => confirmed),
    //                 label : 'Infected',
    //                 borderColor : '#3333ff',
    //                 fill : true,
    //             },{
    //                 data : daily.map(({deaths}) => deaths),
    //                 label : 'Deaths',
    //                 borderColor : 'red',
    //                 backgroundColor : 'rgba(255,0,0,0.5)',
    //                 fill : true,
    //             }]
    //         }}
    //     />) : null
    // );


    const barChart = (
        typeof(confirmed) !== 'undefined' ? (
            <Bar 
                data = {{
                    labels : ['Infected', 'Recovered', 'Deaths'],
                    datasets : [{
                        label : 'People',
                        backgroundColor : [
                            'rgba(0,0,255,0.5)',
                            'rgba(0,255,0,0.5)',
                            'rgba(255,0,0,0.5)'
                        ],
                    data : [confirmed.value, recovered.value, deaths.value]
                    }]
                }}
                options={{
                    legend : {display : false},
                    title : { display : true, text:'Current State'},
                }}
            />
        ) : null
    )
             
    return (
        <div className = 'chartContainer'>
            {barChart}
        </div>
    )
}
