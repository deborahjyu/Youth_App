import React, { useState, useEffect } from "react";
import Organization from "./Organization";
import axios from 'axios';


const Home = () =>{
    const [orgList, setOrg] = useState([]);
    const [search, setSearch] = useState("");
    const [filterOrgList, setFilterOrgList] = useState([]);

    const filterOrganizations = () => {
      const temp = orgList.filter((orgList) => {return orgList.zip_code.includes(search)})
      setFilterOrgList(temp)
    }
  
    useEffect(() => {
      axios.get("https://data.ny.gov/resource/childcareprograms.json")
      .then((data) => {setOrg(data.data)
      console.log(data.data)})
    }, [])


    return (
      <div>
        <div className='search'>
            <br></br>
            <input className='searchbar' value={search} placeholder="zipcode..." onChange={(e) => setSearch(e.target.value)} />
            <button className='searchbutton' onClick= {filterOrganizations}>Search</button>
            </div>
            <div className = 'org'>
          {filterOrgList.map((org,index) => (
          <Organization 
          name = {org.facility_name}
          description = {org.additional_information.url}
          city= {org.city}
          state = {org.state}
          zipcode= {org.zip_code}
          phone = {org.phone_number}
          capacity = {org.capacity_description}
          key = {index + 1}
          />
          ))}
          </div>
            <br></br>
  
      </div>
      )
}

export default Home;

/*<input className='searchbar' value={search} placeholder="zip code..." onChange={(e) => setSearch(e.target.value)} />

{orgList.filter((orgList) => {return orgList.zip_code.includes(search)}).map((org) => (
  <Organization 
  name = {org.facility_name}
  city= {org.city}
  state = {org.state}
  zipcode= {org.zip_code}
  phone = {org.phone_number}
  description = {org.additional_information}
  />
  ))}*/

/*            <input className='searchbar' value={search} placeholder="zip code..." onChange={(e) => setSearch(e.target.value)} />
            <button className='searchbutton' onClick= {generateOrganizations}>Search</button>
          {orgList.filter((orgList) => {return orgList.zip_code.includes(search)}).map((org,index) => (
          <Organization 
          name = {org.name}
          city= {org.city}
          state = {org.state}
          zipcode= {org.zipcode}
          phone = {org.phone}
          description = {org.description}
          key = {index + 1}
          />
          ))}*/