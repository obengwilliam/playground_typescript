// Array
// const names:string[] = ["william", "kofi"]
// const dates:(string|number)[] = ["william", "kofi"]
// const nums:Array<string|number> = [1, 'good']



// console.log('names', names)
// console.log('nums', nums)
//
//


// Tuple
// fixed Arrays
//
// let mixed:[string , number]

// mixed = ["grace", 0]
// console.log(mixed[0],'ellllkkk')
// console.log(mixed[0].toUpperCase())


// Enum

// enum daysOftheWeek{sunday=1, monday, tuesdaym, wednesday, thursday}

// const today:daysOftheWeek = daysOftheWeek.thursday

// console.log(today, 'good')
//
//

// Any
// const num:any = 4
// const hey: any = [1, "kofi"]

// console.log(num, hey)
//


//Never

// function goodError ():never {
//   while(true) {
//     console.log('good')
//   }
// }

// const b = goodError()
//
//


// Null And Undefined Types
//
// const number:undefined: undefined
// const number:void: void
//


// Void

// function a ():void {
//   console.log('shit')
// }

// a() 

// Function types
// function a (b:string, c:string):string{
//  return b + c
// }


// Types Aliases types

// type kofi  = {
//  kofi:string,
//  ama: number
// }


// const b:kofi  = {
//   kofi: "jamaes",
//   ama: 4
// }

// Type Assertions
// const d = {};
// (<kofi>d).ama = 4;
// (<kofi>d).kofi = "string" 


// console.log(d) 


const b:{
  name:string
  surname: number
} = {
  name: "obeng",
  surname: 2
}

