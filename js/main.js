$(function() {
  let bikeData = [];
  $.get("https://json-project3.herokuapp.com/products", function(data) {
    bikeData = data;
    bikeCard();

    $("#all").click(function() {
      bikeCard();
    });
    $(".badgeAll").text(bikeData.length);

    let maleBikes = bikeData.filter(function(mBike) {
      return mBike.gender === "MALE";
    });
    $(".badgeMale").text(maleBikes.length);
    $("#male").click(function() {
      $(".velosipedi").html("");
      maleBikes.forEach(el => {
        $(".velosipedi").append(`
        <div class="oneBike">
        <div class="content">
        <div>
        <img src="img/${el.image}.png" alt="">
        </div>
         <h4 class="pa"><b>${el.name}</b></h4>
        <p class="pa">${el.price} $</p>
        </div>
        </div>
         `);
      });
    });

    let femaleBikes = bikeData.filter(function(fBike) {
      return fBike.gender === "FEMALE";
    });
    $(".badgeFemale").text(femaleBikes.length);
    $("#female").click(function() {
      $(".velosipedi").html("");
      femaleBikes.forEach(el => {
        $(".velosipedi").append(`
        <div class="oneBike">
        <div class="content">
        <div>
        <img src="img/${el.image}.png" alt="">
        </div>
         <h4 class="pa"><b>${el.name}</b></h4>
        <p class="pa">${el.price} $</p>
        </div>
        </div>
         `);
      });
    });

    let LGBBikes = bikeData.filter(function(lgbBike) {
      return lgbBike.brand === "LE GRAND BIKES";
    });
    $(".badgelgb").text(LGBBikes.length);
    $("#lgb").click(function() {
      $(".velosipedi").html("");
      LGBBikes.forEach(el => {
        $(".velosipedi").append(`
        <div class="oneBike">
        <div class="content">
        <div>
        <img src="img/${el.image}.png" alt="">
        </div>
         <h4 class="pa"><b>${el.name}</b></h4>
        <p class="pa">${el.price} $</p>
        </div>
        </div>
         `);
      });
    });

    let krossBikes = bikeData.filter(function(kross) {
      return kross.brand === "KROSS";
    });
    $(".badgeKross").text(krossBikes.length);
    $("#kross").click(function() {
      $(".velosipedi").html("");
      krossBikes.forEach(el => {
        $(".velosipedi").append(`
        <div class="oneBike">
        <div class="content">
        <div>
        <img src="img/${el.image}.png" alt="">
        </div>
         <h4 class="pa"><b>${el.name}</b></h4>
        <p class="pa">${el.price} $</p>
        </div>
        </div>
         `);
      });
    });

    let explorerBikes = bikeData.filter(function(explor) {
      return explor.brand === "EXPLORER";
    });
    $(".badgeExpl").text(explorerBikes.length);
    $("#explorer").click(function() {
      $(".velosipedi").html("");
      explorerBikes.forEach(el => {
        $(".velosipedi").append(`
        <div class="oneBike">
        <div class="content">
        <div>
        <img src="img/${el.image}.png" alt="">
        </div>
         <h4 class="pa"><b>${el.name}</b></h4>
        <p class="pa">${el.price} $</p>
        </div>
        </div>
         `);
      });
    });

    let visitorBikes = bikeData.filter(function(visit) {
      return visit.brand === "VISITOR";
    });
    $(".badgeVisitor").text(visitorBikes.length);
    $("#visitor").click(function() {
      $(".velosipedi").html("");
      visitorBikes.forEach(el => {
        $(".velosipedi").append(`
        <div class="oneBike">
        <div class="content">
        <div>
        <img src="img/${el.image}.png" alt="">
        </div>
         <h4 class="pa"><b>${el.name}</b></h4>
        <p class="pa">${el.price} $</p>
        </div>
        </div>
         `);
      });
    });

    let ponyBikes = bikeData.filter(function(pon) {
      return pon.brand === "PONY";
    });
    $(".badgePony").text(ponyBikes.length);
    $("#pony").click(function() {
      $(".velosipedi").html("");
      ponyBikes.forEach(el => {
        $(".velosipedi").append(`
        <div class="oneBike">
        <div class="content">
        <div>
        <img src="img/${el.image}.png" alt="">
        </div>
         <h4 class="pa"><b>${el.name}</b></h4>
        <p class="pa">${el.price} $</p>
        </div>
        </div>
         `);
      });
    });

    let foreceBikes = bikeData.filter(function(forc) {
      return forc.brand === "FORCE";
    });
    $(".badgeForce").text(foreceBikes.length);
    $("#force").click(function() {
      $(".velosipedi").html("");
      foreceBikes.forEach(el => {
        $(".velosipedi").append(`
        <div class="oneBike">
        <div class="content">
        <div>
        <img src="img/${el.image}.png" alt="">
        </div>
         <h4 class="pa"><b>${el.name}</b></h4>
        <p class="pa">${el.price} $</p>
        </div>
        </div>
         `);
      });
    });

    let eBikes = bikeData.filter(function(ebik) {
      return ebik.brand === "E-BIKES";
    });
    $(".badgeeb").text(eBikes.length);
    $("#eb").click(function() {
      $(".velosipedi").html("");
      eBikes.forEach(el => {
        $(".velosipedi").append(`
        <div class="oneBike">
        <div class="content">
        <div>
        <img src="img/${el.image}.png" alt="">
        </div>
         <h4 class="pa"><b>${el.name}</b></h4>
        <p class="pa">${el.price} $</p>
        </div>
        </div>
         `);
      });
    });

    let idealBikes = bikeData.filter(function(idea) {
      return idea.brand === "IDEAL";
    });
    $(".badgeIdeal").text(idealBikes.length);
    $("#ideal").click(function() {
      $(".velosipedi").html("");
      idealBikes.forEach(el => {
        $(".velosipedi").append(`
        <div class="oneBike">
        <div class="content">
        <div>
        <img src="img/${el.image}.png" alt="">
        </div>
         <h4 class="pa"><b>${el.name}</b></h4>
        <p class="pa">${el.price} $</p>
        </div>
        </div>
         `);
      });
    });

    function bikeCard() {
      bikeData.forEach(el => {
        $(".velosipedi").append(`
  <div class="oneBike">
  <div class="content">
  <div>
  <img src="img/${el.image}.png" alt="">
  </div>
   <h4 class="pa"><b>${el.name}</b></h4>
  <p class="pa">${el.price} $</p>
  </div>
  </div>
   `);
      });
    }
  });
});
