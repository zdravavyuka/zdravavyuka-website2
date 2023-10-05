let mobileVersion = window.confirm('Přepnout na mobilní verzi?')
function switchToMobile() {
    console.log('placeholder')
}
if(mobileVersion == true) {
   window.location.replace('indexMobile.html')
   //window.alert('You are currently using a mobile version')
}