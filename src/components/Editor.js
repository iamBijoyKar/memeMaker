import './Editor.css';
import uploadImg from './../media/upload.png';

function Editor(){

    function canvasClicked(event){
        const input = document.querySelector('.canvas-input')
        input.click();
        event.stopPropagation();
    }
    function canvasDragOver(event){
        const canvas = document.querySelector('.canvas')
        const uploadImg = document.querySelector('#upload-img')
        uploadImg.classList.add('activate')
        document.querySelector('#canvas-heading').innerHTML = 'Relese to Upload'
        canvas.classList.add('activate')
        console.log('drag over')
        event.stopPropagation();
    }
    function canvasDragEnd(event){
        const canvas = document.querySelector('.canvas')
        const uploadImg = document.querySelector('#upload-img')
        uploadImg.classList.remove('activate')
        document.querySelector('#canvas-heading').innerHTML = 'Drag and Drop to Upload'
        canvas.classList.remove('activate')
        console.log('drag end')
        event.stopPropagation();
    }
    function drop(event){
        // event.preventDefault()
        console.log('drop')
        const file = event.dataTransfer.files[0]
        console.log(file)
    }

    return(
        <section className='section section2'>
            <div className='editor-sec' >
                <div className='canvas' onDragOver={ canvasDragOver } onClick={ canvasClicked } onDragLeave={ canvasDragEnd } onDropCapture = { drop }>
                    <img src={uploadImg} alt={ 'uplaod icon' } id="upload-img" />
                    <h2 id='canvas-heading'>Drag and Drop to Upload file</h2>
                    <span>Or</span>
                    <button>Browse File</button>
                    <input type='file' className='canvas-input' name='image-file' />
                </div>
                <div className='controls'>

                </div>
            </div>
        </section>
    )
}


export default Editor;