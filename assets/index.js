function openPopupSignup() {
  jQuery("body").addClass("footer-popup-open")
}

function closePop() {
  jQuery("body").removeClass("footer-popup-open")
}

function calculateMenuHeight() {
  if (document.getElementById("menu")) {
    let menuHeight = document.getElementById("menu").clientHeight

    document.documentElement.style.setProperty(
      "--menu-height",
      menuHeight + "px"
    )
  }
}

window.addEventListener("DOMContentLoaded", event => {
  calculateMenuHeight()

  $(window).resize(function () {
    calculateMenuHeight()
  })

  if ($("#menu").hasClass("fixed-top")) {
    $("body").css("padding-top", "var(--menu-height)")
    $("#product-jumpbar").css("top", "var(--menu-height)")
  }

  // Hide navbar toggler if there are no items in nav
  if (!$("#menu .navbar-collapse").length) {
    $("#menu .navbar-toggler").addClass("invisible")

    if ($("#menu-cta").length) {
      $("#menu-cta").addClass("menu-cta-right")
    }
  }
})

function setCookie(cname, cvalue, exdays) {
  const d = new Date()
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
  let expires = "expires=" + d.toUTCString()
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
}

function getCookie(cname) {
  let name = cname + "="
  let decodedCookie = decodeURIComponent(document.cookie)
  let ca = decodedCookie.split(";")

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]

    while (c.charAt(0) == " ") {
      c = c.substring(1)
    }

    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }

  return ""
}

function currencySwitch(cur) {
  switch (cur) {
    case "USD":
      setCookie("currency", "USD", 86400)
      setCookie("order_id", "")
      break
    case "CHF":
      setCookie("currency", "CHF", 86400)
      setCookie("order_id", "")
      break
    case "EUR":
      setCookie("currency", "EUR", 86400)
      setCookie("order_id", "")
      break
    case "GBP":
      setCookie("currency", "GBP", 86400)
      setCookie("order_id", "")
      break
    case "CAD":
      setCookie("currency", "CAD", 86400)
      setCookie("order_id", "")
      break
    case "RON":
      setCookie("currency", "RON", 86400)
      setCookie("order_id", "")
      break
    case "AUD":
      setCookie("currency", "AUD", 86400)
      setCookie("order_id", "")
      break
  }

  history.scrollRestoration = "manual"
  location.reload()
}

function updateCurr() {
  var selectBox = document.getElementById("currency-switcher-sites")
  let currentCurr = getCookie("currency")

  if (currentCurr != "") {
    selectBox.value = currentCurr
  }
}

function changeCurr() {
  var selectBox = document.getElementById("currency-switcher-sites")
  var selectedValue = selectBox.options[selectBox.selectedIndex].value

  currencySwitch(selectedValue)
}

window.addEventListener("DOMContentLoaded", event => {
  if (document.getElementById("currency-switcher-sites")) {
    updateCurr()
  }
})
