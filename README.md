# QR-CODE
## _โปรแกรมนี้เป็นโปรแกรมที่สามารถสแกน QR-CODE แล้วจะนำไปหน้าเมนูอาหาร_

## Features

- ทำใหดูเมนูผ่านมือถือได้โดยสแกนผ่าน QR-CODE 
- การประวัติการสแกนผ่านการเข้าใช้งาน  --ยังไม่เสร็จ
## Installation

จำเป็นต้องมี  Node.js

```sh
cd QR-CODE no json ser
npm i
npm start
```

## Route

- <Home> Root:/
เป็นหน้าหลักซึ่งจะแสดงเมนูของร้านต่างๆที่มีอยู่ในฐานข้อมูล json
- <Monitor>  Root:/:id
เป็นหน้าที่แสดงข้อมูลโดยอิงจาก id ที่อยู่ใน url
- <Admin> Root:/admin
เป็นหน้าที่แสดงชื่อร้าน รายละเอียดร้าน รวมถึง "รูป QR-CODE"
- <View> Root:/admin/:id
เป็นหน้าที่รวมข้อมูลทุกอย่าง รูป qr รูปเมนู
 


## package



- [React.js]
- [redux] 
- [react-router-dom] 




