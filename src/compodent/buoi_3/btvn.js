const Componentmobile = (props)=>{
    const{img,title,description,pire}=props
    return <div style={{width:"100%"}} className="ha">
       <div style={{background:"#ffff", padding:"60px 10px ", border:"1px solid rgb(228, 220, 224)"} }>
        <img src={img} style={{width:400, height:400}}/>
       </div>
       <div style={ {border:"1px solid rgb(228, 220, 224)"}}>
        <p style={{fontWeight:500}}>{title}</p>
        <p>{description}</p>
        <p style={{color:"red", fontWeight: "bold"}}>{pire}</p>
       </div>
    </div>
}
export default Componentmobile;