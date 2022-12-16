import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'


const UserProfile = () => {
    const[cookie,setCookie]=useCookies()
    const [user,setUser]=useState({})
    useEffect(() => {
      axios
        .get("http://restapi.adequateshop.com/api/users/148307", {
          headers: {
            Authorization: `Bearer ${cookie.token}`,
          },
        })
        .then((user) => setUser(user.data));
    }, []);

  return (
    <div> Welcome  {user.name}</div>
  )
}

export default UserProfile