import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

    adoptPet = (id) => {
    console.log("Adopt button clicked")


    //find the index of the pet 
    const foundID = this.state.pets.findIndex(pet => pet.id === id)

    //find the object of the pet
    const found = this.state.pets.find(pet => pet.id === id)

    //make a shallow copy of the pets

    let pets = [...this.state.pets]

    //replace property I'm interested in
    found.isAdopted = true;
    
    // put it back into the array
    pets[foundID] = found

    //set the state of the new copy
    this.setState({pets})



    // this.setState((previousState) => {
    //   return {
    //     pets: this.state.pets.splice(foundID)
    //   }
    // });

    // this.setState((previousState) => {
    //   return {
    //     pets: this.state.pets.splice(foundID, 0, found )
    //   }
    // })
    
    console.log(this.state.pets)


  }

  onChangeType = (event) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: `${event.target.value}`
      }
    })
  }


  fetchPets = () => {
    console.log("fetching start")
    let endpoint = "/api/pets"

    if (this.state.filters.type !== "all"){
      endpoint +=  "?type=" + `${this.state.filters.type}`
    } 
  
    fetch(endpoint)
    .then(response => response.json())
    .then(petData => this.setState({pets: petData}))}

  
  

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App






































// import React from 'react'

// import Filters from './Filters'
// import PetBrowser from './PetBrowser'

// class App extends React.Component {
//   constructor() {
//     super()

//     this.state = {
//       pets: [],
//       filters: {
//         type: 'all'
//       }
//     }
//   }

        
//       //old object out of pets array

//       //add new one and replace it with state

//   adoptPet = (id) => {
//     console.log("Adopt button clicked")


//     //find the index of the pet 
//     const foundID = this.state.pets.findIndex(pet => pet.id === id)

//     //find the object of the pet
//     const found = this.state.pets.find(pet => pet.id === id)

//     //make a shallow copy of the pets

//     let pets = [...this.state.pets]

//     //replace property I'm interested in
//     found.isAdopted = true;
    
//     // put it back into the array
//     pets[foundID] = found

//     //set the state of the new copy
//     this.setState({pets})



//     // this.setState((previousState) => {
//     //   return {
//     //     pets: this.state.pets.splice(foundID)
//     //   }
//     // });

//     // this.setState((previousState) => {
//     //   return {
//     //     pets: this.state.pets.splice(foundID, 0, found )
//     //   }
//     // })
    
//     console.log(this.state.pets)


//   }


//   // this.setState({
//   //   filters: {
//   //     ...this.state.filters,
//   //     type: e.target.value
//   //   }
//   // })


//   onChangeType = (e) => {
//     console.log("Firing")
//     this.setState({
//       filters: {
//         ...this.state.filters,
//         type: e.target.value
//       }
//     })

//   }


//   fetchPets = () => {
//     let endpoint = '/api/pets';

//     if (this.state.filters.type !== 'all') {
//       endpoint += `?type=${this.state.filters.type}`;
//     }

//     fetch(endpoint)
//       .then(res => res.json())
//       .then(pets => this.setState({ pets: pets }));
//   };




//   render() {
//     return (
//       <div className="ui container">
//         <header>
//           <h1 className="ui dividing header">React Animal Shelter</h1>
//         </header>
//         <div className="ui container">
//           <div className="ui grid">
//             <div className="four wide column">
//               <Filters onChangeType={this.onChangeType}  onFindPetsClick={this.fetchPets}/>
//             </div>
//             <div className="twelve wide column">
//               <PetBrowser  onAdoptPet={this.adoptPet} pets={this.state.pets} />
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default App
