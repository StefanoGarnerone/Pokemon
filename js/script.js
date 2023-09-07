// const prova=()=>{
//     let num=document.getElementById("numero").value
//     let ris=document.getElementById("risultato")
//     ris.innerHTML=num
// }
const RicercaDebolezza=()=>{
    let Risultato=document.getElementById("risultato")
    let Tutti=document.getElementById("tutti")
    let debolezza=document.getElementById("inp").value
    let contImag=document.getElementById("imag")
    // console.log(debolezza)
    Tutti.innerHTML=""
    Risultato.innerHTML=""
    contImag.innerHTML=""
    let i=0
    let poke=[]
    let c=0
    let f=0
    let Nz=-1
    let DEBOLEZZA=""+debolezza
    for(i=0;i<Nn;i++){
        f=0
        while(f<pokedex[i].debolezze.length){
            if (pokedex[i].debolezze[f].toLowerCase()==DEBOLEZZA.toLowerCase()) {
                poke[c]=pokedex[i].nome
                c++
                Nz=i
            }
            f++
        }
    }
    console.log(poke.sort())
    if (Nz==-1) {
        Risultato.innerHTML="Non è stato trovato nessun pokemon con la debolezza inserita, riprova."
    } else {
        Risultato.innerHTML="I pokemon con debolezza <b>"+debolezza+"</b> sono <b>"+poke.length+"</b>:"
        Nz=-1
        i=0
        while(Nz==-1 && i<deb.length){
            if(debolezza.toLowerCase()==deb[i].tipo){
                Nz=i
            }
            i++
        }
        let Img=document.createElement("img")
        Img.src=deb[Nz].img
        contImag.appendChild(Img)
        for(i=0;i<poke.length;i++){
            poke[i]=poke[i]+" "
            Tutti.append(poke[i])
        }
    }
}
const RicercaNome=()=>{
    let name=document.getElementById("inp").value
    let contName=document.getElementById("nome")
    let contImg=document.getElementById("img")
    let contStat=document.getElementById("stat")
    let Nz=-1
    let NAME=""+name
    contName.innerHTML=""
    contImg.innerHTML=""
    contStat.innerHTML=""
    let i=0
    // console.log(NAME.toLowerCase())
    while (i<Nn && Nz==-1) {
        let NPOK=""+pokedex[i].nome
        if(NPOK.toLowerCase()==NAME.toLowerCase()){
           Nz=i
        }
        i++
    } 
    if (Nz==-1) {
        contStat.innerHTML="Il pokemon non è stato trovato, controlla se è scritto correttamente."
    }else{
        let IMG=document.createElement("img")
        IMG.src=pokedex[Nz].img_url
        contImg.appendChild(IMG)
        contName.innerHTML="NOME POKEMON: <b>"+pokedex[Nz].nome+"<br><br></b>"
        contStat.innerHTML="CARATTERISTICHE: <br><br>NUMERO POKEDEX: <b>"+pokedex[Nz].numero+"</b><br>"+"STADIO EVOLUTIVO: <b>"+pokedex[Nz].stadio_evolutivo+"</b><br>"+"TIPO: <b>"+pokedex[Nz].tipo+"</b><br>"+"DEBOLEZZE: <b>"+pokedex[Nz].debolezze+"</b><br>"
    }
}
const RicercaNumero=()=>{
    //console.log("SONO IN RICERCA")
    let num=document.getElementById("inp").value
    // console.log(numero)
    let contName=document.getElementById("nome")
    let contImg=document.getElementById("img")
    let contStat=document.getElementById("stat")
    let Nz=-1
    contName.innerHTML=""
    contImg.innerHTML=""
    contStat.innerHTML=""
    let i=0
    let str=""+num
    let pad="0000"
    let NUM=pad.substring(str.length)+str
    // console.log(NUM)
    // console.log(Nn)
    while(i<Nn && Nz==-1){
        let str2=""+pokedex[i].numero
        let pad2="0000"
        let Npok=pad2.substring(str2.length)+str2
        if (Npok==NUM) {
            Nz=i
            // console.log(Nz)
            // console.log(pokedex[Nz].nome)
        }
        i++
    }    
    if (Nz==-1) {
        // console.log("NON TROVATO")
        contStat.innerHTML="Il pokemon non è stato trovato, riprova."
    }else{
        let IMG=document.createElement("img")
        IMG.src=pokedex[Nz].img_url
        contImg.appendChild(IMG)
        contName.innerHTML="NOME POKEMON: <b>"+pokedex[Nz].nome+"<br><br></b>"
        contStat.innerHTML="CARATTERISTICHE: <br><br>NUMERO POKEDEX: <b>"+pokedex[Nz].numero+"</b><br>"+"STADIO EVOLUTIVO: <b>"+pokedex[Nz].stadio_evolutivo+"</b><br>"+"TIPO: <b>"+pokedex[Nz].tipo+"</b><br>"+"DEBOLEZZE: <b>"+pokedex[Nz].debolezze+"</b><br>"
    }
}

