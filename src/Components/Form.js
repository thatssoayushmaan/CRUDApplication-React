import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles.css";
const URL = "https://jsonplaceholder.typicode.com/posts";
let state, postId, isEdit;

export default function Form(props) {
  //console.log(props);
  const [posts, setPosts] = useState([]);

  if (props.location === undefined) {
    isEdit = false;
  } else {
    isEdit = true;
  }

  if (isEdit) {
    state = props.location.state.selPost;
    postId = props.match.params.id;
  }

  //console.log(postId);
  const initialState = {
    userId: state === undefined ? "" : state.userId,
    title: state === undefined ? "" : state.title,
    body: state === undefined ? "" : state.body
  };
  //console.log(isEdit);
  //console.log(props.location.state);

  const [details, setDetails] = useState(initialState);
  useEffect(() => {
    getPosts();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      updatePost();
    }
    createPost();
  };

  const createPost = async () => {
    const { data } = await axios.post(URL, {
      userId: details.userId,
      title: details.title,
      body: details.body
    });
    let postsData = [...posts, data];
    setPosts(postsData);
    setDetails({ userId: "", title: "", body: "" });
  };

  const getPosts = async () => {
    const { data } = await axios.get(URL);
    setPosts(data);
  };

  const deletePost = async (postId) => {
    // await axios.delete(`${URL}/{postId}`);
    // let postsData = [...posts];
    // let updatedposts = postsData.filter((post) => post.id === postId);
    // setPosts(updatedposts);
    await axios.delete(`${URL}/${postId}`);
    setPosts(posts.filter((post) => post.id !== postId));
  };

  const updatePost = async () => {
    const { data } = await axios.put(`${URL}/${postId}`, {
      userId: details.userId,
      title: details.title,
      body: details.body
    });
    let postsData = [...posts];
    const postIndex = postsData.findIndex((post) => post.id === Number(postId));
    console.log(postIndex);
    postsData[postIndex] = data;
    //console.log(data);
    setPosts(postsData);
    setDetails({ userId: "", title: "", body: "" });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label>UserID : </label>
          <input
            type="string"
            name="userId"
            onChange={handleChange}
            value={details.userId}
            required
          />
        </div>
        <div>
          <label>Title : </label>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={details.title}
            required
          />
        </div>
        <div>
          <label>Body : </label>
          <input
            type="text"
            name="body"
            onChange={handleChange}
            value={details.body}
            required
          />
        </div>
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </form>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>userId</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => {
            return (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.userId}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>
                  <button>
                    <Link to={`/posts/${post.id}`}>View</Link>
                  </button>
                  <button onClick={() => deletePost(post.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
