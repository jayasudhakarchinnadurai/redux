import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userfetch } from './action';

const App = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state);

  useEffect(() => {
    dispatch(userfetch());
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
       <div>
        {data.map((idx)=>
        <div>capital:{idx.capital}</div>
        )}
       </div>
    </div>
  );
};

export default App;