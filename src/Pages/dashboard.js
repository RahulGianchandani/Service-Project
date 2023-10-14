import axios from 'axios';
import React, { useEffect } from 'react'


import { Link } from 'react-router-dom'


const AdminDashboard = () => {

  useEffect(() => {
    axios.post('http://172.16.1.58:3000/getservices', {})
      .then(res => {
        if (res?.data?.success) {
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, [])

  return (
    <div id='dashboard' className='bg-[#e1e1e1]'>


      <h1 className='text-center h1 theme-blue-color mb-24 pt-32 lg: max-lg:pt-12 max-lg:mb-12'>Applications</h1>

      <div className='container '>

        <table class="table table-striped table-hover">
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
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@twitter</td>
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