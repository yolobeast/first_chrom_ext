// var app = chrome.runtime.getBackgroundPage();

function hello() {
  chrome.tabs.executeScript({
    file: 'block.js'
  }); 
}

document.getElementById('clickme').addEventListener('click', hello);