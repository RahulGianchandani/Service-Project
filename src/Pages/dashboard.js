import axios from 'axios';
import React, { useEffect, useState } from 'react'


import { Link } from 'react-router-dom'


const AdminDashboard = () => {
  const [service, setService] = useState();
  useEffect(() => {
    reset()
  }, [])
  console.log("service", service);

  const runSearch = () => {
    axios.post('http://172.16.1.58:3000/getservices', { ServiceType: service ? service : "" })
      .then(res => {
        if (res?.data?.success) {
        }
      })
      .catch(error => {
        console.error(error);
      });
  }
  const reset = () => {
    setService("")
    axios.post('http://172.16.1.58:3000/getservices', {})
      .then(res => {
        if (res?.data?.success) {
        }
      })
      .catch(error => {
        console.error(error);
      });
  }
  return (
    <div id='dashboard' className='bg-[#e1e1e1]'>

      <h1 className='text-center h1 theme-blue-color mb-12 pt-32 lg: max-lg:pt-12 max-lg:mb-12'>Applications</h1>

      <div className='container pb-20 h-screen'>
        <div className='flex mb-10 '>
          <select className="form-select w-max my-0" aria-label="Default select example" value={service} onChange={(e) => setService(e.target.value)}>
            <option selected>Select Service</option>
            <option value="service1">Service1</option>
            <option value="ServiceType2">Service2</option>
            <option value="ServiceType3">Service3</option>
            <option value="ServiceType4">Service4</option>
            <option value="ServiceType5">Service5</option>
            <option value="ServiceType6">Service6</option>
            <option value="ServiceType7">Service7</option>
            <option value="ServiceType8">Service8</option>
            <option value="ServiceType9">Service9</option>
            <option value="Service1Type0">Service10</option>
            <option value="Service1Type1">Service11</option>
            <option value="Service1Type2">Service12</option>
          </select>
          <button id="prvBtnn" type="button" class="btn btn-secondary ms-4" onClick={reset}>Reset</button>
          <button id="nxtBtnn" type="button" class="btn btn-secondary ms-2" onClick={runSearch}>Search</button>
        </div>
        <table class="table table-striped table-hover mb-0">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Service Selected</th>
              <th scope="col">Name</th>
              <th scope="col">Number</th>
              <th scope="col">City</th>
              <th scope="col">Note</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Service5</td>
              <td>Otto</td>
              <td>1232131</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Service2</td>
              <td>Thornton</td>
              <td>213131</td>
              <td>@fat</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Service6</td>
              <td>@twitter</td>
              <td>213213</td>
              <td>@twitter</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>


    </div >
  )
}

export default AdminDashboard