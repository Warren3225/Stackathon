import dragula from 'react-dragula'

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

drake.on('drag', () => console.log(drake.containers))


export default drake;
