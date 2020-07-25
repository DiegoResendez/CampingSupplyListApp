$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });
});


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
// $(document).ready(() => {
//   // This file just does a GET request to figure out which user is logged in
//   // and updates the HTML on the page
//   $.get("/api/user_data").then(data => {
//     $(".member-name").text(data.email);
//   });
// });

$(document).ready(function() {
    // Getting a reference to the input field where user adds a new todo
    var $newItemInput = $("input.new-item");
    // Our new todos will go inside the todoContainer
    var $campinglistContainer = $(".campinglist-container");
    // Adding event listeners for deleting, editing, and adding todos
    $(document).on("click", "button.delete", deleteCampinglist);
    $(document).on("click", "button.complete", toggleComplete);
    $(document).on("click", ".todo-item", editCampinglist);
    $(document).on("keyup", ".todo-item", finishEdit);
    $(document).on("blur", ".todo-item", cancelEdit);
    $(document).on("submit", "#todo-form", insertCampinglist);
  
    // Our initial todos array
    var campinglist = [];
  
    // Getting todos from database when page loads
    getCampinglist();
  
    // This function resets the todos displayed with new todos from the database
    function initializeRows() {
      $campinglistContainer.empty();
      var rowsToAdd = [];
      for (var i = 0; i < todos.length; i++) {
        rowsToAdd.push(createNewRow(todos[i]));
      }
      $campinglistContainer.prepend(rowsToAdd);
    }
  
    // This function grabs todos from the database and updates the view
    function getCampinglist() {
      $.get("/api/campinglist", function(data) {
        campinglist = data;
        initializeRows();
      });
    }
  
    // This function deletes a todo when the user clicks the delete button
    function deleteTodo(event) {
      event.stopPropagation();
      var id = $(this).data("id");
      $.ajax({
        method: "DELETE",
        url: "/api/campinglist/" + id
      }).then(getCampinglist);
    }
  
    // This function handles showing the input box for a user to edit a todo
    function editCampinglist() {
      var currentCampinglist= $(this).data("campinglist");
      $(this).children().hide();
      $(this).children("input.edit").val(currentCampinglist.text);
      $(this).children("input.edit").show();
      $(this).children("input.edit").focus();
    }
  
    // Toggles complete status
    function toggleComplete(event) {
      event.stopPropagation();
      var campinglist = $(this).parent().data("campinglist");
      campinglist.complete = !campinglist.complete;
      updateCampinglist(campinglist);
    }
  
    // This function starts updating a todo in the database if a user hits the "Enter Key"
    // While in edit mode
    function finishEdit(event) {
      var updatedCampinglist = $(this).data("campinglist");
      if (event.which === 13) {
        updatedCampinglist.text = $(this).children("input").val().trim();
        $(this).blur();
        updateCampinglist(updatedCampinglist);
      }
    }
  
    // This function updates a todo in our database
    function updateCampinglist(campinglist) {
      $.ajax({
        method: "PUT",
        url: "/api/campinglist",
        data: campinglist
      }).then(getCampinglist);
    }
  
    // This function is called whenever a todo item is in edit mode and loses focus
    // This cancels any edits being made
    function cancelEdit() {
      var currentCampinglist = $(this).data("campinglist");
      if (currentCampinglist) {
        $(this).children().hide();
        $(this).children("input.edit").val(currentCampinglist.text);
        $(this).children("span").show();
        $(this).children("button").show();
      }
    }
  
    // This function constructs a todo-item row
    function createNewRow(campinglist) {
      var $newInputRow = $(
        [
          "<li class='list-group-item campinglist-item'>",
          "<span>",
          todo.text,
          "</span>",
          "<input type='text' class='edit' style='display: none;'>",
          "<button class='delete btn btn-danger'>x</button>",
          "<button class='complete btn btn-primary'>✓</button>",
          "</li>"
        ].join("")
      );
  
      $newInputRow.find("button.delete").data("id", campinglist.id);
      $newInputRow.find("input.edit").css("display", "none");
      $newInputRow.data("campinglist", campinglist);
      if (campinglist.complete) {
        $newInputRow.find("span").css("text-decoration", "line-through");
      }
      return $newInputRow;
    }
  
    // This function inserts a new todo into our database and then updates the view
    function insertCampinglist(event) {
      event.preventDefault();
      var campinglist = {
        text: $newItemInput.val().trim(),
        complete: false
      };
  
      $.post("/api/campinglist", campinglist, getCampinglist);
      $newItemInput.val("");
    }
  });
