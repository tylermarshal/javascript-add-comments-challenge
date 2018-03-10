$(document).ready(function(){
  $('#new_comment_button').on('click', (event) => {
    event.preventDefault();
    $('#new_comment_form').toggle();
  })
  $('#new_comment_form').submit((event) => {
    event.preventDefault();
    let author = $('input[name="author"]').val();
    $('input[name="author"]').val("");
    let comment = $('textarea[name="comment"]').val();
    $('textarea[name="comment"]').val("");
    $("#comment_list").prepend(`<li>${comment} <span class="author">${author}</span></li>`)
    $('#new_comment_form').toggle();
  })
})
