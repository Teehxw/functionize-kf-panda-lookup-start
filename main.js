// Kung Fu Panda Character Look Up

// Event Listener
document.getElementById('search').addEventListener('click', searchClicked);

// Event Function
function searchClicked() {
  // Get Input Value (what character to look for?)
  let name = document.getElementById('input-name').value;
  name = name.toLowerCase();

  // Test Input Variable and update the page
  if (name === 'po' || name === 'dragon warrior') {
    // Update page to Po
    setCharac("Po"||"dragon warrior", "po", 'Buddy, I am the Dragon Warrior.');
      
  } else if (name === 'tigress' || name === 'master tigress') {
    // Update page to Tigress
    setCharac("Tigress"|| "master tigress", "tigress", 'That was pretty hardcore!');
    
  } else if (name === 'mantis' || name === 'master mantis') {
    // Update page to Mantis
    setCharac("Mantis"|| "master mantis", "mantis", 'Fear the bug!');
     
  } else if (name === 'monkey' || name === 'master monkey') {
    // Update page to Monkey
    setCharac("Monkey"|| "master monkey", "monkey",'We should hang out.' );
     ;
  } else if (name === 'crane' || name === 'master crane') {
    // Update page to Crane
    setCharac("Crane"|| "master crane", "crane", 'You can chain my body, but you will never chain my warrior spirit!');
  
  } else if (name === 'viper' || name === 'master viper') {
    // Update page to Viper
    setCharac("Viper"|| "master viper", "viper", "I don't need to bite to fight!" );
  
      "I don't need to bite to fight!";
  } else if (name === 'shifu' || name === 'master shifu') {
    // Update page to Master Shifu
    setCharac("Shifu"|| "master shifu", "shifu", 'There is now a Level Zero.');
    
  } else if (name === 'ping' || name === 'mr. ping') {
    // Update page to Mr. Ping
    setCharac("Ping"|| "mr.ping", "mr-ping",'We are noodle folk, broth runs through our veins!');

  } else {
    // Update page to Question Mark
    setCharac("????????", "question-mark", "Character Not Found");
  }
}

//Function for updating the page

function setCharac(characName, imgName, quote ){
  document.getElementById('character-name').innerHTML = characName;
  document.getElementById('main-img').src = `img/${imgName}.png`;
  document.getElementById('quote').innerHTML = quote;
}


