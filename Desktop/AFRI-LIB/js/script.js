function getName() {
    var inputedTitle = document.getElementById("name").value;
    console.log(inputedName)
    return  name(inputedName);
  }
  function getBookTitle() {
    var inputedTitle = document.getElementById("title").value;
    return genre(inputedTitle);
  }
  function getBookGenre() {
    var inputedGenre = document.getElementById("genre").value;
    console.log(inputedGenre)
    return parseInt(inputedGenre);
  
  }
  function getBookSummary() {
    var inputedSummary = document.getElementById("Summary").value;
    return summary(inputedSummary);
  }

  function getBookupload() {
    var inputedupload = document.getElementById("content").value;
    return content(inputedupload);
  }
  
 
  
  function getBook() {
    event.preventDefault();
  
    var book = (getName() + getBookTitle() + getBookSummary() +getBookGenre() + getBookupload()) 
    
    console.log(getName(), getBookTitle(), getBookGenre(), getBookSummary(), getBookupload());
  
   alert("Your book " + " Book name" + ".")
  }
  
  /*$(document).ready(function () {
    $("#submit").submit(function () {
      var name = $("input#name").val();
      var title = $("input#title").val();
      var genre = $("input#genre").val();
      var sammury = $("input#summery").val()
      var upload = $("input#upload")
  
      alert("Hello " + name + ". Your book has been successfuly received and will be uploaded soon at Afri-lib!"  + "  Thank you for choosing Afrilib!");
  
    });
  
  });