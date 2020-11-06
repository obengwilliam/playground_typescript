 // interface
// interface Iuser {
//   firstname: string
//   surname: string 
// }

// implements an user
// const user:Iuser = {
//   firstname: "william",
//  surname: "obeng",
//  maidenName: "amoakoa"
// }


// extend Iuser
// interface Iuser {
//   maidenName: string
// }

// Interface signature
// interface Iuser {
//   name: string ;
//   [property:string]: any
// }

// const user:Iuser = {
//  name: 'william',
//  surname: "kfoi"
// }
//


// Interface Extend
interface  Iuser {
  name: string
}

interface Iperson extends Iuser {
  surname: string
}


const person: Iperson = {
  surname:"done",
  name: "william"
}

