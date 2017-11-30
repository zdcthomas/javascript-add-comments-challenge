$(document).ready(function(){
  $( '#new_comment_button' ).on('click', function() {
    var formComment = '<textarea name="comment" id="comment" placeholder="Write your comment"></textarea></br>';
    var formAuthor = '<input type="text" name="author" id="author" placeholder="Author" /></br>';
    var formSubmit = '<input type="submit" value="Submit Comment" />';
    $('#comments').append('<form id ="new_comment_form">' + formComment + formAuthor + formSubmit + '</form>');
    $('#new_comment_form').on('submit', function(event){
      var comment = $('textarea#comment').val();
      var author = $('input#author').val();
      if (comment.length === 0) {
        alert("You can't submit without a comment!")
      } else {
        $('ul').append('<li>' + comment + "<span class='author'>" + author + '</span></li>')
        event.preventDefault()
      }
      $('#new_comment_form').remove()
    })
  });
})
