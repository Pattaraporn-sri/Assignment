//Block Scope (let/constant)

let x = 1
let y = 50
if (x === 10){
    let y = 500
    console.log("y ใน =" +y);
}
console.log("y นอก =" +y);

//arrow fucntion
//แบบเดิม
 
function fullname(fname,lname){
    return fname+lname
}

console.log(fullname('Pattaraporn','Sritirat'));

//แบบใหม่ ลบfunction ออก  ใช้ในกรณีที่คำสั่งไม่เยอะ
fullname = (fname,lname) =>  fname+lname;

setAge= (age) => "อายุ :" +age;

console.log(fullname('Patiparn','Wongnonghoi'));

console.log(setAge(23));

//Object

//แบบเก่า
const customer = { // ประกาศตัว const เป็น customer
    customerName : "Pattaraporn",//property หลัง : คือค่าที่เก็บใน property
    age : 21,
    address : "ขอนแก่น" //การสร้างตัว object
}

console.log(customer); //แสดง object customer

//แบบใหม่

//ตัวแปรเก้บข้อมูล 
const username = "Pattaraporn";
const age=21;
const address = "ขอนแก่น";

const customer = {
    customerName : username, //สามารถนำเอาตัวแปรข้างบนมากำหนดใน property ของ object cutomer ได้เลย
    age : age, //ถ้าตัวแปรกับ property มีค่าที่เหมือนกัน สามารถยุบเขียนแค่ตัวเดียวได้ age ตัวข้างหน้าเป็น property : age ข้างหลังเป็น ตัวแปร  ยุบแล้วเขียนแค่ age ได้
    address : address

    //หรือเขียนรวบเป็นบรรทัดเดียวได้
    const customer = {customer:username,age,address};

    //showData
    const customer = {customer:username,
        age,
        address
        showData(){
            console.log("ข้อมูลลูกค้าชื่อว่า :" + customerName);
        }
    };

    console.showData() //method showData เข้าไปที่ customer ก่อน แล้วไปที่ showData
}

//String
//multiline
const address = `ชื่อลูกค้า : ยาหยี 
ที่อยู่ : 555/5 
ถนน บลา 
จังหวัด ขอนแก่น 
เบอร์ 1354`
console.log(address); //รันออกมาข้อความจะมีหลายบรรทัด ถ้าไม่ใช้ backtick จะรันไม่ได้

//interporation
let customerName = "เด็กหญิง"

const address = `ชื่อลูกค้า : ${customerName} //สามารถเอาตัวแปรเข้ามาแทรกในชุดข้อความยาวๆได้ แต่ต้องทำใน backtick
ที่อยู่ : 555/5 
ถนน บลา 
จังหวัด ขอนแก่น 
เบอร์ 1354`

console.log(address);

//Spread operator
const colors = ["เขียว","น้ำเงิน","ขาว"]
const allColors = ["แดง","เทา",...colors] //กระจายสมาชิกข้างในใช้สัญลักษณ์ จุด3จุด

//ทำแบบนี้ก็ได้ การ push
const newColors = ["ดำ","เทา"]
allColors.push(...newColors)//ใส่จุด 3 จุด เพื่อต้องการเอาสมาชิกที่อยู่ใน array newcolorเข้ามาใส่ใน array allcolor เพื่อกระจายข้อมูบเข้าไป ไม่เอาไปทั้งก้อน ["ดำ","เทา"]
//เป็นการเพิ่มข้อมูลเข้าไปใน array push สามารถส่ง element ที่เป็นค่าเดี่ยว เป็นสมาชิก หรือข้อมูลทั้งก้อนส่งเข้าไปใน array

console.log(allColors);

//DefaultParameter เป็นการกำหนดค่าเริ่มต้นให้กับตัวพารามิเตอร์ที่อยู่ในฟังก์ชันของเร่า

