import React from "react";

export default function userInfo({ userInfo }) {
  return (
    <div>
      <h5>User {userInfo.id} Info</h5>
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>UserId</td>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
            <td>Website</td>
          </tr>
        </thead>
        <tbody>
          <tr key={userInfo.id}>
            <td>{userInfo.id}</td>
            <td>{userInfo.userId}</td>
            <td>{userInfo.name}</td>
            <td>{userInfo.email}</td>
            <td>{userInfo.phone}</td>
            <td>{userInfo.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
