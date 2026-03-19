let arr = [
    {
        team: 'CSK',
        fullName: 'Chennai Super Kings',
        primary: 'yellow',
        secondary: 'blue',
        captain: 'Ruturaj Gaikwad',
        trophies: 5
    },
    {
        team: 'MI',
        fullName: 'Mumbai Indians',
        primary: 'blue',
        secondary: 'gold',
        captain: 'Hardik Pandya',
        trophies: 5
    },
    {
        team: 'KKR',
        fullName: 'Kolkata Knight Riders',
        primary: 'purple',
        secondary: 'gold',
        captain: 'Shreyas Iyer',
        trophies: 3
    },
    {
        team: 'SRH',
        fullName: 'Sunrisers Hyderabad',
        primary: 'orange',
        secondary: 'black',
        captain: 'Pat Cummins',
        trophies: 1
    },
    {
        team: 'RR',
        fullName: 'Rajasthan Royals',
        primary: 'pink',
        secondary: 'blue',
        captain: 'Sanju Samson',
        trophies: 1
    },
    {
        team: 'GT',
        fullName: 'Gujarat Titans',
        primary: 'navyblue',
        secondary: 'red',
        captain: 'Shubman Gill',
        trophies: 1
    },
    {
        team: 'RCB',
        fullName: 'Royal Challengers Bangalore',
        primary: 'red',
        secondary: 'black',
        captain: 'Faf du Plessis',
        trophies: 0
    },
    {
        team: 'PBKS',
        fullName: 'Punjab Kings',
        primary: 'red',
        secondary: 'gold',
        captain: 'Shikhar Dhawan',
        trophies: 0
    },
    {
        team: 'DC',
        fullName: 'Delhi Capitals',
        primary: 'blue',
        secondary: 'red',
        captain: 'Rishabh Pant',
        trophies: 0
    },
    {
        team: 'LSG',
        fullName: 'Lucknow Super Giants',
        primary: 'light blue',
        secondary: 'orange',
        captain: 'KL Rahul',
        trophies: 0
    }
];

let btn = document.querySelector("button")
let h1 = document.querySelector("h1")
let h2 = document.querySelector("h2")
let main = document.querySelector("main")

btn.addEventListener("click", function () {
    let winner = Math.floor(Math.random() * arr.length)
    // console.log(arr[winner].team);
    h1.innerHTML = arr[winner].team
    h1.style.backgroundColor = arr[winner].secondary
    main.style.backgroundColor = arr[winner].primary
    
})

btn.addEventListener("click", function () {
    let winner = Math.floor(Math.random() * arr.length)

    let data = arr[winner]

    h2.innerHTML = `
        ${data.team} <br>
        ${data.fullName} <br>
        Captain: ${data.captain} <br>
        Trophies: ${data.trophies}
    `

})


