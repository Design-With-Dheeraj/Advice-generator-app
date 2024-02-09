let adviceId = document.getElementById('advice-id-span');
let adviceBody = document.getElementById('advice-body');

fetch("https://api.adviceslip.com/advice")
.then(response => response.json())
.then((data) => {
    adviceId.innerHTML = data.slip.id;
    adviceBody.innerHTML = `"${data.slip.advice}"`;
})
.catch((error) => {
    alert(`Error ${error}`);
});


let generateBtn = document.getElementById("adviceGnrtrBtn");

generateBtn.addEventListener("click", ()=>{
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then((data) => {
            adviceId.innerHTML = data.slip.id;
            adviceBody.innerHTML = `"${data.slip.advice}"`;
        })
        .catch((error) => {
            alert(`Error ${error}`);
        });
})















































// 	fetch("https://api.adviceslip.com/advice")
//     .then(response => response.json())
//     .then((data) => data.slip)
//     .then((data) => {
//         adviceNum.textContent = data.id;
//         advicePara.innerHTML = data.advice;
//     })
//     .catch((error) => {
//         alert(`Error ${error}`);
//     });


// function random() {
//     fetch("https://api.adviceslip.com/advice")
//     .then(response => response.json())
//     .then((data) => data.slip)
//     .then((data) => {
//         adviceNum.textContent = data.id;
//         advicePara.innerHTML = `"`+ data.advice +`"`;
//     })
//     .catch((error) => {
//         alert(`Error ${error}`);
//     });
// }