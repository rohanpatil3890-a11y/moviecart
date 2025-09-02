const cl = console.log;



let result = "";

const setRating = (rating) =>{
	
	if(rating >= 7){
		return "badge-success";
	}else if(rating >= 5 && rating < 7){
		return "badge-warning";
	}else{
		return "badge-danger";
	}
};


moviesArry.forEach(movie =>{
	result += `<div class="col-lg-4 col-md-6 col-sm-12 mb-4">
	    <div class="card">
		 <figure class="MovieCard mb-0">
		  <img src= ${movie.poster_path}>
		  <figcaption>
		   <div class="titleInfo">
		    <div class="row">
			 <div class="col-10">
			  <h2>${movie.original_title}</h2>
			 </div>
			  <div class="col-2">
			   <span class="badge ${setRating(movie.vote_average)}">${movie.vote_average}</span>
			  </div>
			</div>
			</div>
			<div class="overview">
			 <h5>${movie.title}</h5>
			 <p>${movie.overview}</p>
			</div>
		  </figcaption>
		 </figure>
		</div>
	   </div>
	  </div> `
});


const postContainer = document.getElementById("postContainer");

postContainer.innerHTML = result;