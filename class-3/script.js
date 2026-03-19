let arr = [
    {
        team: 'CSK',
        primary: 'yellow',
        secondary: 'blue'
    },
    {
        team: 'RCB',
        primary: 'red',
        secondary: 'black'
    }
]

let btn = document.querySelector("button")
btn.addEventListener("click", function () {
    let winner = Math.floor(Math.random() * arr.length)
    console.log(arr[winner].team);
})


