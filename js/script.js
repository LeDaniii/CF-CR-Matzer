// --------- Automatic Movie-Card generation----------
var moviesJson = JSON.parse(movieList);
console.table(moviesJson);

function displayCard() {
    const movieContainer = document.getElementById("movieContainer");
    // Reset inner HTML for preventing duplication of the cards when sortBtn get called
    movieContainer.innerHTML = ""
    // ----------------------------------------------------------------------------
    for (let i = 0; i < moviesJson.length; i++) {
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

// ----- EventListener on the Card-Container ------
let footerLogic = document.querySelector("#movieContainer");
footerLogic.addEventListener("click", counterLogic, false);

// ----- Increment ------
function counterLogic(e) {
        let j = e.target.id;
        moviesJson[j].likes += 1;
        let likeCounter = document.getElementById(`counter ${j}`);
        likeCounter.innerHTML = `<span id="counter ${j}" class="text-warning my-auto">${moviesJson[j].likes}</span>`
}

// --------- Sorting the Cards ---------

// ----- Getting Id from Sort Button -----
let sortCard = document.getElementById("sortBtn");
sortCard.addEventListener("click", sortByLikes, false);

// ----- Calling Sort function & Calling displayCard again -------
function sortByLikes() {
    let array = sortArrayBy(moviesJson, "likes");
    displayCard(array)
};

// ----- Sorting the Array -----

function sortArrayBy(array, sort) {
    array.sort(function (a, b) {
        // to see and understand what >>>sort<<< actally does
        // console.log(a,b)
        if (a[sort] > b[sort]) return -1;
        if (a[sort] < b[sort]) return 1;
        return 0;
    });
    return array;
}
// ###################################################################################################################

// note for me

// -1 means that value1 is less than value2

// 0 means that value1 is equal to value2

// 1 means that value1 is greater than value2

// different description --------------------------------------------------

// Less than 0: "a" is sorted to be a lower index than "b".

// Zero: "a" and "b" are considered equal, and no sorting is performed.

// Greater than 0: "b" is sorted to be a lower index than "a".

// ---------------------- The not needet Section -------------------------
// ####################################################################################################################

// ----- Bubble Sort ------
function bubbleSort() {
  let length = columnArray.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1; j++) {
      let placehold = j + 1;
      let temp1 = columnArray[j];
      let temp2 = columnArray[placehold];
      if (temp1 > temp2) {
        columnArray[j] = temp2;
        columnArray[j + 1] = temp1;
      }
    }
  }
}

// ##################################################################################################################
// First try ----> here to remember (e.target !== e.currentTarget)

// function counterLogic(e) {
    // if (e.target !== e.currentTarget) {
        // let j = e.target.id;
        // moviesJson[j].likes += 1;
        // let likeCounter = document.getElementById(`counter ${j}`);
        // likeCounter.innerHTML = `<span id="counter ${j}" class="text-warning my-auto">${moviesJson[j].likes}</span>`
    // }  
// }
// ##################################################################################################################