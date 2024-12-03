
// =================الطريقه الاولة والافضل فيهم ==================

function getApi(){
    var xhttp = new XMLHttpRequest;
    
    xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status ==200){
           var x = this.responseText;
           var mohamed = JSON.parse(x);
           var ahmed = mohamed.recipes;
           var myText="";
           for(var i=0; i<ahmed.lennth;i++){

            var cartoona = ` <div class="col-md-4 text-text-center mb-4">
                            <img src="${ahmed[i].image_url}" style="height:350p" class="img-fluid">
                            <h3>${ahmed[i].publisher}</h3>
                            <h5>${ahmed[i].title}</h5>
                            </div>
                            `;

            myText = myText + cartoona;

        }

        document.querySelector(".test").innerHTML = cartoona ;
        }
    }

    xhttp.open("GET" , "https://forkify-api.herokuapp.com/api/search?q=pizza" , true);
    xhttp.send();
}


// ==================الطريقه التانية=============================

// function getApi(){



//     fetch('https://jsonplaceholder.typicode.com/photos')
//     .then(function(element){
//         return element.json()
//     })
//     .then(function(ahmed){
//         document.querySelector("#demo").innerHTML =ahmed[0].title
        
//     })

// }


// ==================الطريقه التالتة=============================

// async function getApi(){
//     var element = await fetch('https://jsonplaceholder.typicode.com/photos');
//     var ahmed = await element.json();
//     var mytext="";
//     for(var i=0; i<ahmed.lennth;i++){

//         var cartoona = ` <div class="col-md-4 text-text-center mb-4">
//                          <img src="${ahmed[i].url}" class="img-fluid">
//                          <h3>${ahmed[i].id}</h3>
//                          <h5>${ahmed[i].title}</h5>
//                          </div>
//                          `;

//         mytext = mytext + cartoona;

//     }

//     document.querySelector(".test").innerHTML = cartoona ;


// }


// getApi();