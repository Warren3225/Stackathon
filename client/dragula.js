import dragula from 'react-dragula'
import { createPieceThunk, deletePieceThunk, fetchAllPieces } from './store/pieces';
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

//drake.on(drag) delete obj at source x, y
// drake.on('drag', (el, source) => {
//
//   store.dispatch(deletePieceThunk(xCoord, yCoord))
// })

drake.on('drop', (el, target, source) => {
  console.log('drop');

  let sourceClasses = [...source.classList];
  let xCoord = 'unset';
  let yCoord = 'unset';
  sourceClasses.forEach(elem => {
    if (elem[0] === 'x') {
      xCoord = +elem.slice(2)
    } else if (elem[0] === 'y') {
      yCoord = +elem.slice(2)
    }
  })

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
  if (xCoord > 0 && yCoord > 0 || xCoord === 'unset' && yCoord === 'unset'){
    if (xCoord === 'unset' && yCoord === 'unset'){
      store.dispatch(createPieceThunk(objToPass)).then(
        store.dispatch(fetchAllPieces())
      )
    } else {
    store.dispatch(deletePieceThunk(xCoord, yCoord))
    store.dispatch(createPieceThunk(objToPass)).then(
      store.dispatch(fetchAllPieces())
    )
    }
  }
})

// drake.on('drop', () => { store.dispatch(fetchAllPieces()) })

export default drake;
