// let product= [
//      { name: 'Laptop',quantity:10, price: 5000 ,recordLevel:10},
//      { name: 'Mouse',quantity:20, price: 500 ,recordLevel:5},
//     { name: 'keyboard',quantity:5, price: 1800,recordLevel:20 },
//      { name: 'Hardisk',quantity:19, price: 3000,recordLevel:15 }
// ];

// let Restoked=prod=>{
//     let arr=[]
//     for(let i=0;i<prod.length;i++){
//         if(product[i].quantity<product[i].recordLevel)
//         {
//             arr.push(prod[i])
//         }
//     }
//     return arr;

// }
// console.log(Restoked(product));

                                       //problem 2

let employee = [
     { name: 'Arslan', Salary: 50000 , Experience: 5 ,rating :5},
     { name: 'Asad', Salary: 35000 , Experience: 1,rating :3},
     { name: 'Kamrna', Salary: 25000 , Experience: 6,rating :2},
     { name: 'Ali', Salary: 45000 , Experience: 2,rating :2}
];

let cal_bonus=emp=>{
    let res=[]
    for(let i=0;i<emp.length;i++){
        let bonus=0;
        if(emp[i].Experience>=5 && emp[i].rating>=4){
            bonus=10000;
        }
        res.push({
            name:employee[i].name,
            bonus:bonus

        });
    }
    return res;
}
console.log(cal_bonus(employee));