import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return this.props.pets.map((data, idx) => {
      return (
        <div key={idx} className="ui cards"><Pet pet={data}/></div>
      )
    })
    
    
  }
}

export default PetBrowser

// class PetBrowser extends React.Component {
//   render() {
//     return (<div> {this.props.pets.map((pet,idx) => 
//     {
//       return (
//       <div className="ui cards"><Pet pet={pet}/></div>)}</div>)
//       )
//     }
//     // <div className="ui cards"><Pet /></div>
//   }
// }

