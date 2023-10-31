import React from "react";
import UsersList from "./UsersList";

const Users = ({ users, handleClickUpdateUser, deleteUser }) => {
  return (
    <div className="grid justify-center">
      <table className="px-10">
        <thead>
          <tr className="grid grid-cols-[repeat(12,__1fr)] grid-rows-1 gap-4 justify-center items-center ">
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Password</th>
            <th>Birthday</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user) => (
              <UsersList
                key={user.id}
                user={user}
                handleClickUpdateUser={handleClickUpdateUser}
                deleteUser={deleteUser}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
