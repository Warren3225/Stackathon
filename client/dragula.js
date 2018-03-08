import dragula from 'react-dragula'

const drake = dragula([], {
    isContainer: function (el) {
      console.log(el.classList)
      if(el.classList.includes('gridSquare')){
        return true;
      }else {
        return false;
      }
    },
      moves: function (el, source, handle, sibling) {
        if(el.classList.includes('gridSquare')){
          return false;
        }else {
          return true;
        }
    },
})

export default drake;
