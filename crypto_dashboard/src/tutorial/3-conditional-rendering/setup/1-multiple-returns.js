import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [loading,setLoading]=useState(true);
  const [isError,setIsError]=useState(false);
  const [user,setUser]=useState('default user');

  useEffect(()=>{
    fetch(url)
    .then((res)=>{
      if(res.status >=200 && res.status<=299){
        return res.json();
      }
      else{
        setIsError(true);
        setLoading(false);
        throw new Error(res.statusText);
      }
    })
    .then((user)=>{
      const {login}=user;
      setUser(login);
      setLoading(false);
    })
    .catch(error=>console.log(error))
  },[])

  if(loading){
    return <h2>Loading..</h2>;
  }
  if(isError){
    return <h2>Err..</h2>;
  }
  return <h2>{user}</h2>;
};

export default MultipleReturns;
