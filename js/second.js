var moviesJson = JSON.parse(movieList);
console.table(moviesJson);

function displaySlider() {
    const movieSlider = document.getElementById("swiper-wrapper");
    // hard reset if needed / don't know yet
    movieSlider.innerHTML = "";
    for (let i = 0; i < moviesJson.length; i++) {
        movieSlider.innerHTML += `           
         <div class="swiper-slide">
              <div class="movie-card">
                <div class="movie-img">
                  <img src="${moviesJson[i].image}" alt="" />
                </div>
                <div class="movie-description">
                  <div class="card-title">
                    <h1>${moviesJson[i].name}</h1>
                  </div>
                  <div class="card-description">
                    <p>
                        ${moviesJson[i].description}
                    </p>
                    <div class="card-starring">
                      <h2>starring</h2>
                      <p>${moviesJson[i].starring}</p>
                    </div>
                    <div class="card-runtime">
                      <p>runtime</p>
                      <p>${moviesJson[i].runtime}</p>
                      <button class="card-trailer-btn">
                        <i class="fas fa-play"></i> Watch Trailer
                      </button>
                    </div>
                    <div class="card-booking">
                      <div class="booking-area">${moviesJson[i].bookingToday}</div>
                      <div class="booking-area">${moviesJson[i].bookingToday}</div>
                      <div class="booking-area">${moviesJson[i].bookingToday}</div>
                      <div class="booking-area">${moviesJson[i].bookingToday}</div>
                      <div class="booking-area">${moviesJson[i].bookingToday}</div>
                      <div class="booking-area">${moviesJson[i].bookingToday}</div>
                    </div>
                  </div>
                  <div class="card-footer">
                    <div class="opinion-bar">
                      <p id="down${i} class="counter">
                        <i class="fas fa-thumbs-down"></i> ${moviesJson[i].likes}
                      </p>
                      <p id="up${i}" class="counter"><i class="fas fa-thumbs-up"></i> ${moviesJson[i].likes}</p>
                    </div>
                    <div class="opinion-buttons">
                      <button id="${i}" class="opinion-button-red">
                        <span><i class="fas fa-thumbs-down"></i></span> your
                        opinion
                      </button>
                      <button id="${i}" class="opinion-button">
                        <span><i class="fas fa-thumbs-up"></i></span> your
                        opinion
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>`
    }
}   

// ---------- Calling displaySlider ---------

displaySlider()

// ---------- Like Button Increment ---------


// ################ Does not work with two buttons #################
// ----- EventListener on the Card-Container ------
let swiperLogic = document.querySelector("#swiper-wrapper");
swiperLogic.addEventListener("click", counterLogic, false);

function counterLogic(e) {
    let j = e.target.id;
    console.log(j);
    moviesJson[j].likes += 1;
    let likeCounter = document.getElementById(`up${j}`);
    likeCounter.innerHTML = `<span id="counter ${j}" class="text-warning my-auto"><i class="fas fa-thumbs-up"></i> ${moviesJson[j].likes}</span>`
}
// ##################################################################










// ---------- Swiper Logic ------------

var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})



