// --------- Automatic Movie-Card generation----------
var moviesJson = JSON.parse(movieList);
console.table(moviesJson);

function displayCard(){
    for (let i = 0; i < moviesJson.length; i++) {
        const movieContainer = document.getElementById("movieContainer");
        movieContainer.innerHTML += ` <div class="card col-5 mx-auto my-4 bg-dark">
            <div class="row no-gutters">
              <div class="col-5 p-1">
                <img
                  src="${moviesJson[i].image}"
                  class="card-img-top h-100"
                  alt=""
                />
              </div>
              <div class="col-7">
                <div class="card-body">
                  <h5 class="card-title text-white">${moviesJson[i].name}</h5>
                  <p class="card-text text-white">${moviesJson[i].description}</p>
                </div>
                <div class="card-footer text-justivy">
                  <div class="col-12 text-right">
                    <span id="counter ${i}" class="text-warning my-auto">${moviesJson[i].likes}</span>
                    <span class="text-warning my-auto ml-2"
                      ><i class="far fa-thumbs-up"></i
                    ></span>
                    <button id="${i}" type="button" class="btn btn-outline-warning ml-2">
                      Your Opinion!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>`
    }
}
// ---------- Calling displayCard ---------
displayCard()

// ---------- Like Button Increment ---------
let footerLogic = document.querySelector("#movieContainer");
footerLogic.addEventListener("click", counterLogic, false);

function counterLogic(e) {
        let j = e.target.id;
        moviesJson[j].likes += 1;
        let likeCounter = document.getElementById(`counter ${j}`);
        likeCounter.innerHTML = `<span id="counter ${j}" class="text-warning my-auto">${moviesJson[j].likes}</span>`
}


// First try ----> here to remember (e.target !== e.currentTarget)

// function counterLogic(e) {
    // if (e.target !== e.currentTarget) {
        // let j = e.target.id;
        // moviesJson[j].likes += 1;
        // let likeCounter = document.getElementById(`counter ${j}`);
        // likeCounter.innerHTML = `<span id="counter ${j}" class="text-warning my-auto">${moviesJson[j].likes}</span>`
    // }  
// }