class AdminModel {
  #admintabla = [];
  constructor(admintabla) {
    this.#admintabla = admintabla;
  }
  getAdminTabla() {
    return this.#admintabla;
  }
  setAdminTabla(konyvekobj) {
    this.#admintabla = konyvekobj;
  }
  /*Torol(vegpont, id) {
    console.log("Töröltem: " + id);
    vegpont += "/" + id;
    console.log(vegpont);
    fetch(vegpont, {
      method: "DELETE",
    })
      .then()
      .then(() => {
        console.log("Sikeres törlés");
      })
      .catch((error) => {
        console.error("Hiba Hiba!!!:  ", error);
      });
  }*/

  Torol(adat) {
    let azonosElem = this.#admintabla.findIndex((elem) => {
      return elem.id == adat.id;
    });
    if (azonosElem >= 0) {
      this.#admintabla.splice(adat.id, 1);
    } else {
     this.#admintabla.push(adat);
    }
  }


}
export default AdminModel;
