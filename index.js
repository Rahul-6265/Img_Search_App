var opdiv = document.getElementById('outputdiv');
const inp = document.getElementById('inp');
const error = document.getElementById('error');
async function search() {
    if (inp.value == "") {
        console.log("error");
        opdiv.innerHTML = "";
        opdiv.innerHTML = `<h1>Enter Name</h1>`
    }
    else {
        opdiv.innerHTML = "";
        const api = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${inp.value}&client_id=VRCZYrVldSZ8ArhuUTp0tQUKJ0v7JPWBNlUzBd0MS5Y`);
        // console.log(api);
        const data = await api.json()
        // console.log(data.results);
        data.results.map((ele) => {
            console.log(ele.urls.full);
            opdiv.innerHTML += `
<div class="imageDiv">
<img src=${ele.urls.full} alt="" height=200px; width=200px>
</div>
`
        })
    }
}