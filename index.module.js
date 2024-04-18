


function myYoutube() {

    var query= document.getElementById("query").value
    getData(query)
    console.log(query)

}

async function getData(query){

    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=AIzaSyAnXHSGQpws1hTtl1AicH6EGPO3PIq1Dwc`

    var res = await (await fetch(url)).json()
    appendData(res.items)
    console.log(res.items)


}



function appendData(data){

    var container = document.getElementById("container")
     container.innerHTML = null;
    data.forEach(function(el){

        let image = document.createElement("img")
        image.src = el.snippet.thumbnails.medium.url

        let title= document.createElement("h3")
        title.innerText =  el.snippet.title
         

        let div= document.createElement("div")
        div.onclick = () => {
            saveVideo(el)
        }
        div.append(image,title)

        container.append(div)

    })
}

function saveVideo(data){
    localStorage.setItem("videos",JSON.stringify(data))
    window.location.href="video.html"
    

}