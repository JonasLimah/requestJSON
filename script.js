async function readposts(){
    let postArea =document.querySelector(".area");
    postArea.innerHTML = "carregando..."
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let json = await response.json();

    if (json.length > 0 ) {
        postArea.innerHTML = ''
        for (let i in json){
            let postHtml = `<div><h1>${json[i].title}</h1>${json[i].body}<hr/><div>`
            postArea.innerHTML += postHtml;
        }   
    } else {
        postArea.innerHTML = "nenhum post para exibir"
    }
}


document.querySelector("#botao").addEventListener("click", ()=>{
    let title = document.querySelector("#titleFild").value;
    let body = document.querySelector("#bodyFild").value;
    if (title && body){
        addNewPost(title,body)
    }else{
        alert("preencha todos os cantos")
    }    
})


readposts();


async function addNewPost(title,body){
    await fetch("https://jsonplaceholder.typicode.com/posts", ({
        method:"POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            title,
            body,
            userID: 2
        })
    }))
   
        document.querySelector("#titleFild").value = ""
        document.querySelector("#bodyFild").value = ""
        readposts();

}


