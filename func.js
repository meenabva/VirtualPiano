document.addEventListener("keydown",function(event){
    keys = ['KeyA','KeyS','KeyD','KeyF','KeyG','KeyH','KeyJ','KeyW','KeyE','KeyT','KeyY','KeyU'];
    if(keys.includes(event.code)){
        let audio = new Audio(event.key.toUpperCase()+".mp3");
        audio.play();}
    else
        console.log("WARNING: The key \'"+ event.key+ "\' is pressed.");
})