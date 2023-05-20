import React from 'react'
import { useCallback} from "react"
import Quill from "quill"
import "quill/dist/quill.snow.css"

const TOOLBAR_OPTION=[
  [{header:[1,2,3,4,5,false]}],
  [{font:[]}],
  ["bold","italic","underline"],
  [{edit:[]}]
  [{color:[]},
  {background:[]}],
  [{align:[]}],
]

export default function Texteditor() {
    const wrapperRef = useCallback(wrapper => {
        if (wrapper == null) return
    
        wrapper.innerHTML = ""
        const editor = document.createElement("div")
        wrapper.append(editor)
        new Quill(editor, {
          theme: "snow",modules:{toolbar:TOOLBAR_OPTION}
        })
      }, [])
  return (
    <>
    <div className="back">
    <div className="container" ref={wrapperRef}></div>
    </div>
    <div className="side">
    <img src="profile.png" style={{marginTop:"19px",marginLeft:"14px",width:"40px",height:"40px",borderRadius:"50%",objectFit:"cover",marginRight:"20px"}}/>
            <div className="use" style={{display:"flex",flexDirection:"column",marginTop:"70px",marginLeft:"24px",gap:"2rem"}}>
                <img src="share.png" alt=""/>
                <img src="Google.png" style={{width:"25px",height:"25px",objectFit:"cover",marginRight:"20px"}}/>
                <img src="Google_Keep.png" style={{width:"25px",height:"25px",objectFit:"cover",marginRight:"20px"}}/>
                <img src="download.png" style={{width:"25px",height:"25px",objectFit:"cover",marginRight:"20px"}}/>
                <img src="Google_Contacts.png" style={{width:"25px",height:"25px",objectFit:"cover",marginRight:"20px"}}/>
                <img src="googlemaps.jpg" style={{width:"25px",height:"25px",objectFit:"cover",marginRight:"20px"}}/>
                
            </div>

            <div style={{marginTop:"50px",marginLeft:"24px"}}>
            <img src="add.png" style={{width:"25px",height:"25px",objectFit:"cover",marginRight:"20px"}}/>
            </div>
        </div>
    </>
  )
}
