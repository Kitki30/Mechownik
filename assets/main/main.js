const urlParams = new URLSearchParams(window.location.search);
const easteregg = urlParams.get('eg');

if (easteregg=="yes"){
window.location.replace("https://Kitki30.github.io/Mechownik/assets/easteregg/index.html");
}
    function addbutton(){
      if (confirm('You will be redirected to discord bot adding site! ')) {
  console.log('Redirecting... Bye!')
        window.location.assign("https://discord.com/oauth2/authorize?client_id=1101105727340286022&scope=bot&permissions=8");
} else {
alert("Redirect canceled! ")
      }
    }
    function wiki(){
      if (confirm('You will be redirected to Mechownik\'s wiki on GitHub!')) {
  console.log('Redirecting... Bye!')
        window.location.assign("https://github.com/Kitki30/Mechownik/wiki/1.-Installing-bot");
} else {
alert("Redirect canceled! ")
      }
    }