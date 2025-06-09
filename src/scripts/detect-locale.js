// Detecta el idioma del navegador y lo almacena en una variable
const isServer = Astro.request ? true : false;
let userLocale = 'es';  // Idioma predeterminado

if (isServer) {
  // Accedemos a los headers solo si estamos en SSR
  const acceptLanguage = Astro.request.headers.get('accept-language');
  if (acceptLanguage) {
    const supportedLocales = ['es', 'en', 'ca'];
    userLocale = acceptLanguage.split(',')[0]; // Obtén el primer idioma
    if (!supportedLocales.includes(userLocale)) {
      userLocale = 'es';  // Si el idioma no está soportado, usa el predeterminado
    }
  }
}