getDataCutomer = (customerName,customerAddress) => {
  if (!customerAddress){
    customerAddress = "กรุงเทพมหานคร"
  } // กรณีที่ลูกค้าไม่ได้กรอกที่อยู่จะให้เป็นกรุงเทพอัตโนมัติเลย

  const address = `ชื่อลูกค้า : ${cutomerName}
  ที่อยู่ ${customerAddress}`
  return address
}

//การเรียกใช้ฟังก์ชันแล้วส่งข้อมูลเข้าไป
console.log(getDataCutomer("ภัทราพร","ขอนแก่น 44/1"));
console.log(getDataCutomer("ยาหยี")); // มีแค่ชื่อลูกค้าไม่มีื่อที่อยู่ ที่อยู่ก็จะ undefinded ดังนั้นต้องทำเงื่อนไข if

//DefultParameter 
//กรณีที่มี if เราไม่ต้องไปกำหนด ยุบแล้วย้ายไปใส่ใน Parameter addess ได้เลย 
getDataCutomer = (customerName,customerAddress = "กรุงเทพมหานคร") => {

  // if (!customerAddress){
  //   customerAddress = "กรุงเทพมหานคร"
  // }

  const address = `ชื่อลูกค้า : ${cutomerName}
  ที่อยู่ ${customerAddress}`
  return address
}
console.log(getDataCutomer("ภัทราพร","ขอนแก่น 44/1"));
console.log(getDataCutomer("ยาหยี"));

//join concat
const data = [100,200,300]
console.log(data)

//การแปลง array เป็น string 
//result จะเก็บผลลัพธ์จากการแปลง array ให้กลายเป็น string
const result = data.join()
console.log(result) //หรือ// 
console.log(data.join())

//concat การต่อสมมาชิกภายใน array
const data1 = [100,200,300]
const data2 =[400,500]

const alldata = data1.concat(data2) //นับสมาชิกใน data1 กับ data2 มาต่อกันแล้วเก็บไว้ใน alldata

console.log(alldata)

//เพิ่มและลบสมาชิกใน array 
// push pop shift unshift

//push การนำเอาสามาชิกไปเขียนต่อท้าย
const data = [10,20,30]
console.log(data)

data.push(500) //เข้าไปที่ array data แ้ล้วเพิ่มสมาชิกเข้าไป โดยใช้ push
data.push(1000) //เพิ่มสมามชิกเข้าไแ้รื่อยๆได้
data.push (...[20,300,500,5000]) //เพิ่มสมาชิกเข้่ไปในรูปแบบ array แต่ตอนที่รัน มันถูกเอาออกไปทั้งก้อน เลยต้องเอาจุด 3 จุดมาใส่เพื่อให้ข้อมูลมันกระจาย
console.log(data)

//pop การนำเอาสมาชิกตัวที่อยู่ท้ายสุดออกไปจาก Array ลบทิ้ง
const data = [10,20,30]
data.push (...[20,300,500,5000]) 
console.log(data)

data.pop()
data.pop()// pop 2ครั้ง ตัวท้ายสุดก็จะออกไปอีกตัว
console.log(data)

//shift การลบเอาสมาชิกด้านหน้าออกไป
data.shift()
data.shift() // ลบตัวข้างหน้าออกไปอีกเรื่อยๆ
console.log(data)

//unshift ใส่ข้อมูลตัวข้างหน้า
data.unshift(999) //ตัวเลขที่จะใส่เข้าไปข้างหน้า array
console.log(data)


//splice & slice 
//splice (ตำแหน่งที่จะเริ่มต้นลบ , จำนวนที่จะลบ,สมาชิกที่ต้องการแทรกเข้าไปในตำแหน่งที่ลบ)
//slice (ตำแหน่งเริ่มต้น , ตำแหน่งสุดท้าย-1) 

const data = [ 10,20,30,40,50]
data.splice(1,3,999) //พอลบเสร็จจะแทรกข้อมูล 999 เข้าไปแทนที่ข้อมูลที่ถูกลบ
//เปลี่ยนแปลงโครงสร้าง array คืิไม่ได้คงสภาพของ array เอาไว้ แต่ข้อมูลที่เหลืจะถูกเก็บอยู่ใน array data เหมือนเดิม

