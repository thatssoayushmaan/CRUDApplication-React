import React from "react";

export default function Comments({ comments, userInfo }) {
  return (
    <div>
      <h5>User {userInfo.id} Comments</h5>
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>PostId</td>
            <td>Name</td>
            <td>Body</td>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment) => {
            return (
              <tr key={comment.id}>
                <td>{comment.id}</td>
                <td>{comment.postId}</td>
                <td>{comment.name}</td>
                <td>{comment.body}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
