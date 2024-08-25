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
      const res = await instance.get(`${import.meta.env.VITE_CHAT_URL}/chat`,{
        params: {message}
      });
      if(res){
        if(res.data.response) {
          setChatData((prev) => [...prev, res.data.response]);
        }else if (res.data.answer){
          setChatData((prev) => [...prev, res.data.answer]);
        }else {
          setChatData((prev)=>[...prev,'챗봇이 답을 찾지 못했어요. 나중에 다시 시도해 주세요.']);
        }
        
        if(res.data.recommend) {
          setRecommend(res.data.recommend);
        }else{
          setRecommend(res.data.recommand);
        }
      }
      setLoading(false);
    }catch{
      setChatData((prev)=>[...prev,'챗봇 시스템에 에러가 발생했습니다.']);
    }
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