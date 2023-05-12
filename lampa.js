class Lampa{
    #allapot;
    #id;
    #divElem;
    constructor(allapot,id,divElem){
        this.#allapot=allapot;
        this.#id=id;
        this.#divElem=divElem;

    }
    setAllapot(){
        if (this.allapot== false){
            this.#allapot= true;
        }
        else{
            this.allapot=true
        }
        this.szinBeallit();


    }
    szinBeallit(){
    
    }
    kattintasTrigger(){

            const esemeny = new CustomEvent("elemKivalasztas", {
              detail: this,
            });
            window.dispatchEvent(esemeny);
          
    }


}
export default Lampa ;