processKeyEvent = (event) ->
  switch event.keyIdentifier
    when 'U+0020'
      if (event.target.nodeName.toLowerCase() != 'input') &&
         (event.target.nodeName.toLowerCase() != 'textarea') &&
         ((event.target.attributes['role'] == undefined) || event.target.attributes['role'].value != 'textbox')
        window.scrollBy(0, window.innerHeight / 2)
        event.preventDefault()

window.addEventListener('keydown', processKeyEvent, false)
