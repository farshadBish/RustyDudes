import { useEffect, useState } from "react"
import TimerPage from "./TimerPage"
import "../Styles/loader.css"
import ContentPage from "./ContentPage"
import Footer from "./Footer"



const ComingSoonpage = () =>{

    const [loading,setLoading] = useState(true)

    useEffect(()=>{
      setTimeout(()=>{
        setLoading(false);
      },3200)
    },[])
    return(
        <div style={loading === true ? {backgroundColor:"black",width:"100%",height:"100vh"} : {backgroundColor:"black"}}>
        {loading === true ? <div id="load">
  <div>G</div>
  <div>N</div>
  <div>I</div>
  <div>D</div>
  <div>A</div>
  <div>O</div>
  <div>L</div>
</div> :<><TimerPage/>
      <ContentPage/>
      <Footer/>
      </>}
        </div>
    )
}

export default ComingSoonpage