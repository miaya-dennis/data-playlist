let songButton = document.getElementById("songButton");
let artistDisplay1 = document.getElementById("artist-1");
let trackNameDisplay1 = document.getElementById("track-name-1");
let nextButton = document.getElementById("nextButton");
let backButton = document.getElementById("backButton");
let songs = []; // declare variable "songs"
let index = 0;

	// update the DOM 
	function showSongs() {
	  let song = songs[index]; 
	  
	 artistDisplay1.textContent = songs[index].Artist;
	 trackNameDisplay1.textContent = songs[index]["Track Name"];
	}


async function loadSongs() {
	 let response = await fetch("https://student-data-api.miayadennis.workers.dev/api/v1/datasets/viral-50-usa/records?limit=50");
     let data = await response.json();
	 songs = data.records;
	 //update the DOM
	 showSongs()
	 
	 console.log(songs);
	 console.log(songs[0]);
	 console.log(songs[index].Artist);
	 console.log(songs[index]["Track Name"]);
	 artistDisplay1.textContent = songs[index].Artist;
	 trackNameDisplay1.textContent = songs[index]["Track Name"];
	 
}
	 
	 

	songButton.addEventListener("click", function (){
      loadSongs();
    });
	
	nextButton.addEventListener("click", function (){
	// update the index
	  index = index + 1;
	// update the DOM  
	showSongs();
	  artistDisplay.textContent = songs[index].Artist;
	  trackNameDisplay1.textContent = songs[index]["Track Name"];
	});
	
	backButton.addEventListener("click", function () {
	// update the index
	  index = index - 1;
	// update the DOM
	showSongs() ;
	  artistDisplay.textContent = songs[index].Artist;
	  trackNameDisplay1.textContent = songs[index]["Track Name"];
	
	});
	

	 
	