console.log(data);

const data = [ 10,20,30,40,50]
console.log(data);

data.slice(1,3) //ดึงเอาสมาชิกในarray data มาโดยเริ่มต้นที่indexที่ 1 ก่อนถึงindexที่ 3 //ผลัพธ์ได้แบบเดิม เพราะ slice จะทำงานแล้วไม่ไปกระทบกับ array เดิม หรือ array ต้นแบบ ดังนั้นต้องสร้างตัวแปรขึ้นมาหรือหา array ขึ้นมาเพื่อรับค่าจากการดึงสมาชิก 2 ตัวนี้มาใช้

//สร้างตัวแปรขึ้นใหม่
const data = [ 10,20,30,40,50]
console.log(data);

const lastdata = data.slice(1,3) //ตัวแปร lastdata จะเป็นarray ที่เก็บผลจากการที่ดึงเอาสมาชิกภายใน array data ที่อยู่ในช่วง indexที่1 ก่อนถึง indexที่ 3 

//for Loop
const data = [10,20,30,40,50]

console.log(data[0]) // การเข้าถึงตัวเลข index
console.log(data[1]) // มันเยอะ

for(let i = 0; i <data.length; i++){ //ตรวจสอบว่า i = 0 และตรวจสอบว่า i น้อยกว่าสมาชิกภายใน array data รึป่าว ถ้า i เป็นจริงก็ให้ทำซ้ำข้างใน
    if (data[i]>=30)  //ถ้าเงื่อนไขตรงนี้เป็นจริง หรือข้อมูลภายใน array ช่องไหนก็ได้ที่มัน >=  30ตามเงื่อนไข จะให้กระโดด (Break) จาก loop เลย ไใ่ต้องเเสดงผลบรรทัดต่อไปออกมา
     break
    console.log(`ลำดบัที่ ${i} = ${data[i]} `);  //กำหนดข้อความว่า ตำแหน่งที่ i มีค่าเท่ากับ data ช่องที่ i   
}
 //การค้นหาข้อมูลใน array 
 //indexof(ข้อมูล) => ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1
 //find(ข้อมูล) => ผลการค้นหาจะได้ข้อมูลที่ค้นเจอ ถ้าค้นไม่เจอจะได้ undefined
 //findIndex(ข้อมูล) => ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1

 //Indexof()
 const Colors = ["แดง","เขียว","น้ำเงิน","ม่วง","ขาว"]
 
 const index = Colors.indexOf("แดง") //สร้างตัวแปรรับค่าเป็น index = เข้าไปที่ array colors ใช้ฟังก์ชัน indexof(ข้อมูลที่ต้องการอยากจะค้น) 
 console.log(index); //ผลลัพธ์จะได้ 0 ตามตำแหน่ง array

 //find()
 const Colors = ["แดง","เขียว","น้ำเงิน","ม่วง","ขาว"]

 const search = Colors.find(element=> element ==="เขียว") //เก็บค่าที่ค้นเจอจะเก็บไปที่ตัวแปร search find(ดึงสมาชิกภายใน array color มาทีละตัวและเอามาเปรียบยเทียบว่า element ที่ทำการค้นเจอมีค่า เท่ากับ (===) สิ่งที่เราค้นเจอรึป่าว)
 console.log(search); //ผลลัพธ์ เขียว

 const search = Colors.findIndex(element=> element ==="เขียว") //เก็บค่าที่ค้นเจอจะเก็บไปที่ตัวแปร search find(ดึงสมาชิกภายใน array color มาทีละตัวและเอามาเปรียบยเทียบว่า element ที่ทำการค้นเจอมีค่า เท่ากับ (===) สิ่งที่เราค้นเจอรึป่าว)
 console.log(search); //ผลลัพธ์ออกมาเป็นตำแหน่งของ index

