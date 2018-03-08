import dragula from 'react-dragula'
import createPieceThunk from './store/pieces'

const drake = dragula({
    moves: function (el, source, handle, sibling) {
      if (el.classList.contains('gridSquare')){
        return false;
      } else {
        return true;
      }
    },
    copy: function (el) {
      if (el.classList.contains('gridSquare') || el.parentNode.classList.contains('gridSquare')){
        return false;
      } else {
        return true;
      }
    },
    copySortSource: false,
})

// dispatches crate to db
drake.on('drop', (el, target) => {
  let classes = [...target.classList];
  let objToPass = { }
  console.log(classes);
  classes.forEach(elem => {
    if (elem[0] === 'x'){
      let xValue = +elem.slice(2)
      objToPass.positionX = xValue;
    } else if (elem[0] === 'y'){
      let yValue = +elem.slice(2)
      objToPass.positionY = yValue;
    }
  })
  if (el.classList.contains('crate')){
    objToPass.wallOrCrate = 'crate';
  } else if (el.classList.contains('wall')){
    objToPass.wallOrCrate = 'wall';
  }
  createPieceThunk(objToPass);
})


export default drake;
