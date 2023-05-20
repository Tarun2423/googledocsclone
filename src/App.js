import Texteditor from "./Texteditor";

function App() {
  return (
    <div className="App">
      <div className="nav">
      <div className="glogo">
      <span className="material-symbols-outlined" style={{fontSize:"50px",marginLeft:"14px"}}>
description
</span>
<div style={{display:"flex",flexDirection:"column",marginTop:"18px",gap:"1px"}}>
<span style={{fontSize:"20px",padding:"0"}}>Untitled document  *</span>
<div  className="option" style={{display:"flex",flexDirection:"row",fontSize:"14px",gap:"1em",marginBottom:"11px"}}>
<p>Files</p>
<p>Edit</p>
<p>View</p>
<p>Insert</p>
<p>Format</p>
<p>Tools</p>
<p>Extensions</p>
<p>Help</p>
</div>

</div>

</div>
<div className="profile">
<span class="material-symbols-outlined"   style={{marginRight:"20px"}}>
chat
</span>
<span class="material-symbols-outlined"  style={{marginRight:"10px"}}>
video_camera_front keyboard_arrow_down
</span>
<div className="share" style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",alignContent:"center",gap:"10px",marginLeft:"12px",marginRight:"20px",borderRadius:"20px",width:"110px",height:"41px",backgroundColor:"rgb(140, 211, 231)"}}>
<span class="material-symbols-outlined">
lock 
</span>
<p>share</p>
</div>

</div>
        
      </div>
     <Texteditor/>
    </div>
  );
}

export default App;
