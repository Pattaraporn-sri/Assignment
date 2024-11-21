const { result, slice } = require("lodash");
const readline = require("readline");

const readInterface = readline.createInterface({ 
  input: process.stdin,
  output: process.stdout,
}); //รับไม่ข้อมูลจากทั้งคีย์บอร์ด

function readLine(text) {
  return new Promise((resolve, reject) => {
    readInterface.question(text, (input) => {
      resolve(input);
    });
  });
}
const productList = []; //ชื่อตาราง

console.log(productList);

// const count = productList.push(addProduct);
// console.log(productList)

async function main() {

  let question = await readLine("กรุณาพิมพ์คำสั่ง add/delete/close: ");

  if (question === "add") {
    addProduct();
  } else if (question === "delete") {
    deleteproduct();
  } else if (question === "close") {
    console.log("จบการทำงาน");
    readInterface.close(); //ปิดการรับข้อความ
    process.exit(0); // จบการทำงานทั้งระบบ
  } else {
    console.log("พิมคำสั่งไม่ถูกต้อง กรุณาพิมใหม่!");
  }
  main(); //การloop จากฟังก์ชัน main()
}

main(); // เรียกใช้ฟังก์ชัน

async function addProduct() {
  let Id = await readLine("กรุณาใส่รหัสสินค้า: ");
  // console.log(productList.find((id) => id.id === Id))
  if (productList.find((id) => id.id === Id)) {
    
    console.log("สินค้านี้มีอยู่ในระบบแล้ว กรุณากรอกรหัสใหม่");

    main();//การloop จากฟังก์ชัน main()

  } else {
    let Name = await readLine("กรุณาใส่ชื่อสินค้า :");
    //let สามารถเปลี่ยนค่าได้
    //const ไม่สามารถเปลี่ยนค่าได้

    let price = await readLine("กรุณาใส่ราคาสินค้า: ");
    
    console.log("สินค้าเพิ่มสำเร็จ!");

    productList.push({ //การเอาค่าที่รับเข้าไปใส่ในตาราง
      id: Id,
      name: Name,
      price: Number(price), //เปลี่ยนชนิดข้อมูลเป้น Number
    });
    
    console.table(productList);

    main(); //การ recusive
  }

  // let productList = productList.push(addProduct);
  // console.log(productList);
}

async function deleteproduct() { // สร้างฟังก์ชันใหม่ 
  let Name = await readLine("กรุณาใส่ชื่อสินค้า :");
  if (productList.find((name) => name.name === Name)) { //find จะคืนค่าแรกที่เรากำหนด map จะคืนค่าทุกค่าที่เรากำหนดใน array filter() จะวนทุกค่าแบ้วเอาค่าที่เข้าเงื่อนไขแสดงออกมา
    const i = productList.findIndex((name) => name.name === Name);
    productList.splice(i, 1);
    console.table(productList);
    console.log("ลบสินค้าเรียบร้อยแล้ว");
  } else {
    console.log("ลบสินค้าไม่สำเร็จ");
  }
  main();
}


