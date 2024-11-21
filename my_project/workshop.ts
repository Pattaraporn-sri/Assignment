//สร้างชนิดของข้อมูลเพื่อมากำกับ Object นี้ (ชนิดข้อมูลของ gender เป็น enum)

//enum obj = {
// key = "value",'string',boolean
//}

//ข้อ 1 //
enum gender {
    male = 'men',
    female = 'women',
}

type  tiger = {
  name : string ;
  fly : boolean ;
  gender : gender;
  leg : number ; 
  swim : boolean;
} 

const Animal1: tiger = {
    name : "tiger" ,
    fly : false,
    gender: gender.male,
    leg: 4,
    swim: true
}

//ข้อ2  สร้างชนิดของข้อมุลเพื่อมากำกับ object สอง object นี้ โดยใช้ชนิดข้อมุลเดียวกัน/ 

interface People{
    name: string;
    age: number;
    gender: gender;
    hobbie : string | string[];
    job?: string 
}
const People1: People = {
    name: "peter",
    age: 20,
    gender: gender.male,
    hobbie: ["watch movie","swimming"]
}

const People2: People = {
    name: "alex",
    age: 18,
    gender: gender.female,
    hobbie: "play game",
    job: "doctor"

}

//ข้อ 3 สร้างชนิดของข้อมูลเพื่อมากำกับ Object สอง Object นี้ โดยใช้ชนิดข้อมูลเดียวกัน

enum TypePokemon {
    Fire = 'fire',
    Flying = 'flying',
    Grass = 'grass'
}
interface Pokemon {
    name: string,
    gender: gender,
    height: number,
    weight: number,
    Location_area_encouunters: string,
    movie: { 
        name: string,
        effect: string
    }[],
    type: TypePokemon | TypePokemon[]
    held_item: {
        name: string,
        start: {
            armor: number,
            damage: number,
            hp: number,
            speed: number
        }
    }

}
const Pokemon1 = {
    name: "Charlizard",
    gender: "female",
    height: 200,
    weight: 200,
    Location_area_encouunters: "forest",
    moves: [
        {
            name: "flying",
            effect: "cannot take damage from ground"
        }
    ],
    type: [TypePokemon.Fire, TypePokemon.Flying]
}

const Pokemon = {
    name: "babalsor",
    gender: "female",
    height: 200,
    weight: 200,
    Location_area_encouunters: "forest",
    moves: [
        {
            name: "kick",
            effect: "deal damage 50"
        }
    ],
    type: TypePokemon.Grass,
    held_item: [
        { name: "glove",
            start:{
                armor: 20,
                damage: 10,
                hp: 200,
                speed: 200
            }
        }
    ]
}

