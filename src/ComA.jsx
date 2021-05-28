import React,{useEffect,useState} from 'react';



const Covid=()=>{
    const [data, setData] = useState([]);
        const getCovidData=async()=>{
        try{
            const res=await fetch('https://api.covid19india.org/data.json');
            const actualData=await res.json();
            setData(actualData.statewise[0]);
        }
        catch(err){
          console.log(err);
        }
         
          
    }
    useEffect(() => {
        getCovidData();
    }, [])
    return(
        <>
        <section>
        <h1>🔴 Live</h1>
        <h2>COVID-19 CORONAVIRUS TRACKER</h2>
        <ul>
            <li className="card">
                <div className="card_main">
                    <div className="card_inner">
                       <p className="card_name"><span>OUR</span> COUNTRY</p>
                       <p className="card_total_card">INDIA</p>
                    </div>
                </div>
            </li>
            <li className="card">
                <div className="card_main">
                    <div className="card_inner">
                       <p className="card_name"><span>TOTAL</span> RECOVRED</p>
                       <p className="card_total_card">{data.recovered}</p>
                    </div>
                </div>
            </li>
            <li className="card">
                <div className="card_main">
                    <div className="card_inner">
                       <p className="card_name"><span>TOTAL</span> CONFIRMED</p>
                       <p className="card_total_card">{data.confirmed}</p>
                    </div>
                </div>
            </li>
            <li className="card">
                <div className="card_main">
                    <div className="card_inner">
                       <p className="card_name"><span>TOTAL</span> DEATHS</p>
                       <p className="card_total_card">{data.deaths}</p>
                    </div>
                </div>
            </li>
            <li className="card">
                <div className="card_main">
                    <div className="card_inner">
                       <p className="card_name"><span>TOTAL</span> ACTIVE</p>
                       <p className="card_total_card">{data.active}</p>
                    </div>
                </div>
            </li>
            <li className="card">
                <div className="card_main">
                    <div className="card_inner">
                       <p className="card_name"><span>LAST</span> UPDATED</p>
                       <p className="card_total_card">{data.lastupdatedtime}</p>
                    </div>
                </div>
            </li>
        </ul>
        </section>
      </>    
    );

    
    
}
 
export default Covid;

                     