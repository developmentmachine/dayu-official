// Import our custom CSS
import '../scss/styles.scss';
import '../scss/product.scss'

// Import all of Bootstrap's CSS
import 'bootstrap/scss/bootstrap.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new Popover(popover)
  })

