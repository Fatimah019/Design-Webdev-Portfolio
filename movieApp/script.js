async function fetchData(){
    try{
        await fetch('https://api.themoviedb.org/3/tv/popular?api_key=1bdfb4fa0e9bdefa64f0dd9845a0ed03&language=en-US')
        .then(response=>response.json())
        .then(response=>{
            console.log(response);
            movieApi=response;
            movieImages=response.results;
            movieImages.forEach(function(item){
                
                let homeMovieCarousel=document.getElementById("movie-carousel");

                let movieContainer=document.createElement("div");
                movieContainer.setAttribute("class", "movie-container");

                let imagePost=document.createElement("img");
                imagePost.src=`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${item.poster_path}`;
                imagePost.setAttribute("class", "homeImage");

                let movieTitle=document.createElement('p');
                movieTitle.setAttribute("class", "movie-title");
                movieTitle.textContent=item.name;
                

                let randomBackgroundHome=document.getElementById("first-row");
                let randomImages=item.poster_path;
                randomBackgroundHome.style.backgroundImage=`url(https://image.tmdb.org/t/p/original/${randomImages})`;

                let secondBackgroundHome=document.getElementById("sign-up-img");
                secondBackgroundHome.style.backgroundImage=`url(https://image.tmdb.org/t/p/original/${randomImages})`;
               

                /*let overview=document.createElement('p');
                overview.textContent=item.overview;
                overview.setAttribute("class", "overview");*/
                homeMovieCarousel.appendChild(movieContainer);
                movieContainer.appendChild(imagePost);
                movieContainer.appendChild(movieTitle);
                //homeMovieCarousel.appendChild(overview);
                
                
            });
            

        });
    }catch (err){
        alert(err);
    }
}

fetchData();
