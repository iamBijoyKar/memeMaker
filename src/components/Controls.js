import './Controls.css';

function DisplayTextUpper(event){
    const text = event.target.value
    document.querySelector('#upper-text').innerHTML = text
}
function DisplayTextLower(event){
    const text = event.target.value
    document.querySelector('#lower-text').innerHTML = text
}
function DisplayColor(event){
    const color = event.target.value
    document.querySelector('#upper-text').style.color = color
    document.querySelector('#lower-text').style.color = color

}
function Controls(){



    return(
        <div className='controls'>
            <input type='text' id='upper-input' onChange={ DisplayTextUpper } placeholder='Enter upper text here'/>
            <input type='text' id='lower-input' onChange={ DisplayTextLower } placeholder='Enter lower text here'/>
            <label for='color-input'>Pick text color : <input type='color' onChange={ DisplayColor } id='color-input'/></label>
            <button id='generate-btn'>Generate</button>
        </div>
    )
}
export default Controls