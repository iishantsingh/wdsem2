// let obj={
//     name:"Devendra",
//     address:"Gurgaon",
//     age:23
// }
// let obj2={
//     name:"Devendra",
//     address:"Gurgaon",
//     age:23
// }
// obj.age=50
// console.log(obj)

// const para=document.querySelector(".para")
// para.innerText="this is updated one"
// console.info(document)

// console.log("Helllo Studentss!")

// let obj={
//     type:"Wooden",
//     color:"Brown",
//     length:"7ft"
// }

// let obj2={
//     type:"iron",
//     color:"Brown",
//     length:"7ft"
// }

// obj.type="Plastic"
// console.log(obj)

// console.log(document)

// const para=document.querySelector(".para")
// para.innerText="This is a new paragraph"
// para.style.color="green"
// console.log(para)

// console.log(document)


// const para=document.getElementById("para")
// para.innerText="This is a new paragraph"
// para.style.color="green"
// console.log(para)

// const para2=document.getElementsByClassName("para")  //return HTMLCollection
// para2[0].innerText="This is a new paragraph"
// para2[1].style.color="green"
// console.log(para2)

// const para=document.querySelectorAll(".para")  //return NodeList
// para[0].textContent="This is a new paragraph"
// para[1].style.color="green"
// console.log(para)

// let arr=[23,54,46,232,564,23]

// // const newArr=arr.map((ele)=>ele)  //it returns a new array
// arr.forEach((ele)=>console.log(ele))  //it does not returns a new array


// const container=document.querySelector(".container")
// container.innerHTML="<h1>This is a Heading</h1>"
// console.log(container)

// function message(event)
// {
//     console.log(event.key)
//     // alert("You have clicked the button")
// }

// const btn=document.querySelector("button")
// btn.classList.add("btn")
// btn.classList.remove("btn")
// btn.addEventListener('click',message)
// btn.addEventListener('keydown',message)
// btn.addEventListener('keyup',message)
// btn.removeEventListener('click',message)

// const form=document.querySelector("form")
// form.addEventListener('submit',function(event){
//     event.preventDefault()
//     console.log("Form Submitted")
// })

// const container=document.querySelector('.container')
// const outer=document.querySelector('.outer')
// const button=document.querySelector('button')


// container.addEventListener('click',()=>{console.log("Div")},true)
// outer.addEventListener('click',()=>{console.log("Outer Div")},true)
// button.addEventListener('click',()=>{console.log("Button")},true)


// console.log("New Code")
// debugger
// console.log(b)
// // console.log(a)

// let a=23534
// var b=5674

// console.log(a)
// console.log(b)
// function print(){
//     var c=345
//     console.log(c)
//     console.log("Inside fn")
// }

// print()


// function first(){
//     second()
// }
// function second(){
//     third()
// }
// function third(){
//     console.trace()
// }
// first()

// function infinite(){
//     infinite()
// }
// infinite()

// console.log(a)
// console.log(b)
// // console.log(c)

// var a=345
// let b=5674

// console.log(a)
// console.log(b)

// let total=40

// function calculate(){
//     console.log(total)
//     let total=100
// }
// calculate()



// console.log("First Line")
// setTimeout(()=>{console.log("after 2 sec")},2000)
// console.log("Second Line")


// setTimeout(()=>{
//     alert("Line after 2 Sec")
// },2*1000)


// const timerID=setInterval(()=>{console.log("setInterval")},1000)

// const timeoutID=setTimeout(()=>{clearInterval(timerID)},10000)
// clearTimeout(timeoutID)


// let num=1;

// const id=setInterval(()=>{
//     if(num===10)clearInterval(id)
//     console.log(num)
//     num+=1
// },1000)


// console.log("before timeout")
// setTimeout(() => {
//     console.log("Settimeout")
// }, 0);
// console.log("After timeout")

