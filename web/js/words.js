export const words = ( (await ((await fetch("/data/words.txt")).text())) ).split("\n")

export function GetRandomWords(count = 1){
    let ret = []
    for(let i = 0;i<count;i++){
        ret.push(words[Math.floor(Math.random()*words.length)])
    }

    return ret
}

export function ConvertStringToSpans(str){
    return str.split("").map(char=>{
        let el = document.createElement("span")
        ;el.textContent = char;
        return el
    })
}

let spans = ConvertStringToSpans(GetRandomWords(10).join(" "))
document.querySelector("#letters").append(...spans)