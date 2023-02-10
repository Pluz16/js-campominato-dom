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