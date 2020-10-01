
var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var clear=document.getElementById("clear");
var inputTypeValue,resultTypeValue;
var show=document.getElementById("demo");
// now add listener
input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);//it is used when we used option filed
resultType.addEventListener("change",myResult);

// taking initial value
inputTypeValue = inputType.value;
resultTypeValue = resultType.value;


function myResult(){
// when we change the input and output type vale we need to updata the 
// inputTypeValue and resultTypeValue
	inputTypeValue = inputType.value;
	resultTypeValue = resultType.value;
// now compare the input and resultType value and add formula

	if(inputTypeValue === "Rs" && resultTypeValue==="Ic"){
		
		show.innerHTML="1 Nepali rupees is equals to  0.63Ic";
	
		result.value = Number(input.value) *0.63;//document.getElementById("result") //value coes in replace of value in html

	}else if(inputTypeValue === "Rs" && resultTypeValue==="Dollar"){

	show.innerHTML="1 Nepali rupees is equals to  0.0085$";
		result.value = Number(input.value) *0.0085;


	}else if(inputTypeValue === "Rs" && resultTypeValue==="yen"){

	show.innerHTML="1 Nepali rupees is equals to  0.89 Japanese yen";
		result.value = Number(input.value) *0.89;

	}else if(inputTypeValue === "Rs" && resultTypeValue==="Rs"){
		//this is meter to meter formula 
		show.innerHTML="1 Nepali Rs is equals to 1 Nepali Rs";
		result.value = input.value
	}



	if(inputTypeValue === "Ic" && resultTypeValue==="Rs"){
		show.innerHTML="1 IC  is equals to  1.59Rs";
		result.value = Number(input.value) *1.59;

	}else if(inputTypeValue === "Ic" && resultTypeValue==="Dollar"){
		show.innerHTML="1 IC  is equals to  0.014$";
		result.value = Number(input.value) * 0.014;

	}else if(inputTypeValue === "Ic" && resultTypeValue==="yen"){
		show.innerHTML="1 IC  is equals to  1.43 Japanese yen";
		result.value = Number(input.value) *1.43;

	}else if(inputTypeValue === "Ic" && resultTypeValue==="Ic"){
	show.innerHTML="1 IC  is equals to  1 IC";
		result.value = input.value
	}

	if(inputTypeValue === "Dollar" && resultTypeValue==="Rs"){
	show.innerHTML="1 Dollar  is equals to  117.60 Rs";
		result.value = Number(input.value) *117.60;
	}else if(inputTypeValue === "Dollar" && resultTypeValue==="Ic"){
		show.innerHTML="1 Dollar  is equals to  1 IC";
		result.value = Number(input.value) * 73.74;
	}else if(inputTypeValue === "Dollar" && resultTypeValue==="yen"){
		show.innerHTML="1 Dollar  is equals to  105 Japanese yen";
		result.value = Number(input.value) *105;
	}else if(inputTypeValue === "Dollar" && resultTypeValue==="Dollar"){
		show.innerHTML="1 Dollar  is equals to  1 Dollar";
		result.value = input.value
	}



	if(inputTypeValue === "yen" && resultTypeValue==="Rs"){
	show.innerHTML="1 Japanese yen  is equals to  1.12 Rs";
		result.value = Number(input.value) *1.12;
	}else if(inputTypeValue === "yen" && resultTypeValue==="Ic"){
		show.innerHTML="1 Japanese yen  is equals to  0.70 IC";
		result.value = Number(input.value) * 0.70;
	}else if(inputTypeValue === "yen" && resultTypeValue==="Dollar"){
		show.innerHTML="1 Japanese yen  is equals to  0.0095$";
		result.value = Number(input.value) *0.0095;
	}else if(inputTypeValue === "yen" && resultTypeValue==="yen"){
		show.innerHTML="1 Japanese yen  is equals to  1japanese yen";
		result.value = input.value
	}

}

clear.addEventListener('click',function(){
document.getElementById("input").value="";
document.getElementById("result").value="";
document.getElementById("demo").innerHTML="";

})
