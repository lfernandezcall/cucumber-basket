console.log('main.js was loaded....')

$('button.modal-btn').on('click', function (e) {
  e.preventDefault()
  const url = 'recipes'
  const $id = $(this).siblings('[name="id"]').val()

  console.log($id)

  $.ajax({
    url,
    data: $id,
    method: 'POST'
  })
})
