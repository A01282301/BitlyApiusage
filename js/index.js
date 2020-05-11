Apikey = 'c8eac2811a5cb8fd8e8f1d0ff53e7f5dc537d525';
url = "https://api-ssl.bitly.com/v4/shorten";

function encodeurl(shorten){
 
    let data = {
        "long_url" : shorten
    }
    let settings = {
    method  : "POST",
    headers : {
    Authorization : `Bearer ${Apikey}`,
    "Content-type" : "application/json"
},
    body : JSON.stringify(data)
    }
    fetch (url, settings).then(
        response => {
            if(response.ok){
                return response.json();
            }
            throw new Error( response.statusText);
        })
        .then (responseJSON => {
            let result = document.querySelector('#Result')
            result.innerHTML = `<a href ="${responseJSON.link}"> Link </a>`
            
        })
        .catch( err =>{

            console.log(err.message);
        
        })
    

}



function watchform(){
    let Submitbtn = document.querySelector("#Submit")

    Submitbtn.addEventListener('click', (event) => {
        event.preventDefault();

        let shorten = document.querySelector("#urlInput").value;
        encodeurl(shorten);

    }
    )

}

function init(){
    watchform();
}


init();