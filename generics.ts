
// interface  Iu  {
//   name:string
//   surname:string
// }

// interface  Iun  {
//   name:number
//   surname:number
// }

// interface value {
//   name: number | string
// }
// function getGenericHead<T extends value> ( persons: T [] ): string|number {
//   return persons.map( value=>value.name )[0]
// }

// function getHeads( persons: Iu [] ):string {
//   return persons.map( value=>value.name )[0]
// }


// console.log(getHeads( [{
//   name:"william",
//   surname:"obeng"
// }] ))


// function getHeadsN (persons: Iun []): number {
//   return persons.map(value=>value.name) [0]
// }

// console.log(getHeadsN([{
//   name: 4,
//   surname: 6
// }]))
//
//

function good(value:number) : Promise<number>{
  return new Promise((resolve, reject)=>{
    if (value > 2) {
      resolve(value)
    }
    return reject(value)
  })
}

type typeGoodCallback = (v:number)=>Promise<number>

function callGood(good:Promise<number>):Promise<number>{
  return good.then(value=>{
    return value + 1
  })
}

callGood(good(50)).then(console.log)
