// 1. การสร้าง Array แบบพื้นฐาน
const a = ['apple', 2, false];

// 2. ตรวจสอบความยาวของ Array
console.log('Length of a:', a.length); // 3

// 3. เข้าถึงสมาชิกใน Array ตามตำแหน่ง (index)
console.log('First element:', a[0]);          // 'apple'
console.log('Last element:', a[a.length - 1]); // false

// 4. การเพิ่มสมาชิกใน Array ด้วย push()
a.push({ animal: 'cat' }, ['orange', 3, true]);
console.log('After push:', a);

// 5. การวนลูปเพื่อแสดงสมาชิกทั้งหมดใน Array
for (let i = 0; i < a.length; i++) {
  console.log(`Element at index ${i}:`, a[i]);
}

// 6. การลบสมาชิกตัวสุดท้ายใน Array ด้วย pop()
const popped = a.pop();
console.log('Popped element:', popped);
console.log('After pop:', a);

// 7. การแปลง String เป็น Array ด้วย Spread Operator (...)
const b = "hello";
const bArray = [...b];
console.log('String to array:', bArray); // ['h', 'e', 'l', 'l', 'o']

// 8. การสร้าง Array ด้วย new Array()
const c = new Array();
const d = new Array(4);           // สร้าง array ความยาว 4 แต่ไม่มีสมาชิกกำหนด
const e = new Array(1, 'bird', true);
console.log('Empty array c:', c);
console.log('Array d with length 4:', d);
console.log('Array e with elements:', e);

// 9. การสร้าง Array ด้วย Array.of() และ Array.from()
const f = Array.of(7);            // สร้าง array ที่มีสมาชิกเดียว คือ 7
console.log('Array f:', f);
const g = Array.from(f);           // สร้าง array ใหม่จาก array f
console.log('Array g (from f):', g);

// 10. การใช้ Array Destructuring และ Rest parameter
const [x, y, ...z] = [15, 20, 25, 30, 35];
console.log('x:', x);             // 15
console.log('y:', y);             // 20
console.log('z (rest array):', z); // [25, 30, 35]
console.log('Type of z:', typeof z); // object 