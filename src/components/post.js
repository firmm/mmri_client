import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';

const Post = ({ x }) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const resp = await fetch('https://api.marketrisk.info/api/posts/${x}');
      const postResp = await resp.json();
      setPost(postResp);
    };
    getPost();
  }, [x]);
  if (!Object.keys(post).length) return <div />;
 return (
    <div>
      <h1>{post.x}</h1>
      <p>{post.y}</p>
      <p>
        <Link to="/">Go back</Link>
      </p>
    </div>
  );
};
export default Post;
