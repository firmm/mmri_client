import React, { useEffect, useState } from 'react';

const Today = () => {
  const [today, setToday] = useState([]);

  useEffect(() => {
    const getToday = async () => {
      const resp = await fetch('https://today.marketrisk.info');
      const todayResp = await resp.json();
      setToday(todayResp);
    };

    getToday();
  }, []);

  return (<div>MMRI: {(today.dxy*(today.tenyear*100))/4}</div>)
  }

export default Today;
