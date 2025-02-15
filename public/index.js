;(function initDarkMode() {
  const root = document.documentElement
  const body = document.body

  const bgDark = '#111827'
  const bgAnimate = 'animate-theme'

  root.style.visibility = 'hidden'
  if (localStorage.getItem('themeMode') === 'dark') {
    root.classList.add('dark')
    root.style.backgroundColor = bgDark
  }
  window.addEventListener('load', function () {
    setTimeout(() => {
      root.style.visibility = 'visible'
      body.classList.add(bgAnimate)
    }, 100)
  })
})()
