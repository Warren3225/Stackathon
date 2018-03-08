import dragula from 'react-dragula'

const drake = {
  gridDrake: dragula({
    moves: false,
    isContainer: true,
  }),
  crateWallDrake: dragula({
    copy: true,
  }),
}

export default drake;
