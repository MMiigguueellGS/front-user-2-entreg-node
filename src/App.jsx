import { useState, useEffect } from "react";
import "./App.css";
import ModalCreateUpdate from "./components/ModalCreateUpdate";
import Users from "./components/Users";
import axios from "axios";

function App() {
  const [isShowModal, setIsShowModal] = useState(false); // is -> esta mostrando el modal si ò no
  const [users, setUsers] = useState([]);
  const [isUserToUpdate, setIsUserToUpdate] = useState(null); // permite saber si hay informacion o no para editar

  const handleOnchangeSearch = (e) => {
    e.preventDefault();
    const id = e.target.value;
    if(id===""){getAllUsers()}else{
      const url = "http://localhost:8080/users";
    axios
      .get(url + `/${id}`)
      .then(({ data }) => {
        if (data) {
          setUsers([data]);
        }
      })
      .catch((err) => console.log(err));
    }
    
  };

  const handleClickUpdateUser = (user) => {
    setIsShowModal(true);
    setIsUserToUpdate(user);
  };
  const handelShowModal = () => {
    setIsShowModal(!isShowModal);
  };
  const getAllUsers = () => {
    const url = "http://localhost:8080/users";
    axios
      .get(url)
      .then(({ data }) => setUsers(data))
      .catch((err) => console.log(err));
  };
  const CreateUser = (newUser, reset) => {
    const url = "http://localhost:8080/users";
    axios
      .post(url, newUser)
      .then(({}) => {
        getAllUsers();
        setIsShowModal(false);
        reset({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          birthday: "",
        });
      })
      .catch((err) => console.log(err));
  };

  const deleteUser = (id) => {
    const url = "http://localhost:8080/users";
    axios
      .delete(url + `/${id}`)
      .then(({ data }) => getAllUsers())
      .catch((err) => console.log(err));
  };
  const updateUser = (updateUser, reset) => {
    const url = "http://localhost:8080/users";
    axios
      .put(url + `/${isUserToUpdate.id}`, updateUser)
      .then(({}) => {
        getAllUsers();

        reset({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          birthday: "",
        });
        setIsShowModal(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <section className=" mx-auto mt-16  w-full bg-[#D0EBEA] ">
      <h2 className="uppercase font-semibold text-4xl">Usuarios</h2>
      <section className=" flex justify-around">
        <form className="grid gap-5 w-[min(100%,_350px)] sm:w-[300px] text-black">
          <div className="ligthTheme p-4 rounded-md flex items-center gap-2  sm:w-[360px]">
            <i className="bx bx-search-alt-2 text-white text-lg"></i>
            <input
              onChange={handleOnchangeSearch}
              id="search"
              className="outline-none flex-1 bg-white"
              placeholder="Ingresa el id..."
              type="text"
              autoComplete="off"
              // onChange={handleChangeCountryName}
              // value={countryName}
            />
          </div>
        </form>
        <button onClick={handelShowModal} className="cursor-pointer ">
          <div className=" grid first-letter:h-15 bg-[#43A49B] p-2 text-center">
            <i className="bx bx-plus-medical"></i>
            Nuevo
          </div>
        </button>
      </section>
      <ModalCreateUpdate
        setIsShowModal={setIsShowModal}
        isShowModal={isShowModal}
        isUserToUpdate={isUserToUpdate}
        setIsUserToUpdate={setIsUserToUpdate}
        CreateUser={CreateUser}
        updateUser={updateUser}
      />
      <Users
        users={users ?? []}
        handleClickUpdateUser={handleClickUpdateUser}
        deleteUser={deleteUser}
      />
    </section>
  );
}

export default App;
