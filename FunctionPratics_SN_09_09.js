// 1
let Product_Avail=prod=>prod.qty>0 ? "Available" :"Not Available";

let p={name:"Cholate",qty:12}
console.log(Product_Avail(p));

// 4.
let person=[{Name:"Arslan",Age:23},{Name:"Ali",Age:20},{Name:"Imran",Age:14}]

let member=people=>{
    let arr=[]
    for(let item of person){
        if(item.age>15){
            arr.push(item);
        }

    }
    return arr;
}
console.log(member(23));


// 6

let Employee=[{Name:"Arslan ",id:101, feild:"SE"},
    {Name:"Ahmed ",id:102, feild:"QA"},
    {Name:"ASad ",id:103, feild:"NGO"}]

let Detail= id=>{
    let arr=[]
    for(let item of Employee){
        if(item.id==id){
             arr.push(item)
        }
    }
    return arr;
}
console.log(Detail(103));

//7
