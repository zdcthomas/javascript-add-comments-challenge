$(document).ready(function(){
  $('#new_comment_button').click( (event)=>{
    $('#new_comment_button').css('display', 'none')
    $('#new_comment').css('display', 'block')
  })

  $('#submit').click( ()=>{
    $('#new_comment_button').css('display', 'block')
    $('#new_comment').css('display', 'none')
    let content = $('textarea').val()
    let authorVal = $('#authorName').val()
    let author = authorVal ? `<span class="author">${authorVal}</span>` : ""
    $(`<li> ${content} ${author}</li>`).appendTo('#comment_list')
    debugger
  })
})
