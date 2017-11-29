$(document).ready(function(){
  $( '#new_comment_button' ).on('click', function() {
    $('#new_comment_button').hide()
    var formComment = '<textarea name="comment" id="comment" placeholder="Write your comment"></textarea></br>';
    var formAuthor = '<input type="text" name="author" id="author" placeholder="Author" /></br>';
    var formSubmit = '<input type="submit" value="Submit Comment" />';
    $('#comments').append('<form id ="new_comment_form">' + formComment + formAuthor + formSubmit + '</form>');
    $('form#new_comment_form').on('submit', function(){
      var comment = $('textarea#comment').val();
      var author = $('input#author').val();
      alert(comment)
    })
  });
})
