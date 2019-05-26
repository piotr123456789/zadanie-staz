
 var post = [
    {
        title: "One",
        upvotes : 1234,
        score : 1000,
        num_comments: 100,
        created: "2019-05-2 14:07:16"
    },
    {
        title: "Two",
        upvotes: 1354,
        score: 800,
        num_comments: 80,
        created: "2019-05-24 18:07:16"
    },
    {
        title: "three",
        upvotes: 1605,
        score : 908,
        num_comments:90,
        created: "2014-09-24 18:07:16"
    },
    {
        title: "four",
        upvotes: 1605,
        score: 960,
        num_comments:90,
        created: "2014-09-22 14:07:16"
    },
    {
        title: "five",
        upvotes: 1605,
        score: 930,
        num_comments: 90,
        created: "2014-09-16 14:07:16"
    }  
]


let xhr = new XMLHttpRequest();

    //typ połączenia, url, czy połączenie asynchroniczne
    xhr.open("GET", "https://www.reddit.com/r/funny.json", true);

    xhr.addEventListener('load', function() {
        console.log('Wynik połączenia:');

        let json = JSON.parse(this.responseText);
        let datasuper = json.data.children;
        let obj = [];


        for (let i = 0; i < datasuper.length; i++) {
           
        //    console.log(datasuper[i].data.title);
        //    console.log(datasuper[i].data.score);
        //    console.log(datasuper[i].data.ups);
        //    console.log(datasuper[i].data.num_comments);
        //    console.log(datasuper[i].data.created);
            obj.push({
                title: datasuper[i].data.title , 
                upvotes: datasuper[i].data.ups,
                score : datasuper[i].data.score,
                num_comments: datasuper[i].data.num_comments ,
                created: datasuper[i].data.created
            
            });
          
            
        }

        post = obj;
       // console.log(obj);
       // console.log(post);

let handlerDo = document.getElementById('do'); 
 let handlerOne = '';
 let handlerTwo = '';


handlerDo.addEventListener('click',function(){

     handlerOne = document.getElementById('forvalue');
     handlerTwo = document.getElementById('selectOne');
    
handlerOne = handlerOne.value;
handlerTwo =  handlerTwo.value;

});

var theBigDay = new Date("July 1, 1999");
var sameAsBigDay = new Date();
let tablica = ['glos','komentarz','Ocena'];
let tablica2 = ['upvotes','num_comments','score'];
let treejs = document.getElementById('table');
let tree = '';
    post.forEach(function(ele,index){
        tree +=`<tr><th>${index+1}</th><th>${ele.title}</th> <td>${ele.upvotes}</td> <td>${ele.score}</td>  <td>${ele.num_comments}</td>  <td>${ new Date(ele.created).toDateString()}</td></tr>`;                                                
        });
    treejs.innerHTML = tree;
  function sort(x,y)
    {
            tree = '';           
        for (let i = 0; i < tablica.length; i++) 
        {
            switch (x) {
             case tablica[i]:
              if(y == 'up'){                                                
              //   console.log('up');
                 post =  post.sort(function(a,b) {
                                                                    
                    return a[tablica2[i]] - b[tablica2[i]];
                                                                    
                 });

                 post.forEach(function(ele,index){

                tree +=`<tr><th>${index+1}</th><th>${ele.title}</th> <td>${ele.upvotes}</td> <td>${ele.score}</td>  <td>${ele.num_comments}</td>  <td>${new Date(ele.created).toDateString()}</td></tr>`;
                                                                    
              });

                 treejs.innerHTML = tree;
            }else{

             console.log('down');
              post = post.sort(function(a,b) {
                                                                    
              return b[tablica2[i]] - a[tablica2[i]] ;
                                                                    
             });

            post.forEach(function(ele,index){

             tree +=`<tr><th>${index+1}</th><th>${ele.title}</th> <td>${ele.upvotes}</td> <td>${ele.score}</td>  <td>${ele.num_comments}</td>  <td>${new Date(ele.created).toDateString()}</td></tr>`;
                                                       
             });
                treejs.innerHTML = tree;
            } 
                                                            
            break; 
         }
    }  
 }  
                                                       
let tabkeHelp = [];
let max= [];  
let index = 0; 
let tablesuper = [];

 function choose()
 {     
     tabkeHelp = [];

    for(let i = 0 ; i < post.length ; i++ )
    {
       tabkeHelp.push(post[i].num_comments + post[i].upvotes);
    }


    let current = 1;

    for (var i=0; i < tabkeHelp.length; i++)
     {

         if (max <= tabkeHelp[i]) 
         {
             max = tabkeHelp[i];
             index = i;
            // console.log(max);
            // console.log(index);
         }else if(tabkeHelp[i] == tabkeHelp[current]){
    
            tablesuper.push(i);
            tablesuper.push(current);
         }

         current++;

     }

     let textmessage = '';
    // console.log(`to jest to ${tablesuper}`);
    // console.log(index);
     //console.log(tabkeHelp);
      let handlerthree = document.querySelector('.provide');

    if( tablesuper.length > 0 )
    {
        let wynik = [] ;
    
            for (let i = 0; i < tablesuper.length; i++)
            {          
                wynik.push(Date.parse(post[tablesuper[i]].created));
                    
               
            }
       //  console.log(wynik[0]);
            let zal = 0;
            let cel = 0;
        
            for (let i = 0; i < wynik.length; i++)
            {
                if (zal <= wynik[i]) 
                {
                  zal = wynik[i];
                  cel = i;
                } 

                textmessage = `Najbardziej ceniony tytuł to ${post[tablesuper[cel]].title}`;
                handlerthree.innerHTML = textmessage;
            }
    }else{

          textmessage = `Najbardziej ceniony tytuł to ${post[index].title}`; 
          handlerthree.innerHTML = textmessage;
      }

 
  // let textmessage = `Najbardziej ceniony tytuł to ${post[tablesuper[cel]].title}`; 
   // handlerthree.innerHTML = textmessage;
                
        } 

 function lastday()
 {

     let handlerfour = document.querySelector('.provide1');
     let textmessageOne;
     let lastDescription = 'nie ma takiej daty' ;
     var timestamp = Date.now();
     //console.log(timestamp);
     //console.log(new Date(timestamp));

     for (let i = 0; i < post.length; i++)
       {
        if(timestamp-86400000 <= post[i].created)
         {
             lastDescription = i;  

            // console.log(new Date(post[i].created));
         }  
        }
        if(lastDescription == 'nie ma takiej daty')
        {
            textmessageOne = `Post z ostatnich 24H to tytuł  ${lastDescription}`;
        }
        else{
            textmessageOne = `Post z ostatnich 24H to tytuł  ${post[lastDescription].title}`;            
        }
        handlerfour.innerHTML = textmessageOne;
}

choose();
lastday();                                                    
 
handlerDo.addEventListener('click',function(){
//console.log(handlerOne);
//console.log(handlerTwo);

sort(handlerOne,handlerTwo);
});

 });

    xhr.send();










