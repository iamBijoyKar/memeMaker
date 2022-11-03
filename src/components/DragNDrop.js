
import uploadImg from './../media/upload.png';
import styled from 'styled-components';
import { useCallback, useState } from 'react';
import {  useDropzone } from 'react-dropzone'
import './DragNDrop.css';

const Dropzone = styled.div`
width : 100%;
height : 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

function ImageDropZone({ value , onChange }){
    let imgSrc = null
    const [loading, setLoading] = useState(false)

    const onDrop = useCallback((acceptedfiles) =>{
        console.log(acceptedfiles)
        const file = acceptedfiles[0]
        const reader = new FileReader()
        reader.addEventListener('load',(e)=>{
            // console.log(reader.result)
            imgSrc = reader.result
            let img = document.createElement('img')
            img.src = e.target.result
            let invisibles = document.querySelectorAll('.invisible')
            invisibles.forEach(invisible =>{
                invisible.classList.add('none')
            })
            img.id ='previewImg'
            // console.log(img)
            document.querySelector(Dropzone).appendChild(img)
        }, false)
        reader.readAsDataURL(file)
        
        
        // setLoading(true)
        // uploadImage(acceptedfiles[0])
        //     .then((json) => onChange(json.url))
        //     .finally(()=> setLoading(false))
    },
    [] )

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop,
        multiple: false,
        accept: 'image/*'
    })
    return(

        <Dropzone {...getRootProps()}>
            <input {...getInputProps()} />
                <img src={uploadImg} alt={ 'uplaod icon' } id="upload-img" className='invisible' />
                <h2 id='canvas-heading' className='invisible'>Drag and Drop to Upload file</h2>
                <span className='invisible'>Or Click</span>
                {/* {imgSrc!=null? <img src={imgSrc}/> : console.log(imgSrc)} */}
        </Dropzone>

    )

}

export default ImageDropZone


// <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
//                     {({getRootProps, getInputProps}) => (
//                         <section>
//                         <div {...getRootProps()}>
//                             <input {...getInputProps()} />
//                             <img src={uploadImg} alt={ 'uplaod icon' } id="upload-img" />
//                             <h2 id='canvas-heading'>Drag and Drop to Upload file</h2>
//                             <span>Or</span>
//                             <button>Browse File</button>
//                             <input type='file' className='canvas-input' name='image-file' />
//                         </div>
//                         </section>
//                     )}
//                     </Dropzone>
