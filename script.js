console.log("Welcome to Spotify");

// initialize the variable
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3')
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: 'City', filepath: 'songs/1.mp3', coverpath: 'covers/1.jpg'},
    {songName: 'cielo- HUma-Huma', filepath: 'songs/2.mp3', coverpath: 'covers/2.jpg'},
    {songName: 'Deaf KEV ', filepath: 'songs/3.mp3', coverpath: 'covers/3.jpg'},
    {songName: 'Different Heaven', filepath: 'songs/4.mp3', coverpath: 'covers/4.jpg'},
    {songName: 'Harmony', filepath: 'songs/5.mp3', coverpath: 'covers/5.jpg'},
    {songName: 'calmness', filepath: 'songs/6.mp3', coverpath: 'covers/6.jpg'},
    {songName: 'Coast', filepath: 'songs/7.mp3', coverpath: 'covers/7.jpg'},
    {songName: 'MyTrip', filepath: 'songs/8.mp3', coverpath: 'covers/8.jpg'},
    {songName: 'Picnic', filepath: 'songs/9.mp3', coverpath: 'covers/9.jpg'},
    {songName: 'moutain', filepath: 'songs/10.mp3', coverpath: 'covers/10.jpg'},
    {songName: 'happy', filepath: 'songs/11.mp3', coverpath: 'covers/11.jpeg'},
    {songName: 'sad', filepath: 'songs/12.mp3', coverpath: 'covers/12.jpg'},
    {songName: 'rose', filepath: 'songs/13.mp3', coverpath: 'covers/13.jpg'},
    {songName: 'red', filepath: 'songs/14.mp3', coverpath: 'covers/14.jpg'},
    {songName: 'green', filepath: 'songs/15.mp3', coverpath: 'covers/15.jpg'},
    {songName: 'nature', filepath: 'songs/16.mp3', coverpath: 'covers/16.jpg'},
    {songName: 'sea', filepath: 'songs/17.mp3', coverpath: 'covers/17.jpg'},
    {songName: 'tree', filepath: 'songs/18.mp3', coverpath: 'covers/18.jpg'},
    {songName: 'water', filepath: 'songs/19.mp3', coverpath: 'covers/19.jpg'},
    {songName: 'flower', filepath: 'songs/20.mp3', coverpath: 'covers/20.jpg'},

]

songItem.forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].coverpath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})
// audioElement.play();

// handle play pause/play click 
masterPlay.addEventListener('click', ()=> {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// listen to Events 
audioElement.addEventListener('timeupdate', ()=>{
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach(element=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText =  songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

        
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=19){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText =  songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText =  songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})