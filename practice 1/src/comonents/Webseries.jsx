import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
const Webseries = () => {

    async function apidata(){
       try{
        const data=await axios.get("https://content-jiovoot.voot.com/psapi/voot/v1/voot-web/content/specific/editorial?query=include%3Aa25a331db61a3ebf4ab31692d45c518b&source=CMS&discounting=false&aspectRatio=3x4&responseType=common")
        console.log(data.data)
        console.log(data?.data?.result[0]?.line1);
        console.log(data?.data?.result[0]?.languages[0]);
        console.log(data?.data?.result[0]?.deeplinkUrl);
       } catch (error) {
            console.log("oops error was found",error);
       }
    }

    useEffect(() =>{
        apidata();
    },[]);

  return (
    <div>

    </div>
  )
}

export default Webseries
