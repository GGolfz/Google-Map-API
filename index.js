const mapInit = () => {
  let lat = document.getElementById("lat").value;
  const latitude = lat == ''?13.7461:lat
  let long = document.getElementById("long").value;
  const longitude = lat == ''?100.5342:long
  const here = { lat: parseFloat(latitude), lng: parseFloat(longitude) }
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: here,
  })
  const marker = new google.maps.Marker({
    position: here,
    map: map,
  })
  const shopList = [
    {
      position: {
        lat: here.lat +0.001,
        lng: here.lng+ 0.001
      },
      title: 'Test',
      icon: {                             
        url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
      },
      draggable:true,
    },
    {
      position: {
        lat: here.lat + 0.003,
        lng: here.lng + 0.003
      },
      title: 'SIT',
      icon: {url:"https://ggolfz.codes/opbot/image/1.jpg",scaledSize:new google.maps.Size(50,50)}
    }
  ]
  shopList.map(el=>{
    console.log(el)
    const newMarker = new google.maps.Marker(el)
    newMarker.setMap(map)
  })
  const customerMarker = new google.maps.Marker({
    position: {
      lat: here.lat + 0.0015,
      lng: here.lng + 0.0015
    },
    title: 'Customer',
    name: 'Customer',
    icon: {                             
      url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
    },
    draggable:true,
  })
  customerMarker.setMap(map)
  google.maps.event.addListener(customerMarker,"click",(e)=>{
    alert("choose your home")
  })
  google.maps.event.addListener(customerMarker,'dragend',(e)=>{
    console.log(e.latLng.lat(),e.latLng.lng())
    document.getElementById('cus_lat').value = e.latLng.lat();
    document.getElementById('cus_long').value = e.latLng.lng();
  })
}
