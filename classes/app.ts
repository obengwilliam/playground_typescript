interface Ip {
  name: string
}

interface IHero extends  Ip{
  powers: string [ ]
}

abstract class Human implements Ip{
  name: string

  constructor (name: string) {
    this.name = name
  }

  abstract greet(): string 
}


class Person extends Human  {
  constructor(name:string){
    super(name)
  }

  greet(){
    return `Hello ${this.name}`
  }
}


class Hero extends Person implements IHero {
  powers: string []  = []
  
  constructor(name:string) {
    super(name)
  }

  addPower( power:string ):string {
       this.powers.push(power)
       return power 
  }

  listPowers () : string [] {
    return this.powers  
  }
}



const e = new Hero("batman")

e.addPower("flying")
e.addPower("dance")

console.log(e.listPowers())
