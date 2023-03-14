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

  return ((today.dxy*(today.tenyear))/1.61)
  }

export default Today;
