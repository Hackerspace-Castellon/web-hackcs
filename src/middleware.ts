import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  const { request, redirect } = context;

  // Verificar si estamos en modo prerenderizado. Si no, continuamos con el acceso a los encabezados.
  if (context.isPrerendered) {
    return next(); // Si está prerenderizada, no acceder a los encabezados y continuar
  }

  // Ahora que sabemos que no estamos en prerenderización, podemos acceder a los encabezados
  if (!request.headers) {
    return next();  // Si no hay headers (en prerenderización), no hacemos nada
  }

  const acceptLanguage = request.headers.get("accept-language") || "en";
  const supportedLocales = ["es", "en", "ca"]; // Idiomas disponibles
  const defaultLocale = "en";

  let userLocale = acceptLanguage.split(",")[0].split("-")[0];

  if (userLocale === "ca") {
    userLocale = "ca";
  }

  const locale = supportedLocales.includes(userLocale) ? userLocale : defaultLocale;

  if (new URL(request.url).pathname === "/") {
    return redirect(`/${locale}/`, 307); // Realizamos la redirección
  }

  return next(); // Continuar con la solicitud
});
