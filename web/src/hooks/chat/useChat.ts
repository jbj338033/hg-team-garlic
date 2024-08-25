import { useState } from "react"
import instance from "../../libs/axios/customAxios";

const useChat = () => {
  const [chatData, setChatData] = useState<string[]>([]);
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleMessage = (e:React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  }

  const submit = async () => {
    setChatData((prev)=>[...prev,message]);
    setMessage("");
    setLoading(true);
    try{
      const res = await instance.post(`${import.meta.env.VITE_API_URL}/chatbot`,{
        message
      });
      if(res){
        setChatData((prev)=>[...prev,res.data.answer]);
      }
    }catch{
      setChatData((prev)=>[...prev,'챗봇 시스템에 에러가 발생했습니다.']);
    }
    setLoading(false);
  };


  return {
    chatData,
    handleMessage,
    submit,
    message,
    loading
  }
}

export default useChat