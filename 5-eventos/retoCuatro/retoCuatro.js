const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

const showList = () =>{
    document.querySelector('#list').innerHTML = `<li class="movie_1">${inception}</li>
                                                 <li class="movie_2">${theButterFlyEffect}</li>
                                                 <li class="movie_3">${eternalSunshineOfTheSM}</li>
                                                 <li class="movie_4">${blueVelvet}</li>
                                                 <li class="movie_5">${split}</li>`

    const movie_1 = document.querySelector('.movie_1');
    const movie_2 = document.querySelector('.movie_2');
    const movie_3 = document.querySelector('.movie_3');
    const movie_4 = document.querySelector('.movie_4');
    const movie_5 = document.querySelector('.movie_5');
    
    function showMovie (event){        
        const movieElement = event.currentTarget;
        const name = movieElement.innerHTML;
        console.log(`${name}`);
    }

    movie_1.addEventListener('click', showMovie);
    movie_2.addEventListener('click', showMovie);
    movie_3.addEventListener('click', showMovie);
    movie_4.addEventListener('click', showMovie);
    movie_5.addEventListener('click', showMovie);
}

document.querySelector('#button').addEventListener('click', showList);
