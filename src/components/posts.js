import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const resp = await fetch('https://api.marketrisk.info/api/posts');
      const postsResp = await resp.json();
      setPosts(postsResp);
    };

    getPosts();
  }, []);

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

const options = {
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Bar Chart - Stacked',
    },
  },
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};
const data = {
  labels: posts.map(post => post.date),
  datasets: [
    {
      type: 'line',
      label: 'MMRI (DXY X 10-Year Treasury Yield / 1.61)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      fill: false,
      data: posts.map(post => post.mmri)
    },
    {
      type: 'bar',
      label: 'DXY (X 2 Scale)',
      backgroundColor: 'rgb(75, 192, 192)',
      data: posts.map(post => post.dxy*2), 
      borderColor: 'white',
      borderWidth: 2
    },
    {
      type: 'bar',
     label: '10 Year (X 100 Scale)',
      backgroundColor: 'rgb(53, 162, 235)',
      data: posts.map(post => post.tenyear*1000)   
}
  ]
};


  return (
    <div>
        <Chart options={options} type='bar' data={data} />
	

EMAIL:<br />
matthew.firm@icloud.com
<br />
Github code (client/server):
React.js client and server API. Free/Fast Wrangler DevOps to CloudFlare Serverless Hosting<br />
<a href="https://github.com/firmm">MMRI Code</a>
<br /><br />
<a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTyFyOCEWGYbHyrKL64_rP3aYNTPmZRqLu4YBpfMS6LhnNLT005UKJw5ziiQ8OmL-tKJtR4FpoqslKV/pubhtml">SCRUBBED DATA</a><br /><br />
        DATE - MMRI - DXY - 10 Year - 10-Year (Low/High/Open/Close) - DXY (Low/High/Open/Close)
	{posts.map(post => (
        <div key={post.x}>
         {post.date}  - MMRI {post.mmri} - DXY - {post.dxy} - 10-Year {post.tenyear} - ({post.TENLow}/{post.TENHigh}/{post.TENOpen}/{post.TENClose}) - ( {post.DXYLow}/{post.DXYHigh}/{post.DXYOpen}/{post.DXYClose})
        </div>
      ))}
    </div>
  );
};

export default Posts;
