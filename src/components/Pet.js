// import React from 'react'

import React from 'react'



class Pet extends React.Component {

  renderAdoptedView = () => {
    if (this.props.pet.isAdopted === true){
      return this.petAdoptedView()
    } else {
      return this.petNotadoptedView()
    }
  }
  
  petAdoptedView = () =>  {
      return <button className="ui disabled button">Already adopted</button>
  }

  petNotadoptedView = () =>  {
     return <button onClick={() => this.props.onAdoptPet(this.props.pet.id)} className="ui primary button">Adopt pet</button>
  }




  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            { this.props.pet.gender === "male" ? '♂' : '♀'  }
           {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date"> {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age:  {this.props.pet.age}</p>
            <p>Weight:  {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.renderAdoptedView()}
          {/* <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button">Adopt pet</button> */}
        </div>
      </div>
    )
  }
}

export default Pet



// class Pet extends React.Component {


//   renderAdoptedView = () => {
//     console.log(this.props.pet)
//     if (this.props.pet.isAdopted === true){
//       return this.petAdoptedView()
//     } else {
//       return this.petNotadoptedView()
//     }
//   }
  
//   petAdoptedView = () =>  {
//       return <button className="ui disabled button">Already adopted</button>
//   }

//   petNotadoptedView = () =>  {
//      return <button onClick={() => this.props.onAdoptPet(this.props.pet.id)} className="ui primary button">Adopt pet</button>
//   }

  
//   render() {
//     return (
//       <div className="card">
//         <div className="content">
//           <a className="header">
//             {this.props.pet.name}
//             {this.props.pet.gender === `male` ? "♂" : "♀"}
//           </a>
//           <div className="meta">
//             <span className="date">{this.props.pet.type}</span>
//           </div>
//           <div className="description">
//             <p>Age: {this.props.pet.age} </p>
//             <p>Weight: {this.props.pet.weight}</p>
//           </div>
//         </div>
//         <div className="extra content">
//           {this.renderAdoptedView()}
//           {/* <button className="ui disabled button">Already adopted</button>
//           <button className="ui primary button">Adopt pet</button> */}
//         </div>
//       </div>
//     )
//   }
// }

// export default Pet
