import dragula from 'react-dragula'
<<<<<<< HEAD
import createPieceThunk from './store/pieces'
=======
import { createPieceThunk } from './store/pieces';
import axios from 'axios';
import store from './store/index'
>>>>>>> 08ee32d49a34ba4251101dfc599dbf9bf3f6605b

const drake = dragula({
  moves: function (el, source, handle, sibling) {
    if (el.classList.contains('gridSquare')) {
      return false;
    } else {
      return true;
    }
  },
  copy: function (el) {
    if (el.classList.contains('gridSquare') || el.parentNode.classList.contains('gridSquare')) {
      return false;
    } else {
      return true;
    }
  },
  copySortSource: false,
})

<<<<<<< HEAD
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
=======
>>>>>>> 08ee32d49a34ba4251101dfc599dbf9bf3f6605b

drake.on('drop', (el, target) => {
  let classes = [...target.classList];
  let objToPass = {}
  classes.forEach(elem => {
    if (elem[0] === 'x') {
      let xValue = +elem.slice(2)
      objToPass.positionX = xValue;
    } else if (elem[0] === 'y') {
      let yValue = +elem.slice(2)
      objToPass.positionY = yValue;
    }
  })
  if (el.classList.contains('crate')) {
    objToPass.wallOrCrate = 'crate';
  } else if (el.classList.contains('wall')) {
    objToPass.wallOrCrate = 'wall';
  }
  store.dispatch(createPieceThunk(objToPass))

})

export default drake;
