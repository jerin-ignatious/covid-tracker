import React, { useState, useEffect } from 'react';
function App() {

  const [numbers, setNumbers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const url = 'https://api.covid19india.org/data.json';
  const STATUS_SUCESS = 200;
  const STATUS_FAIL = 300;
  useEffect(() => {
    
   
    fetch(url).then((resp) => {
      if(resp.status >= STATUS_SUCESS && resp.status < STATUS_FAIL)
      {
        return resp.json();
      }
      else{
        setIsLoading(false);
        setIsError(true);
        throw new Error(resp.statusText);
      }
    })
    .then((number) => {
      setNumbers(number);
      setIsLoading(false);
      console.log(number);
    })
    .catch((error) => console.log(error));
  }, []);
  if(isLoading){
    return<main>
      <section className='container'>
        <h4>Loading...</h4>
      </section>
    </main>
  }
  if(isError){
    return<main>
      <section className='container'>
        <h4>Error...</h4>
      </section>
    </main>
  }
  return (
    <h2>covid tracker setup</h2>
  );
}

export default App;
