//temperature
// ฟาเรนไฮต์ = (เซสเซียส * 1.8) + 32
//  เซสเซียส = (ฟาเรนไฮต์ - 32) / 1.8

function ctof(){
    let celsius = document.getElementById("inputcelsius").value

    if(celsius === ''){
        alert("ถ้าจะแปลงเป็นฟาเรนไฮต์กรุณากรอกองศาเซลเซียส !⚠️")
    }
    else{
        resultfarenheit = (celsius * 1.8) + 32
        document.getElementById("resultfarenheit").innerHTML = "แปลงจาก : "+celsius+" °C"+"<br>"+"ได้เป็น : "+resultfarenheit.toFixed(2) +" °F" 
    }


}

function ftoc(){
    let fahrenheit = document.getElementById("inputfahrenheit").value

    if(fahrenheit === ''){
        alert("ถ้าจะแปลงเป็นองสาเซลเซียสกรุณากรอกองศาฟาเรนไฮต์ !⚠️")
    }
    else{
        resultcelsius = (fahrenheit - 32) / 1.8
        document.getElementById("resultcelsius").innerHTML = "แปลงจาก : "+fahrenheit+" °F"+"<br>"+"ได้เป็น : "+ resultcelsius.toFixed(2) +" °C"
    }
}