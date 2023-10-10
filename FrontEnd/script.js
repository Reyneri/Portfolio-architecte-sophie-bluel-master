const boutonFiltreTous = document.querySelector(".Tous_btn")
const boutonFiltreObjets = document.querySelector(".Objets_btn")
const boutonFiltreAppartements = document.querySelector(".Appartements_btn")
const boutonFiltreHotels = document.querySelector(".Hôtels-restaurants_btn")



// D'abord je créer la fonction qui me permet d'effacer la gallerie en attendant les element qui seront integrée de l'api

boutonFiltreTous.addEventListener("click", async function() {
    document.querySelector(".galery").innerHTML="";
    await init (elements);
})