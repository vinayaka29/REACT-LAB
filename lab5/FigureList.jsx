
import {useState} from "react";
import BasicFigure from "./BasicFigure";
import "./FIgureList.css";
const initialImages=[
    {src:"https://tse1.mm.bing.net/th/id/OIP.6eUx9GeH2Eey1NoCEfj80wHaEK?cb=defcachec2&rs=1&pid=ImgDetMain&o=7&rm=3",caption:"Image 1"},
    {src:"https://tse3.mm.bing.net/th/id/OIP.eYxPxe00uJ55CK0EBhj8xAHaFC?cb=defcachec2&rs=1&pid=ImgDetMain&o=7&rm=3",caption:"Image 2"},
    {src:"https://th.bing.com/th/id/OIP.E0xGonUEjsM_wvksOcMpkwHaEI?o=7&cb=defcachec2rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",caption:"Image 3"}
];
const FigureList=()=>{
    const[images,setImages]=useState(initialImages);
    const addImage=()=>{
        const randomId=Math.floor(Math.random()*1000);
        const newImage={
            src:`https://picsum.photos/400/300?random=${randomId}`,
            caption:`Image ${images.length+1}`
        };
        setImages([...images,newImage]);
    };
    const removeImage=(index)=>{
        setImages(images.filter((_,i)=>i!==index));
    };
    return(
        <div className="container">
            <h1>Dynamic image gallery</h1>
            <div className="buttons">
                <button onClick={addImage}>Add image</button>
            </div>
            <div className="gallery">
            {images.map((image,index)=>(
                <BasicFigure key={index} src={image.src}
                caption={image.caption} onRemove={()=>removeImage(index)} />
            ))}
            </div>
        </div>
    );
};
export default FigureList;