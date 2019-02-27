// ロンドン中心部の取得
var mymap = L.map('mapid')
var marker = L.marker([51.5, -0.09]).addTo(mymap);
var popup = L.popup();

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, '
}).addTo(mymap);

// 位置情報の取得が成功した場合に、onLocationFound関数が実行
    function onLocationFound(e) {
          L.marker(e.latlng).addTo(mymap).bindPopup("現在地").openPopup();
      }
// 位置情報の取得の失敗
      function onLocationError(e) {
          alert("現在地を取得できませんでした。" + e.message);
      }

// 位置情報の取得が成功した際の、イベントを登録します。
      mymap.on('locationfound', onLocationFound);
      mymap.on('locationerror', onLocationError);

      mymap.locate({setView: true, maxZoom: 16, timeout: 20000});

// 円
var circle = L.circle([51.508, -0.11], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
}).addTo(mymap);

// 多角形
var polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(mymap);

// ポップアップ
marker.bindPopup("<b>こんにちは!</b><br>今、あなたの場所はここです").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

// マーカーのクリックアクション
function onMapClick(e) {
  alert("You clicked the map at " + e.latlng);
}
mymap.on('click', onMapClick);


function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(mymap);
}

mymap.on('click', onMapClick);


// APIの設定
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1Ijoib29tZXN1Z3VydSIsImEiOiJjanNtbXgwejYwM2RlNDNvd3dnNWw5NTByIn0.rGmf03_lOd-lJDG1P-EkRw'
}).addTo(mymap);