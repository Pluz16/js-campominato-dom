//recupero gli elementi dall HTML
const buttonEl = document.getElementById("start_button")
const gridContainerEl = document.getElementById("grid_container")


//genero la griglia al "click"
buttonEl.addEventListener(
    "click",
    function(){
        gridGenerate(gridContainerEl) 
       
}
)



//funzione che mi genera una griglia
function gridGenerate (grid){
    grid.innerHTML = "";  // HTML svuotato per un altra partita
    let tentativi = 0
    
    for(let i = 0; i < 100; i++){ // creo 100 div
       const gridBox = document.createElement("div") // creo un div
       gridBox.classList.add("box_easy") // accedo alla classlist di "div" aggiungo la classe "box"
       gridBox.append ([i + 1])  // inserisco il numero progressivo nel box
       
       gridBox.addEventListener(
           "click",
           function (){
               
    for(let i = 0; i < arrayNumbersBomb.length; i++)
    {
        currentBombNUmber = arrayNumbersBomb[i]
        if(this.innerHTML == currentBombNUmber){
              this.classList.add("bomb")
              // alert("hai perso")
           } else {
               this.classList.add("active")
          }
       }
                      }
       )

       grid.append(gridBox) // inserisco il "div" nella griglia
   }

}