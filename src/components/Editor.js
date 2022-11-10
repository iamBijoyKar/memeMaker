import './Editor.css';
import ImageDropZone from './DragNDrop';
import Controls from './Controls';
function Editor(){
    function canvasDragOver(event){
        const canvas = document.querySelector('.canvas')
        const uploadImg = document.querySelector('#upload-img')
        uploadImg.classList.add('activate')
        document.querySelector('#canvas-heading').innerHTML = 'Relese to Upload'
        canvas.classList.add('activate')
        // console.log('drag over')
        event.stopPropagation();
    }
    function canvasDragEnd(event){
        const canvas = document.querySelector('.canvas')
        const uploadImg = document.querySelector('#upload-img')
        uploadImg.classList.remove('activate')
        document.querySelector('#canvas-heading').innerHTML = 'Drag and Drop to Upload'
        canvas.classList.remove('activate')
        // console.log('drag end')
        event.stopPropagation();
    }
    function drop(event){
        event.preventDefault()
        const canvas = document.querySelector('.canvas')
        const uploadImg = document.querySelector('#upload-img')
        uploadImg.classList.remove('activate')
        document.querySelector('#canvas-heading').innerHTML = 'Drag and Drop to Upload'
        canvas.classList.remove('activate')
        // canvas.onDrop(
        // console.log('drop')
        // )
        console.log('drop')
        // const file = event.dataTransfer.files[0]
        // console.log(file)
        event.stopPropagation();

    }

    return(
        <section className='section section2'>
            <div className='editor-sec' id='editor' >
                <div className='canvas' onDragOver={ canvasDragOver } onDragLeave={ canvasDragEnd }  >
                    <ImageDropZone />
                </div>
                <div className='controls-container'>
                    <Controls/>
                </div>
            </div>
        </section>
    )
}


export default Editor;