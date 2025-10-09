/* Google Ads — load on every page */
(function () {
  var ADS_ID = 'AW-YOURID';  // <-- replace with your Conversion ID (AW-#########)

  // Make dataLayer/gtag available globally
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function(){ window.dataLayer.push(arguments); };

  // Load gtag.js
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + ADS_ID;
  document.head.appendChild(s);

  // Initialize Ads
  gtag('js', new Date());
  gtag('config', ADS_ID);
})();

/* Fire the conversion ONLY on the thank-you page */
(function () {
  var onThanksPage =
    location.pathname.endsWith('/thanks.html') ||
    location.pathname.includes('thanks.html');

  if (onThanksPage) {
    gtag('event', 'conversion', {
      send_to: 'AW-YOURID/YOUR_LABEL'  // <-- replace with your ID + label
    });
  }
})();
