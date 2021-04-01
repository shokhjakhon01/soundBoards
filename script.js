const sounds = ['applause', 'boom', 'gasp', 'siyrat', 'siyrat2', 'siyrat3']

sounds.forEach(sound =>{
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound
    btn.addEventListener('click',event=>{
        stopSongs()
        document.getElementById(sound).play()
    })
    

    document.getElementById('button').
    appendChild(btn)

})

function stopSongs(){
    sounds.forEach(sound=>{
        const song = document.getElementById(sound)
        song.pause()
        song.currentTime = 0
    })
}