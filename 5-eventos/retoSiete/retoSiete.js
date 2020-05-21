const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

const showList = () =>{
    const list = document.querySelector('#list');
    list.innerHTML = `<li class="movie_1">${inception}</li>
                     <li class="movie_2">${theButterFlyEffect}</li>
                     <li class="movie_3">${eternalSunshineOfTheSM}</li>
                     <li class="movie_4">${blueVelvet}</li>
                     <li class="movie_5">${split}</li>`


    function showMovie (event){        
        const movieElement = event.target;
        const name = movieElement.innerHTML;
        console.log(`${name}`);
    }

    list.addEventListener('click', showMovie);
}

document.querySelector('#button').addEventListener('click', showList);
