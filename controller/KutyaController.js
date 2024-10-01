import Kartyak from "../view/Kartyak.js";
import AdatModel from "../model/AdatModel.js";

export default class KutyaController{
    constructor(){
        this.tartalomElem = $(".tartalom")[0];
        this.adatModel = new AdatModel();
        new Kartyak(this.adatModel.getList(), this.tartalomElem);
        this.#esemenykezelo();
    }

    #esemenykezelo(){
        $(window).on("kattintas",(event)=>{
            console.log(event.detail);
        new Kartyak(this.adatModel.getList(), this.tartalomElem);
        });
    }
}