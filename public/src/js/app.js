var pwaCard = document.querySelector('#pwa');
var pwaCardContent = pwaCard.querySelector('.card__content');
var pwaCardDetails = pwaCard.querySelector('.card__details');
var detailsShown = false;

//Register a service worker
//Navigator is the browser
//Check if the browser supports service worker prior to installation
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function () {
    console.log('SW registered.');
  }); //it starts from the "start" folder of the application -[TEST LATER] specified in manifest.json 
}

pwaCard.addEventListener('click', function (event) {
  if (!detailsShown) {
    detailsShown = true;
    pwaCardContent.style.opacity = 0;
    pwaCardDetails.style.display = 'block';
    pwaCardContent.style.display = 'none';
    setTimeout(function () {
      pwaCardDetails.style.opacity = 1;
    }, 300);
  } else {
    detailsShown = false;
    pwaCardDetails.style.opacity = 0;
    pwaCardContent.style.display = 'block';
    pwaCardDetails.style.display = 'none';
    setTimeout(function () {
      pwaCardContent.style.opacity = 1;
    }, 300);
  }
});