// import React from 'react'

import React from 'react'

import Pet from './Pet'




class PetBrowser extends React.Component {

    
  

  render() {
    return this.props.pets.map((pet, idx) => {
      return (
        <div key={idx}  className="ui cards"><Pet  onAdoptPet={this.props.onAdoptPet} pet={pet}  /></div>
      )}
    )
  }
}
  

    
  


export default PetBrowser


// import Pet from './Pet'

// class PetBrowser extends React.Component {
//   render() {
//     return this.props.pets.map((data, idx) => {
//       return (
//         <div key={idx} className="ui cards"><Pet pet={data} onAdoptPet={this.props.onAdoptPet}/></div>
//       )
//     })
    
    
//   }
// }

// export default PetBrowser


