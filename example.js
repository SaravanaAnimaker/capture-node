'use strict';
const fs = require('fs');
const delay = require('delay');
const aperture = require('.');

async function main() {
  const recorder = aperture();
  console.log('Audio devices:', await aperture.audioDevices());
  console.log('Preparing to record for 5 seconds');
  await recorder.startRecording();
  console.log('Recording Initialized');
  // console.log('Screens:', await aperture.screens());
  console.log('Recording started');
  await delay(10000);
  console.log('Stop:', await aperture.screens());
  const fp = await recorder.stopRecording();
  // fs.renameSync(fp, 'recording.mp4');
  console.log('Video saved in the current directory');
}

main().catch(console.error);

// Run: $ node example.js
