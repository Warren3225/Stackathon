import dragula from 'react-dragula'
import { createPieceThunk } from './store/pieces';
import axios from 'axios';
import store from './store/index'

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
