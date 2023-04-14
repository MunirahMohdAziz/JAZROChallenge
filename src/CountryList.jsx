import React from "react";
import { useEffect, useState } from "react";
import './App.css';

export function FetchCountryData() {

    const [search,setSearch] = useState('');
    const [countries,setCountries] = useState([]);
    const API = "https://restcountries.com/v3.1/all";

    const fetchData = async (url) => {
        try{
            const response = await fetch(url);
            const data = await response.json();

            if(data.length > 0) {
                setCountries(data);
            }

            console.log(data);
        } catch(e) {
            console.error(e)
        }
    }

    useEffect(() => {
        fetchData(API);
    }, [])

    return (
        <div>
            <div className="search-wrapper">
                <div className="search-container">
                    <form>
                        <input className="search-bar" type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search countries"></input>
                    </form>
                </div>
            </div>
            <div className="table-wrapper">
                <table className="country-table">
                    <thead>
                        <tr>
                            <th>Flags</th>
                            <th>Name</th>
                            <th>Region</th>
                            <th>Capital</th> 
                            
                        </tr>
                    </thead>
                    <tbody>
                        {countries
                        .filter((list) => {
                            return search.toLowerCase() === ''
                            ? list
                            : list.name.common.toLowerCase().includes(search);
                        }).map((list,index) => (
                            <tr key={index}>
                                <td><img className="flag-img" src={list.flags.svg} alt={list.flags.alt} width={100} /></td>
                                <td>{list.name.common}</td>
                                <td>{list.region}</td>
                                <td>{list.capital}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>  
            </div>
            
                
        </div>
    )
}