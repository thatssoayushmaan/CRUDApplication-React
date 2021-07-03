import React, { useState, useEffect } from "react";
import Comments from "./Comments";
import UserInfo from "./UserInfo";
import { Link, useParams, Redirect } from "react-router-dom";
import axios from "axios";
import Navigate from "./Navigate";
const URL = "https://jsonplaceholder.typicode.com/posts/";
const usersURL = "https://jsonplaceholder.typicode.com/users/";
export default function Post(props) {
  const params = useParams();
  const [selectedPost, setSelectedPost] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const [comments, setComments] = useState([]);
  const [displayComments, setDisplayComments] = useState(false);
  const [displayUserInfo, setDisplayUserInfo] = useState(false);
  const getPost = async () => {
    const { data } = await axios.get(URL + params.id);
    setSelectedPost(data);
  };

  useEffect(() => {
    getPost();
  }, []);

  const getUserInfo = async () => {
    const { data } = await axios.get(`${usersURL}/${selectedPost.id}`);
    setUserInfo(data);
    setDisplayComments(false);
    setDisplayUserInfo(true);
  };

  const getComments = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${selectedPost.id}`
    );
    setComments(data);
    setDisplayUserInfo(false);
    setDisplayComments(true);
  };
  return (
    <div>
      <div>
        <Navigate />
      </div>
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>userId</td>
            <td>Title</td>
            <td>Body</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          <tr key={selectedPost.id}>
            <td>{selectedPost.id}</td>
            <td>{selectedPost.userId}</td>
            <td>{selectedPost.title}</td>
            <td>{selectedPost.body}</td>
            <td>
              <button>
                <Link
                  to={{
                    pathname: `edit/${selectedPost.id}`,
                    state: {
                      selPost: selectedPost,
                      isEdit: true
                    }
                  }}
                >
                  Edit
                </Link>
              </button>
              <button onClick={() => getComments()}>Comments</button>
              <button onClick={() => getUserInfo()}>User Info</button>
            </td>
          </tr>
        </tbody>
      </table>

      {displayComments ? (
        <Comments comments={comments} userInfo={userInfo} />
      ) : null}
      {displayUserInfo ? <UserInfo userInfo={userInfo} /> : null}
    </div>
  );
}
