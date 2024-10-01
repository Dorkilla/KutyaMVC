export default class Kartya{
    #kutyaAdat={};
    #szuloElem;

    constructor(adat,szuloElem){
        this.#kutyaAdat=adat
        this.#szuloElem=szuloElem
        this.kutyaKiir()
        this.gombElem=$(".kivalaszt:last")
        this.gombKattint()
    }

    kutyaKiir(kutyaAdat){
        const txt = `<div class="card col-lg-4 col-md-6">
        <div class="card-body">
            <h3 class="card-title">Név: ${this.#kutyaAdat.nev}</h3>
            <p class="card-text">Kor: ${this.#kutyaAdat.nev}</p>
            <p class="card-text">Nem: ${this.#kutyaAdat.nem}</p>
            </div>
            <button class="kiv btn btn-success">Kiválaszt</button>
            </div>`;
        this.#szuloElem.innerHTML += txt;
        
    }
        gombKattint(){
            this.gombElem.on("click",()=>{
                console.log(this)
                const e = new CustomEvent("kivalaszt",{detail:this.#kutyaAdat})
                window.dispatchEvent(e)
            });
        }
    }


