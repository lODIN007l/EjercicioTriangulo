// declaracion de variables
var a=0 ;
var b =0;
var c =0;
// 
var aCorrect=0 ;
var aCorrect =0;
var cCorrect =0;
var tipo='' ;
var res =0;
// var res ;


// Funciones 
// funion de validacion de tipo de numero
funcionVal=(dato)=>{
 try{
    if (typeof(dato) =='number' ){
		  // console.log('dato numerico')
    	if (dato>0){
     		 console.log('dato valido');
      		return true;
      
    }else{
      console.log('ingrese un valor positivo o diferente de 0 ')
      return false
    }
  }else{
    console.log('dato no numerico')
    return false
  }
   // return true ;
  
 }catch(error){
  	console.log('error de dato no valido ');
   return false;
 }
}

// identificar el tipo de triangulo
funcionTipo=(a,b,c)=>{
	if(a==b && b==c) {
    			tipo= 'equilatero';
           console.log('equilatero');
    			funCalcularEqulatero(a,b,c)
    			    // console.log(" ")
    			return tipo
        } else if(a==b || b==c || a==c) {
          	tipo= 'isosceles';
          console.log('isosceles');
          	funIsoceles(a,b,c)
          return tipo
        } else { //(a!=b && b!=c)
          	tipo= 'escaleno';
          console.log('escaleno');
          funEscaleno(a,b,c);
          return tipo
        }
}

funCalcularEqulatero=(a,b,c)=>{
  res=(a*b)/2
  console.log('El area Es :');
  console.log(res.toFixed(2));
}
funIsoceles=(a,b,c)=>{
  // h = √a2 – (b2/4)
  var h=Math.sqrt((a*a)- ((b*b)/4))
  
  res=(a*h)/2
  console.log('El area Es :');
  console.log(res.toFixed(2));
}

funEscaleno=(a,b,c)=>{
  // sp = (a + b + c)
  //           2
  var sp=((a+b+c)/2)
  res=Math.sqrt(sp*(sp-a)*(sp-b)*(sp-c))
  console.log('El area Es :');
  console.log(res.toFixed(2));
}
// 

// funcion de correcion de datos 
funcionTipodeltriangulo=(a,b,c)=>{
// 
 try{
    if(funcionVal(a)== true){
      // 
      aCorrect=a
   		// console.log('dato invalido')
       if(funcionVal(b)== true){
         // 
      bCorrect=b
         // 
      if(funcionVal(c)== true){
     			cCorrect=c
        	funcionTipo(aCorrect,bCorrect,cCorrect);
   		}
   }
    }else{
	    console.log('dato invalido')
      return 
   }
    // console.log(aCorrect);
    // console.log(bCorrect);
    // console.log(cCorrect);
   // 
 }catch(error){
  	console.log('error del proceso');
   return false;
 }
  
}

// funcionTipodeltriangulo(3,4,5);

// // 
