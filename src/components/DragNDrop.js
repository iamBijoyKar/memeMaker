
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
            let visibles =document.querySelectorAll('.visible')
            visibles.forEach(visible =>{
                visible.classList.add('active')
            })
            img.id ='previewImg'
            // console.log(img)
            document.querySelector(Dropzone).appendChild(img)
        }, false)
        reader.readAsDataURL(file)
    },
    [] )

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop,
        multiple: false,
        accept: 'image/*'
    })
    return(

        <Dropzone className='dropzone' {...getRootProps()}>
            <input {...getInputProps()} />
                <img src={uploadImg} alt={ 'uplaod icon' } id="upload-img" className='invisible' />
                <h2 id='canvas-heading' className='invisible'>Drag and Drop to Upload file</h2>
                <span className='invisible'>Or Click</span>
                <h3 id='upper-text' className='visible'></h3>
                <h3 id='lower-text' className='visible'></h3>                
        </Dropzone>

    )

}

export default ImageDropZone