// const name=document.querySelector("#name")
// const btn=document.querySelector(".btn")
// const list=document.querySelector(".list")
// btn.addEventListener('click',()=>{
//     if(name.value===""){
//         alert("Enter the name!!")
//         return;
//     }
//     const li=document.createElement('li')
//     const dlt=document.createElement('button')
//     dlt.innerText="Delete"
//     li.innerText=name.value;
//     dlt.addEventListener("click",()=>{
//         list.removeChild(li)
//     })
//     li.appendChild(dlt)
//     list.appendChild(li)
    
//     name.value=""
// })


// console.log("First Line")
// setTimeout(()=>{
//     console.log("after 2 sec")
//     console.log("Second Line")
// },2000)


// function print(num){ //higher order fn
//     setTimeout(()=>{
//         console.log("Inside print")
//          num()
//     },2000)
   
// }

// function sample(){  //callback fn
//     console.log("Inside callback")
    
// }

// print(sample)

// console.log("Before Promise")
// const p=new Promise(function(res,rej){

//     let done=true;
//     setTimeout(()=>{
//         if(done){
//             res({name:"Anand",age:23})
//         }else{
//             rej("Word has not been completed")
//         }
//     },5000)
// })
// // // console.log(p)
// p.then((data)=>{
//     console.log("promise resolved")
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("Finally block")
// })
// //  console.log("After Promise")


// function doHomeWork(){
//     const p=new Promise((res,rej)=>{
//         let done=true;
//         setTimeout(()=>{
//             if(done){
//                 console.log("Homework completed")
//                 res("Homework is Done")
//             }else{
//                 rej("Homework not completed")
//             }
//         },2000)
//     })
//     return p
// }

// function eatDinner(){
//     const p=new Promise((res,rej)=>{
//         let done=false;
//         setTimeout(()=>{
//             if(done){
//                 console.log("Dinner completed")
//                 res("Dinner is Done")
//             }else{
//                 rej("Dinner not completed")
//             }
//         },2000)
//     })
//     return p
// }

// function goToPlayground(){
//     const p=new Promise((res,rej)=>{
//         let done=true;
//         setTimeout(()=>{
//             if(done){
//                 console.log("Went to the playground")
//                 res("Playground Time")
//             }else{
//                 rej("Not Allowed to go!")
//             }
//         },2000)
//     })
//     return p
// }

// doHomeWork().then((data)=>{
//     console.log(data)
//     return eatDinner()
// }).then((data)=>{
//     console.log(data)
//     return goToPlayground()
// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("Go To Sleep")
// })                          

// console.log("first line")
// setTimeout(()=>{
//    console.log("Inside Timeout") 
// },0)
// const p=new Promise((res,rej)=>{
//     res("Inside Promise")
// })
// p.then((data)=>{
//     console.log(data)
// })
// const p2=new Promise((res,rej)=>{
//     res("Inside Promise")
// })
// p2.then((data)=>{
//     console.log(data)
// })
// const p3=new Promise((res,rej)=>{
//     res("Inside Promise")
// })
// p3.then((data)=>{
//     console.log(data)
// })
// console.log("last line")

// function orderFood(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("Food Ordered!!!")
//             res("Food Ordered")
//         },2000)
//     })
// }
// function prepareFood(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("Food Prepared")
//             res()
//         },2000)
//     })
// }
// function deliverFood(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("Food Deliverd")
//             res()
//         },2000)
//     })
// }

// async function foodOrder(){
//     const data=await orderFood()
//     console.log(data)
//     await prepareFood()
//     await deliverFood()   
// }

// foodOrder()

// orderFood().then((data)=>{
//     console.log(data)
//     return prepareFood()
// }).then((data)=>{
//     console.log(data)
//     return deliverFood()
// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })

// const form=document.querySelector('#form')
// const eventCards=document.querySelector('.cards')
// form.addEventListener('submit',function(event){
//     event.preventDefault()
//     const title=eventTitle.value
//     const date=eventDate.value
//     const cat=category.value
//     const desc=description.value

//     const card=document.createElement('div')
//     card.classList.add('card')
//     card.innerHTML=`
//         <h2>${title}</h2>
//         <p>📅${date}</p>
//         <button>${cat}</button>
//         <p>${desc}</p>
//         <div class="deleteCard">x</div>
//     `

