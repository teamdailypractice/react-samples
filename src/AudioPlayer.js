import React, { useState, useEffect, useRef } from 'react';

function AudioPlayer(props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [repeatCount, setRepeatCount] = useState(0);

  const audioRef = useRef(new Audio(props.audioSrc[0]));


  // console.log(audioRef.current.onended);

  audioRef.current.onended = () => {
    console.log('audio ended...')
    if (isPlaying) {
      console.log('audio ended...setIsPlaying(false)')
      setIsPlaying(false);
      setRepeatCount(repeatCount + 1);
    }
  }


  useEffect(() => {
    console.log("in effect..." + isPlaying)
    if (isPlaying && repeatCount < props.howmanyTimesToPlay) {
      audioRef.current.play();

    }
    else {
      audioRef.current.pause();
    }


  }, [isPlaying, repeatCount, props.howmanyTimesToPlay]);

  useEffect(() => {
    console.log('audio repeatCount...' + repeatCount + ' - times:' + props.howmanyTimesToPlay)

    if ((!isPlaying) && repeatCount > 0 && repeatCount < props.howmanyTimesToPlay) {
      console.log('audio repeatCount...set')
      setIsPlaying(true);
    } 
    if ((repeatCount ) >= props.howmanyTimesToPlay) {
      setIsPlaying(false);
    }
  }, [isPlaying, repeatCount, props.howmanyTimesToPlay]);

  const currentAction = isPlaying ? 'Pause' : 'Play';
  return (
    <>
      <button onClick={() => {
        if (isPlaying === false) {
          setIsPlaying(true);
          if (repeatCount  >= props.howmanyTimesToPlay) {
            setRepeatCount(0);
          }
        } else {
          setIsPlaying(false);
        }
      }
      }>{currentAction}</button>
    </>
  )
}

export default AudioPlayer;