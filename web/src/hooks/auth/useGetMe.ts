import { useState } from "react"
import { UserType } from "../../types/user/user.type";
import instance from "../../libs/axios/customAxios";

const useGetMe = () => {

  const [user,setUser] = useState<UserType>();

  const getMe = async () => {
    const res = await instance.get('/users/me');
    if(res){
      setUser(res.data);
    }
  }

  return {
    getMe,
    user
  }
}

export default useGetMe