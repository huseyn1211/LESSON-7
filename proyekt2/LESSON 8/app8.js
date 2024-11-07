let a = prompt("tarix daxil edin numune:2024.03.09");
let b = a.split(".")

Number(b[0])
Number(b[1])
Number(b[2])
if (b[1] == 1) {
    console.log(b[2] + " " + "yanvar" + " " + b[0] + 'cu il')
}
else if (b[1] == 2) {
    console.log(b[2] + " " + "fevral" + " " + b[0] + 'cu il')
}
else if (b[1] == 3) {
    console.log(b[2] + " " + "mart" + " " + b[0] + 'cu il')
}
else if (b[1] == 4) {
    console.log(b[2] + " " + "aprel" + " " + b[0] + 'cu il')

}
else if (b[1] == 5) {
    console.log(b[2] + " " + "may" + " " + b[0] + 'cu il')

}
else if (b[1] == 6) {
    console.log(b[2] + " " + "iyun" + " " + b[0] + 'cu il')
}
else if (b[1] == 7) {
    console.log(b[2] + " " + "iyul" + " " + b[0] + 'cu il')
}
else if (b[1] == 8) {
    console.log(b[2] + " " + "avqust" + " " + b[0] + 'cu il')
} else if (b[1] == 9) {
    console.log(b[2] + " " + "sentyabr" + " " + b[0] + 'cu il')
} else if (b[1] == 10) {
    console.log(b[2] + " " + "oktyabr" + " " + b[0] + 'cu il')
} else if (b[1] == 11) {
    console.log(b[2] + " " + "noyabr" + " " + b[0] + 'cu il')
} else if (b[1] == 12) {
    console.log(b[2] + " " + "dekabr" + " " + b[0] + 'cu il')
}
 else 
 {
    console.log("bele emeliyyat yoxdu")
 }





let c = prompt(" doguldugunuz ayin adini reqemle daxil edin : numune 5 ")
c = Number(c)
switch (c) {
    case 1:
        console.log("yanvar")
        break
    case 2:
        console.log("fevral" )
        break
    case 3:
        console.log("mart")
        break
    case 4:
        console.log("aprel")
        break
    case 5:
        console.log("may")
        break
    case 6:
        console.log("iyun")
        break
    case 7:
        console.log("iyul")
        break
    case 8:
        console.log("avqust")
        break
    case 9:
        console.log("sentyabr")
        break
    case 10:
        console.log("oktyabr")
        break
    case 11:
        console.log("noyabr")
        break
    case 12:
        console.log("dekabr")
        break
    default:
        console.log("yanlis secim")



}















