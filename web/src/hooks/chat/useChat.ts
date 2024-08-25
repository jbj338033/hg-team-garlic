import { RefObject, useEffect, useState } from "react"
import instance from "../../libs/axios/customAxios";

const useChat = (ref:RefObject<HTMLDivElement>) => {
  const [chatData, setChatData] = useState<string[]>([]);
  const [message, setMessage] = useState<string>('');
  const [recommend,setRecommend] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleMessage = (e:React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  }

  useEffect(()=>{
    if(ref && ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  },[chatData])

  const submit = async () => {
    if(message.trim() === '') {
      return;
    }
    setChatData((prev)=>[...prev,message]);
    setMessage("");
    setLoading(true);
    try{
      const res = await instance.post(`${import.meta.env.VITE_API_URL}/chatbot`,{
        message
      });
      if(res){
        setChatData((prev)=>[...prev,res.data.response]);
        setRecommend(res.data.recommend);
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
    setMessage,
    recommend,
    loading
  }
}

export default useChat