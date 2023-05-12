import Lampa from "./lampa.js";
class Jatekter {
  #allapotLista;
  #meret;
  #db;
  #lepes;
   
     
  constructor() {
    this.#allapotLista=[];
    this.#lepes=0;
    this.#meret=3;
    this.#db = 0;
    const szuloElem = $("article");
    for (let index = 0; index < 9; index++) {
      const elem = new Elem(szuloElem, index);
    }
    
  }
  setAllapotLista() {
    let hossz = this.#meret*3;
    for (let index = 0; index < hossz; index++) {
        let random  = Math.floor(Math.random()*1)
        hamis = false
        if (random == 0){
            hamis=true;
        }

        this.#allapotLista.push(hamis)
        
        
    }
 
  }
  szomszedokKeresese(id){



  }
  init(){
    for (let index = 0; index < this.#allapotLista.length; index++) {

      
    }
    
  }
  ellenorzes(){
    if (this.#db == this.#allapotLista.length){
        console.log("vege a jatéknak")

    }
    
  }
 
}
export default Jatekter;
