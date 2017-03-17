class Entry extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      months:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      month:''
    }
  }

  componentWillMount () {
    this.setState ({
      month:this.props.date.slice(5,7)
    })
  }


  render () {
    return (
      <tr className='entry row'>
        <td className='listenDate col-md-1'>
          <span className='month'><h4>{moment.months(this.state.month - 1)}</h4> </span>
          <span className='day'><h4>{this.props.date.slice(8, 10)}</h4></span>
          <br></br>
          <span className='year'>{this.props.date.slice(0,4)}</span>
        </td>
        <td className='albumArt col-md-1'>
          <img src={this.props.art_url100} />
        </td>
        <td className='albumInfo col-md-2'>
          <div>
            <h3>{this.props.title}</h3>
            <h4>{this.props.artist}</h4>
            <p>{this.props.year}</p>
            <p>{this.props.genre}</p>
          </div>
        </td>
        <td className='impression col-md-6'>{this.props.impression}</td>
        <td className='rating col-md-2'>{this.props.rating}</td>
        <UpdateBox impressionId={this.props.impressionId}
                   date={this.props.date}
                   impression={this.props.impression}
                   rating={this.props.rating}
                   updateUserEntries={this.props.updateUserEntries}
                   getUserEntries={this.props.getUserEntries}
                   deleteUserEntries={this.props.deleteUserEntries}/>
      </tr>
    )
  }
}

window.Entry = Entry;
