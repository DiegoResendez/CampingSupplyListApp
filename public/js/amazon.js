const textSearchElement = document.getElementById("searchAmazon");
const textElement = document.getElementById("amazonSearchText").value;
const searchInfoElement = document.getElementById("searchResults01")
let text = "";
$("#searchAmazon").click(() => {
 text = $("#amazonSearchText").val();
 searchAmazon();
});
function searchAmazon() {
  let settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://amazon-product-search.p.rapidapi.com/amazon-search/search.php?search="+ text +"&region=com&page=1",
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "amazon-product-search.p.rapidapi.com",
      "x-rapidapi-key": "906589c267mshf9a4f4892b356a0p149e31jsn16ecd1a6860c"
    }
  }
  $.ajax(settings).done(function (response) {
    // console.log(response);
    for(let i = 0; i < 19; i++){
      let node = document.createElement("li");
      node.classList.add("list-group-item");
      node1.innerHTML = response.result[i].url;
      node2.innerHTML = response.response[i].price;
      searchInfoElement.appendChild(node1);
      searchInfoElement.appendChild(node2);
    }
  });
removeHide();
}
function removeHide(){
  let classElement = document.getElementById("AmazonSearchResults");
  classElement.classList.remove("hide")
}
  textSearchElement.addEventListener("click", searchAmazon);