import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "./Form";
import Navigate from "./Navigate";
import Spinner from "./Spinner";
const URL = "https://jsonplaceholder.typicode.com/posts";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const { data } = await axios.get(URL);
    setPosts(data);
    console.log(posts);
    setIsLoading(false);
  };

  return (
    <div>
      <Navigate />
      {isLoading ? <Spinner /> : <Form />}
    </div>
  );
}
