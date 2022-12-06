class KosarModel{
    #kosaram = []
    #db
    #osszar
    constructor(kosaram){
        this.#kosaram = kosaram;
        this.#db = 0;
        this.#osszar = 0;  
    };

    getKosaram(){
        
        return this.#kosaram;
    };

    setKosar(adat){
        let azonosElem = this.#kosaram.findIndex((elem)=>{
            return elem.id == adat.id;
        });
        if (azonosElem >= 0) {
            this.#kosaram[azonosElem].db++;
        }
        else{
            this.#kosaram.push(adat);
            this.#kosaram[this.#kosaram.length - 1].db = 1;
        }
    };
    setKosar2(adat){
        let azonosElem = this.#kosaram.findIndex((elem)=>{
            return elem.id == adat.id;
        });
        if (azonosElem >= 0) {
            this.#kosaram[azonosElem].db--;
        }
        else{
            this.#kosaram.push(adat);
            this.#kosaram[this.#kosaram.length - 1].db = 1;
        }
    };

    getDarab(){
        return this.#kosaram.length;
    };

    getOsszar(){
        let ossz=0
        this.#kosaram.forEach(elem =>{
            ossz += elem.ar
        })
        this.#osszar = ossz;
        return ossz
    };
    setPlusz(){

    }

    

}
export default KosarModel;
