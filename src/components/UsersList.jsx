import React from 'react'

const UsersList = ({user,handleClickUpdateUser,deleteUser}) => {
  return (
    <tr className="grid grid-cols-[repeat(12,_1fr)] grid-rows-1 gap-4 justify-center items-center">
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.email}</td>
      <td>{user.password}</td>
      <td>{user.birthday}</td>
      
      <td className='flex gap-1'>
        <button

          onClick={()=>deleteUser(user.id)}
          variant="danger"
          size="sm"
          className='bg-blue-500 text-white p-[6px] rounded-xl'
          // onClick={() => deleteSong(song.id)}
        >
          Delete
        </button>
        <button onClick={()=>handleClickUpdateUser(user)} className='bg-red-500 text-white p-[6px] rounded-xl' variant="warning" size="sm"
        //  onClick={() => selectSong(song)}
         >
          Update
        </button>
      </td>
    </tr>
  )
}

export default UsersList