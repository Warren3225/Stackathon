export default class Wall extends Component {
  constructor(){
    super()
  }

  componentDidMount() {
    var container = React.findDOMNode(this);
    dragula([wallContainer]);
  }

  render(){
    return (
      <div className="wallContainer">
        <div className="wall">
        </div>
      </div>
    )
  }
}
