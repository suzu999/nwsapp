import React from 'react';
import BackImage from "../Resaurce/10.jpg"

export const Back = () => {
    return(
        <div className='mm'>
            <div style={{backgroundColor:"yellow", width:"100px", height:"100px"}}>첫번째 공간</div>
            <div style={{border: "2px dashed red", width:"150px", height:"100px"}}>두번째 공간</div>
            <div style={{borderRight: "30px double", width:"fit-content", fontSize: "100px"}}>borderRight Double</div>
            <div style={{borderLeft: "2px solid", width:"100px", fontSize: "100px"}}>borderRight Solid</div>

            <div style={{borderLeft: "20px ridge rgba(101, 300, 50, 0.9)", width:"100px", fontSize: "100px"}}>RGBA</div> 
            {/* a -> 1에 가까울수록 불투명()*/}

            <div className='align'style={{backgroundColor:"yellow", width:"500px", height:"200px"}}>
                <div className='a' style={{alignSelf:'stretch', backgroundColor:'grey'}}>1</div>
                <div className ='b' style={{alignSelf:'center', backgroundColor:'grey'}}>2</div> 
                <div className ='c' style={{alignSelf:'stretch', backgroundColor:'grey'}}>3</div>
                <div className ='d' style={{alignSelf: 'flex-end', backgroundColor:'grey'}}>4</div>  
            </div>


            <div>
                <h1 style={{fontSize: "60px"}}>My First Heading</h1>
                <p style={{color:"red"}}>My first paragraph.</p>
                <p className='id_1'>My second paragraph.</p>
                <p style={{wordbreak:"break-all"}}>dsfjklsdjf lssjd flsflkjs kljflk sjdflk jsld sdjflksjfl djfk sldfjlsjf</p>

            <img src={BackImage} alt="이미지입니다!"style={{width:"70%", height:"50%", objectFit:'contain'}}/>
             </div>
        </div> 
    )

    

}
