async function me(){

let Smgwheather = new Promise((resolve, reject)=>
{
    setTimeout(() => {
        resolve("25 deg")
    }, 2000);
})

let bangwheather = new Promise((resolve, reject)=>
{
    setTimeout(() => {
        resolve("20 deg")
    }, 3000);
})
// Smgwheather.then((value)=>{
//     console.log(value)
// })

// await waits untill the required output gets loaded
let smgw = await Smgwheather
let bangw = await bangwheather
return [smgw, bangw]
}
let x = me()
console.log(x)