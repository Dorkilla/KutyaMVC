export default class AdatModel{
    #kutyaAdatLista=[
        {nev:"Dézi", kor:12, nem:"nőstény"},
        {nev:"Morzsi", kor:6, nem:"nőstény"},
        {nev:"Blöki", kor:4, nem:"nőstény"},
    ];

    getList(){
        return this.#kutyaAdatLista;
    }

}