//     card.querySelector('.deleteCard').addEventListener('click',function(){
//         card.remove()
//     })

//     eventCards.appendChild(card)
// })

// document.addEventListener('keydown',(event)=>{
//     document.querySelector('.key').innerText=event.key
// })

// console.log("first Line")
// try{
//     // let sample=345
//     // console.log(sample)
//     // console.log("Line after sample")
//     let age=16
//     if(age<18){
//         // console.log("You are minor")
//         throw new Error("You are minor")
//     }
//     //

// }catch(e){
//     console.error(e)
//     console.log("Hello we got an error")
// }
// console.log("last Line")


// async function getData(){
//     try{
//         // const response=await  fetch("https://dummyjson.com/products") //GET request
//         const response=await  fetch('https://dummyjson.com/products/add', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({
//                 title: "Macbook m4",
//                 description: "Lorem ipsum dolor sit amet.",
//                 category: "electronics",
//                 price: 999.8,
//                 discountPercentage: 10.48,
//                 rating: 4.56,
//                 stock: 99,
//             })
//         })
//         if(response.ok===false){
//             throw new Error("Something went wrong");
            
//         }
//         console.log(response)
//         const data=await response.json()
//         console.log(data)
//         // data.products.forEach((product)=>{
//         //     console.log(product.title)
//         // })
//     }catch(e){
//         console.log(e)
//     }
// }

// getData()


// localStorage.setItem("name","Devendra")
// localStorage.setItem("age",23)

// const uname=localStorage.getItem("name")
// console.log(uname)
// console.log(localStorage.getItem("age"))

// localStorage.removeItem("name")
// localStorage.clear()


// sessionStorage.setItem("name","Devendra")
// sessionStorage.setItem("age",23)

// const uname=sessionStorage.getItem("name")
// console.log(uname)
// console.log(sessionStorage.getItem("age"))

// sessionStorage.removeItem("name")


// document.cookie="name=Devendra; expires=Thu, 20 Feb 2026 12:00:00 UTC;"
// document.cookie="age=25; expires=Thu, 20 Feb 2026 12:00:00 UTC;"
// console.log(document.cookie)

// async function fetchData(){
//     await fetch("http://127.0.0.1:5502/javascript/index.html")
// }
// fetchData()

// function* generate(){
//     for (let index = 1; index <=4; index++) {
//        yield index
//     }
// }

// const gen=generate()
// console.log(gen)
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())


// function add(a,b,c){
//     return a+b+c
// }

// function add(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }

// const first=add(1)
// console.log(first)
// const second=first(2)
// console.log(second)
// const third=second(3)
// console.log(third)

// console.log(add(1)(2)(3))
const API_KEY="0133cc5316757ac730cc46ae342334e4"
const form=document.querySelector("#form")
const weatherDetail=document.querySelector(".info")
const searchHistory=document.querySelector(".historyBtn")

let cityHistory=[]

form.addEventListener('submit',async function(event){
    event.preventDefault()
    const searchCity=city.value
    console.log(searchCity)

    if(searchCity){
        try{
            const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}`)
            const data=await res.json()
            if(data.cod===200){
                weatherDetail.innerHTML=`
                <p>City: ${data.name}</p>
                <p>Temp: ${(data.main.temp-273).toFixed(1)}C</p>
                <p>Weather: ${data.weather[0].main}</p>
                <p>Humidity: ${data.main.humidity}</p>
                <p>Wind: ${data.wind.speed}m/s</p>`
                cityHistory.push(searchCity)
                localStorage.setItem("cityHistory",JSON.stringify([...new Set(cityHistory)]))
                displayHistory()
            }else{
                weatherDetail.innerHTML=`<p>City not found</p>`
            }
        }catch(e){
            console.log(e)
        }
    }
})

function displayHistory(){
    searchHistory.innerHTML=""
    const history=JSON.parse(localStorage.getItem("cityHistory"))
    console.log(history)
    if(history){
        history.forEach((city)=>{
            const btn=document.createElement("button")
            btn.innerText=city
            searchHistory.appendChild(btn)
        })
    }
}
displayHistory()