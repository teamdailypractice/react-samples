import { Howl } from "howler";

const PLAY_RESUME = 1000;
function getAudioPlayer(mediaFiles) {

    const ENDED = 200;
    // const PLAYING = 100;
    const NOT_STARTED = -1;
    let audioPlayer = Array(mediaFiles.length);

    for (let index = 0; index < mediaFiles.length; index++) {
        const mediaFile = mediaFiles[index];
        const mediaPlayer = new Howl({
            src: [mediaFile],
            onplay: function onplay(id) {
                audioPlayer[index][1] = PLAY_RESUME;
            },
            onend: () => {
                console.log(`${mediaFile} completed`);
                audioPlayer[index][1] = ENDED;
                if (index < (mediaFiles.length - 1)) {
                    audioPlayer[index + 1][1] = PLAY_RESUME;
                    audioPlayer[index + 1][0].play();
                }
                else {
                    for (let i = 0; i < audioPlayer.length; i++) {
                        audioPlayer[i][1] = NOT_STARTED;
                    }
                    
                }
            }
        });
        audioPlayer[index] = [mediaPlayer, NOT_STARTED];
    }
    return audioPlayer;
}


export default getAudioPlayer;