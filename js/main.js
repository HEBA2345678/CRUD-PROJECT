
//var x=+(window.prompt("Enter your age"))

//userAge(x)

//function userAge(x) {
// if(x==undefined) x=0


 //while(Number.isNaN(x)) {
 //   x=+(window.prompt("you enterd not valid num enter agin "))
 //}


 //   if(x>=18)
  //  {      var cartona =""
  //      for( var i=0;i<=100;i++){
  //          cartona +=`<div class="card" style="width: 18rem;">
  //<img src="./image/pngtree-bird-cartoon-hand-drawn-character-png-image_1286109.jpg" class="card-img-top" alt="...">
  //<div class="card-body">
  //  <p class="card-text"> `+ i +`     ${x}       Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  //</div>
//</div>`

//} 
//document.getElementById("demo").innerHTML= cartona
  //  }
   // else{
   //     document.getElementById("text").innerHTML=`<h1> you are not eligble to log the website </h1>`
   // }
   // }



  // 2nd intership
 //function fullName(){


//var firstName =document.getElementById("fname").value
//var lastName =document.getElementById("lname").value


//document.getElementById("FullName").innerText= firstName + lastName

 //}


 //var productList = [
///{name :" phone" , price : 45000},
///{name : "laptop", price : 85000 },
//{name : "mac" , price : 95000},
//{name : "hp"  , price : 45000},
//{name : "Dell ", price : 45000},
// ];

 // var cartona = ""
 // for (var i = 0; i < productList.length; i++) {
    
   ///// cartona += `
    //<tr>
    ///<td>${i+1}</td>
    /// <td>${productList[i].name}</td>
    /// <td>${productList[i].price}</td>
   /// </tr>

    //`
 /// }  
  //document.getElementById("demo").innerHTML=cartona
  var counter =""
var saveBtn =document.getElementById("saveBtn")
  var productList 
  if(localStorage.getItem("productList")==null){
  productList=[]
  }
  else
  {
productList=JSON.parse(localStorage.getItem("productList"))
displayList(productList)
  }


  function localStorageUpdate() {
    localStorage.setItem( "productList" , JSON.stringify(productList)  )
  }
  var ProdectName =document.getElementById("PrdName")
  var ProdectPrice =document.getElementById("PrdPrice")
  var ProdectCategry =document.getElementById("PrdCat") 
  var ProdectDescription =document.getElementById("PrdDes")



function addProdect() {

  if(validateName()&&validatePrice()&&validateCateg()&&validateDesc()){
    var product={

name :ProdectName.value ,
price : ProdectPrice.value ,
categ:ProdectCategry.value,
desc:ProdectDescription.value,


    }

    productList.push(product)
    localStorageUpdate()
    displayList(productList)
    validateName()
    validatePrice()
    validateCateg()
    validateDesc()
    clearProduct()
  
    saveBtn.classList.add("d-none") 
    }

}
    function displayList(){
      var cartona = ""
      for (var i = 0; i < productList.length; i++) {
        
        cartona += `
        <tr>
        <td>${i+1}</td>
         <td>${productList[i].newName ?productList[i].newName  :productList[i].name }</td>
         <td>${productList[i].price}</td>
         <td>${productList[i].categ}</td>
         <td>${productList[i].desc}</td>
         <td><button   onclick=" updateProduct(${i})"class="btn btn-warning">Update</button></td>
         <td><button onclick=" deleteProduct(${i})" class="btn btn-danger">Delete</button></td>
       </tr>
    `
    
      }  
      document.getElementById("demo").innerHTML=cartona}


     

     function deleteProduct(index) {
      productList.splice(index,1)
      localStorageUpdate()
      displayList(productList)
     }

     function clearProduct(){
      ProdectName.value ="",
 ProdectPrice.value="" ,
ProdectCategry.value="",
ProdectDescription.value=""}

     
function updateProduct(index){

  ProdectName.value =productList[index].name,
  ProdectPrice.value=productList[index].price ,
 ProdectCategry.value=productList[index].categ,
 ProdectDescription.value=productList[index].desc
 counter=index;
 saveBtn.classList.remove("d-none")
}

function saveUpdate(){
  productList[counter].name=ProdectName.value;
  productList[counter].price =ProdectPrice.value;
  productList[counter].categ=ProdectCategry.value;
  productList[counter].desc=ProdectDescription.value

  localStorageUpdate()
  displayList(productList)
  clearProduct()
  saveBtn.classList.add("d-none")
}     


function searchProduct(data) {
  var newProductList=[];


  for (var  i = 0; i < productList.length; i++) {

   
 if(productList[i].name.toLowerCase().includes(data.toLowerCase())){
  productList[i].newName=productList[i].name.toLowerCase().replaceAll(data.toLowerCase(), `<span class="text-danger">${data.toLowerCase()}</span>`)
  newProductList.push(productList[i])

 }
 displayList(newProductList)
    
  }
  
}


function validateName(){

var regex=/^[A-Z]{4}$/ ;

if(regex.test(ProdectName.value)){
  ProdectName.style.border="none"
  document.getElementById("invalidName").classList.add("d-none")
 return true
}
else{
  ProdectName.style.border="solid 2px red"
  document.getElementById("invalidName").classList.remove("d-none")
  return false
  
}
}


function validatePrice(){

  var regex=/^[1-9][0-9]{3}$/ ;
  
  if(regex.test(ProdectPrice.value)){
    ProdectPrice.style.border="none"
    document.getElementById("invalidPrice").classList.add("d-none")
   return true
  }
  else{
    ProdectPrice.style.border="solid 2px red"
    document.getElementById("invalidPrice").classList.remove("d-none")
    return false
    
  }
  }


  function validateCateg(){

    var regex=/^[A-Z]$/ ;
    
    if(regex.test(ProdectCategry.value)){
      ProdectCategry.style.border="none"
      document.getElementById("invalidCat").classList.add("d-none")
     return true
    }
    else{
      ProdectCategry.style.border="solid 2px red"
      document.getElementById("invalidCat").classList.remove("d-none")
      return false
      
    }
    }


    function validateDesc(){

      var regex=/^[A-Z]{4}$/ ;
      
      if(regex.test(ProdectDescription.value)){
        ProdectDescription.style.border="none"
        document.getElementById("invalidDesc").classList.add("d-none")
       return true
      }
      else{
        ProdectDescription.style.border="solid 2px red"
        document.getElementById("invalidDesc").classList.remove("d-none")
        return false
        
      }
      }
