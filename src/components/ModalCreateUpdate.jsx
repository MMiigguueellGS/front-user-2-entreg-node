import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const ModalCreateUpdate = ({
  setIsShowModal,
  isShowModal,
  isUserToUpdate,
  setIsUserToUpdate,
  CreateUser,
  updateUser
  
}) => {

 const {handleSubmit,register,reset} = useForm()

  const submit = (data)=>{
    if(isUserToUpdate){
      updateUser(data,reset)
    }else{CreateUser(data,reset)}
    
    
  }

  const handleClear = () =>{
    reset({
      firstName: "",
      lastName:"",
      email:"",
      password:"",
      birthday:""
    })
  }
  const handleClickCloseModal = () => {
    setIsShowModal(false);
    reset({
      firstName: "",
      lastName:"",
      email:"",
      password:"",
      birthday:""
    })
    setIsUserToUpdate(null);
  };

  useEffect(() => {

    if(reset(isUserToUpdate)){
      reset(isUserToUpdate)
    }
  }, [isUserToUpdate])
  
  return (
    <section
      className={`fixed bg-[#26A69A]/30 top-0 bottom-0 left-0 right-0 flex justify-center items-center transition-[opacity_transform] duration-300 ${
        isShowModal
          ? "visible opacity-100 sclae-100"
          : "invisible opacity-0 scale-0"
      }`}
    >
      <form
        onSubmit={handleSubmit(submit)}
        className="w-[50%] h-[70%]   grid  grid-rows-[auto_1fr_auto]  gap-4 p-2 rounded-md relative   bg-[#ffffff]"
      >
        <button
          type="button"
          onClick={handleClickCloseModal}
          className="font-bold absolute top-1 right-2"
        >
          <i className="bx bx-x-circle text-[#263339] text-2xl font-semibold"></i>
        </button>

        <h2 className="text-center uppercase text-[#263339] font-bold text-2xl">
          {isUserToUpdate ? "Update User" : "Create User"}
        </h2>

       
          <section className=" grid justify-center">
            
            <div className="  ">
       
              <input
                className="outline-none bg-transparent border-b border-[#80CBC4] p-1 text-center placeholder:text-[#26A69A]  text-[#26A69A] font-semibold "
                id="firstName"
                type="text"
                placeholder="First Name ..."
                {... register("firstName") }
                // {...register("password", validationPasswordInput)}
              />
            </div>
            <div className="">
         
              <input
                className="outline-none   bg-transparent border-b border-[#80CBC4] p-1 text-center placeholder:text-[#26A69A] text-[#26A69A] font-semibold"
                id="lastName"
                type="text"
                placeholder="Last Name..."
                {... register("lastName") }
              />
            </div>
            <div className="">
  
              <input
                className="outline-none  bg-transparent border-b border-[#80CBC4] p-1 text-center placeholder:text-[#26A69A] text-[#26A69A] font-semibold"
                id="email"
                type="text"
                placeholder="Email ..."
                {... register("email") }
              />
            </div>
            <div className=" ">
         
              <input
                className="outline-none  bg-transparent border-b border-[#80CBC4] p-1 text-center placeholder:text-[#26A69A] text-[#26A69A] font-semibold"
                id="password"
                type="password"
                placeholder="Password ..."
                {... register("password") }
              />
            </div>
            <div className=" ">
     
              <input
                className="outline-none  bg-transparent border-b border-[#80CBC4] p-2 text-center placeholder:text-[#26A69A] text-[#26A69A] font-semibold"
                id="birthday"
                type="date"
                placeholder="Birthday ... "
                {... register("birthday") }
                // {...register("email", validationEmailInput)}
              />
            </div>
          </section>
      

        <section className="flex justify-center gap-8">
          <button className=" rounded-md text-[#43A49B] bg-[#263339] py-2 px-2">
            {isUserToUpdate ? "Update" : "Create "}
          </button>
          <button type="button" onClick={handleClear} className="rounded-md  text-[#43A49B] bg-[#263339] py-2 px-2">
            Borrar
          </button>
        </section>
      </form>
    </section>
  );
};

export default ModalCreateUpdate;
