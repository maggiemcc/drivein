const apiURL = "/json/playing.json";
fetch(apiURL)
    .then((response) => response.json())
    .then((playing) => {
        console.log(playing);

        var select = document.getElementById("movieDay");

        select.onchange = function () {
            for (var i = 0; i < playing.length; i++) {
                if (playing[i]['day'] === this.value) {

                    // Movie Times
                    document.querySelector('.time1').textContent = playing[i]["screenOne"]["movieOne"].time;
                    document.querySelector('.time2').textContent = playing[i]["screenOne"]["movieTwo"].time;
                    document.querySelector('.time3').textContent = playing[i]["screenTwo"]["movieOne"].time;
                    document.querySelector('.time4').textContent = playing[i]["screenTwo"]["movieTwo"].time;
                    
                    document.querySelector('.time5').textContent = playing[i]["screenTwo"]["movieOne"].time;
                    document.querySelector('.time6').textContent = playing[i]["screenTwo"]["movieTwo"].time;
                    document.querySelector('.time7').textContent = playing[i]["screenTwo"]["movieOne"].time;
                    document.querySelector('.time8').textContent = playing[i]["screenTwo"]["movieTwo"].time;

                    // Movie Names
                    document.querySelector('#movie1').textContent = playing[i]["screenOne"]["movieOne"].name;
                    document.querySelector('#movie2').textContent = playing[i]["screenOne"]["movieTwo"].name;
                    document.querySelector('#movie3').textContent = playing[i]["screenTwo"]["movieOne"].name;
                    document.querySelector('#movie4').textContent = playing[i]["screenTwo"]["movieTwo"].name;

                    document.querySelector('#movie5').textContent = playing[i]["screenThree"]["movieOne"].name;
                    document.querySelector('#movie6').textContent = playing[i]["screenThree"]["movieTwo"].name;
                    document.querySelector('#movie7').textContent = playing[i]["screenFour"]["movieOne"].name;
                    document.querySelector('#movie8').textContent = playing[i]["screenFour"]["movieTwo"].name;

                    // Movie Posters
                    document.querySelector('#poster1').src = playing[i]["screenOne"]["movieOne"].photo;
                    document.querySelector('#poster2').src = playing[i]["screenOne"]["movieTwo"].photo;
                    document.querySelector('#poster3').src = playing[i]["screenTwo"]["movieOne"].photo;
                    document.querySelector('#poster4').src = playing[i]["screenTwo"]["movieTwo"].photo;

                    document.querySelector('#poster5').src = playing[i]["screenThree"]["movieOne"].photo;
                    document.querySelector('#poster6').src = playing[i]["screenThree"]["movieTwo"].photo;
                    document.querySelector('#poster7').src = playing[i]["screenFour"]["movieOne"].photo;
                    document.querySelector('#poster8').src = playing[i]["screenFour"]["movieTwo"].photo;
                }

                if (this.value === '') {
                    select.value = this.value;
                }
            }
        };
    });