// function handleInputChange(e) {
//   let target = e.target
//   if (e.target.type !== 'range') {
    // target = document.getElementById('range')
//   } 
//   const min = target.min
//   const max = target.max
//   const val = target.value
//   
//   target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
// }
// 
// const script = document.currentScript;
// const sliderId = script.dataset.sliderId;
// const slider = document.getElementById(sliderId);
// slider.addEventListener('input', handleInputChange)
// 

function handleInputChange(e) {
    let target = e.target
    if (e.target.type !== '<input type="range">') {
        target = document.getElementById('volume')
    }
    const min = target.min
    const max = target.max
    const val = target.value
    target.style.backgroundSize = (val - min) * 100 / (max - min) + "%"
}
const script = document.currentScript;
const sliderId = script.dataset.sliderId;
const slider = document.getElementById(sliderId);
slider.addEventListener('input', handleInputChange)