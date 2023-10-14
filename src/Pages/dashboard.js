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




    </div>
  )
}

export default AdminDashboard