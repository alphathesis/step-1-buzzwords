// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

// var mySearchbar = $$('.searchbar')[0].f7Searchbar;
// mySearchbar.clear();

function onDeviceReady() {
      alert("device ready");

      console.log("Decide ready");
      document.removeEventListener('deviceready', onDeviceReady, false);

      // Set AdMobAds options:
      admob.setOptions({
        publisherId:          "ca-app-pub-3080814933972938/6115720607",  // Required
        interstitialAdId:     "ca-app-pub-3080814933972938/9188437002",  // Optional
        tappxIdiOS:           "/120940746/Pub-11818-iOS-0312",            // Optional
        tappxIdAndroid:       "/120940746/Pub-11819-Android-0386",        // Optional
        tappxShare:           0.5                                        // Optional
      });

      // Start showing banners (atomatic when autoShowBanner is set to true)
      admob.createBannerView();
      admob.showBanner(admob.BannerSize.BANNER, admob.Position.BOTTOM_APP);

      // Request interstitial (will present automatically when autoShowInterstitial is set to true)
      admob.requestInterstitialAd();

      admob.isInterstitialReady(function(isReady){
      if(isReady){
              admob.showInterstitial();
          }
      });
}

document.addEventListener("deviceready", onDeviceReady, false);

// Callbacks to run specific code for specific pages, for example for About page:
// myApp.onPageInit('about', function (page) {
//     // run createContentPage func after link was clicked
//     $$('.create-page').on('click', function () {
//         createContentPage();
//     });
// });
//
// myApp.onPageInit('biochemistry', function (page) {
//     // run createContentPage func after link was clicked
//     $$('.create-page').on('click', function () {
//         createContentPage();
//     });
// });
//
// myApp.onPageInit('chapter1_molecular', function (page) {
//     // run createContentPage func after link was clicked
//     $$('.create-page').on('click', function () {
//         createContentPage();
//     });
// });

// Generate dynamic page
// var dynamicPageIndex = 0;
// function createContentPage() {
// 	mainView.router.loadContent(
//         '<!-- Top Navbar-->' +
//         '<div class="navbar">' +
//         '  <div class="navbar-inner">' +
//         '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
//         '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
//         '  </div>' +
//         '</div>' +
//         '<div class="pages">' +
//         '  <!-- Page, data-page contains page name-->' +
//         '  <div data-page="dynamic-pages" class="page">' +
//         '    <!-- Scrollable page content-->' +
//         '    <div class="page-content">' +
//         '      <div class="content-block">' +
//         '        <div class="content-block-inner">' +
//         '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
//         '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
//         '        </div>' +
//         '      </div>' +
//         '    </div>' +
//         '  </div>' +
//         '</div>'
//     );
// 	return;
// }