//Array map 
//เป็นการส่ง array เข้าไป แล้วส่ง array กลับมา
//ความหมายคือ นำ array ที่เรามีอยู่ เอามา map ค่า ทำการสร้าง array ก้อนใหม่ออกมาให้เราใช้งาน
//เปลี่ยนแปลงค่าสมาชิกแต่ละตัวภายใน array แต่ละตัวว่าอยากจะให้เปลี่ยนแปลงค่าด้านในเป็นอย่างไรบ้าง

const numbers = [10,20,30,40]

ืีconst result = numbers.map(element => { //map คือ การนำเอาค่าสมาชิกแต่ละตัวมา map ค่าแล้วสร้างเป็น array ก้อนใหม่ออกมาใช้งาน array ก้อนใหม่ ตั้งชื่อว่า result 
    const a = element*2 //เก็บ element*2 ไว้ใน a
    return a //การใช้ map จะมีการส่ง array ก้อนใหม่ออกมาให้เราใช้งาน
})
console.log(result);

//หรือทำการลดรูป โดยไม่ต้องมาเก็บในตัวแปร a เพราะข้างในมันมีคำสั่งเดียว 
const numbers = [10,20,30,40]

ืีconst result = numbers.map(element => element*2)

//อาจไม่ได้ทำงานกับตัวเลขเท่านั้น กับข้อความได้ด้วย
const data = ["ฝนตก","แดดร้อน","ฝนฟ้าคะนอง","แดดร้อน","ฝนตก","อากาศดี","หมอก"]

const result = data.map(e => { //เก็บผลลัพธ์จากการ returnn ค่าไว้ใน array result
    return e //ผลลัพธ์จะบอกเป็นข้อความ
})

console.log(result);

//ต้องการแต่งประโยคใหม่ อยากบอกว่าวันที่ 1 2 3 สภาพอากาศเป็นยังไง
const data = ["ฝนตก","แดดร้อน","ฝนฟ้าคะนอง","แดดร้อน","ฝนตก","อากาศดี","หมอก"]

const result = data.map((e,i)=>{
    return `วันที่ 1 ${i+1} ,สภาพอากาศ ช ${e}` //ผลลัพธ์จะบอกเป็น `วันที่1 : สภาพอากาศ = ฝนตก` `วันที่2 : สภาพอากาศ = แดดร้อน`

})
console.log(result);

//สามารถทำงานกับที่เก็บข้อมูลเป็น object ได้ด้วย

const data = [
    {day: "01/06/2564", weather: "แดดร้อน", temp: 27},
    {day: "03/06/2564", weather: "ฝนตก", temp: 23},
    {day: "04/06/2564", weather: "หมอก", temp: 18}
]

//ต้องการจะ map ค่า array ที่ข้างในเป็น object 
const result = data.atmap(e=>){ //e 8nv element เป็นข้อมูลสมาชิกแต่ละตัวที่อยู่ใน data // เก็บลงในตัวแปล result 
    return e.weather //อยากรู้สภาพอากาศก็จะดึงเอาแค่ property 
}
console.log(result); //ผลลัพธ์ ['แดดร้อน','ฝนตก','หมอก']


//array filter 
//การคัดกรองสมาชิกภายฝน array ที่ผ่านเงื่อนตามที่เราได้กำหนดขึ้นมา
//การใช้ filter จะใช้หลักๆ อยู่ 2 ตัว คือ 1.เงื่อนไขในการคัดกรอก 2.พอผ่านเงื่อนไขแล้วจะให้ทำอะไรต่อ
//การใช้ filter จะส่ง array เข้าไปจะได้ array ก้อนใหม่กลับมาใช้งาน และสาชิกที่อยู่ใน array ก้อนใหม่คือสมาชิกที่ผ่านการคัดกรองตามที่เราระบุ

const data = [10,20,30,40]  

const result = data.filter(e => { //มันจะส่งค่าทางตรรกะศาสตร์ออกมา //จะสร้าง array ก้อนใหม่ขึ้นมา คือ result ออกมาเพื่อรับค่าตัวแปร
    return e > 20 
})
console.log(result); // ผลลัพธ์ [30,40]


//

