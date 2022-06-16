# React Hooks - Learning

## Build and Run


```bash
npm install
npm start
```

## Hooks


* What is the problem with **React.Component**?
  * It’s hard to reuse stateful logic between components
* How currently its been addressed with **React.Component**?
  * render props - A technique for sharing code between React components using a prop whose 
  value is a function.
  * <https://reactjs.org/docs/render-props.html>
  * higher-order components - a higher-order component is a function that takes a component and returns a new component
  * <https://reactjs.org/docs/higher-order-components.html>
  * Use HOCs For Cross-Cutting Concerns
  * Don’t Mutate the Original Component. Use Composition.
* How hooks help?
  * Hooks allow you to reuse stateful logic **without changing your component hierarchy**

## Data

<https://www.tamilvu.org/library/l2100/audio/2.mp3>

wget -c -A '*.mp3' -r -l 1 -nd https://www.tamilvu.org/library/l2100/audio

wget https://www.tamilvu.org/library/l2100/audio/2.mp3
wget -O 2.mp3 https://www.tamilvu.org/library/l2100/audio/2.mp3

$START=1
$END=10
$BASE_URL='https://www.tamilvu.org/library/l2100/audio/'
$filenames = $START..$END
$fileExtension = '.mp3'
$OUTPUT_DIRECTORY='D:\git\thirukkural-db\media\'
foreach ($filename in $filenames)
{
  $filenameWithExtension = $filename.toString() + $fileExtension
  $url = $BASE_URL + $filenameWithExtension
  Invoke-WebRequest -Uri $url -OutFile $OUTPUT_DIRECTORY+$filenameWithExtension
}

$url = "https://www.tamilvu.org/library/l2100/audio/2.mp3"
$output = "2.mp3"
Invoke-WebRequest -Uri $url -OutFile $output

## AudioPlayer with react

* <https://stackoverflow.com/questions/47686345/playing-sound-in-react-js>
* <https://codesandbox.io/s/silly-bohr-4zro3?file=/src/MultiPlayer.js>
* Howler - react wrapper <https://github.com/joshwcomeau/use-sound>
* <https://github.com/goldfire/howler.js#examples>
* reacthook - useAudioplayer - <https://github.com/E-Kuerschner/useAudioPlayer>
* npm i --save react-use-audio-player