// Este archivo no va de momento. Es el archivo de consts.ts pero que cambia el mensaje del banner de las cookies por si queremos un mensaje más friki.
// Para utilizar este mensaje, podemos copiar y pegar el contenido de este archivo en el archivo de consts.ts. 
// O cambiar el nombre del archivo consts.ts a consts.ts.backup y cmabiar el nombre de este archivo a consts.ts. 

export const SITE_CONTENT = {
  es: {
    TITLE: "Hackerspace Castellón",
    DESCRIPTION: "Página web de Hackerspace Castellón",
    QUOTE: "Para los amantes de la informática, la electrónica, los videojuegos y el conocimiento libre.",
    NAV_LINKS: [
      { title: "Agenda", href: "./es/agenda" },
      { title: "Recursos", href: "./es/recursos" },
      { title: "Wiki", href: "//hackcs.notion.site/8effcb7d456a4f66b2e7758941d0fdef?v=12646f61f7f780ec99c9000c1bb06901" },
      { title: "Contacto", href: "./es/contacto" }
    ],
    FOOTER_TITLE: "Asociaciones amigas",
    COOKIES: `Pablo Herrera, responsable de este espacio web cedido (<a href="http://hackcs.uji.es/" class="underline">http://hackcs.uji.es/</a>), comunica a los visitantes que asume la responsabilidad por la veracidad, exactitud y actualización de los contenidos aquí proporcionados, no pudiendo responsabilizarse en ningún caso a la Universitat Jaume I por los posibles daños o perjuicios que de ellos pudieran derivarse. Esta web utiliza cookies propias y de terceros para ofrecer una mejor experiencia. <br>
      <a href="https://www.uji.es/organs/ouag/sg/docs/politiques/gen/cookies/" class="underline">Al continuar la navegación entendemos que acepta nuestra política de cookies.</a>`,
      COOKIES_BANNER: {
        message: `🖥️ <strong>¡Bienvenido, Friki Maestro del Ciberespacio! ⚡</strong>  <br>
                  En nuestro hackerspace mágico, usamos cookies esenciales para mantener el sistema operativo de nuestra web funcionando tan suave como una nave espacial hiperpropulsada. <br>
                  No hace falta que hagas un CTRL + ALT + DEL para aceptarlas, solo sigue explorando y las aceptarás de forma automática, como un buen speedrun.  
                  Pero como buen hacker geek, sabes que tener el control es lo que mola, así que puedes elegir si aceptas o rechazas... aunque en realidad, <strong>solo usamos cookies necesarias para que nuestra web no se convierta en un bug épico. 😜</strong>  <br>
                  Estas cookies son como los cheat codes que desbloquean las mejores funciones de nuestra web. Sin ellas, estarías atrapado en un bug dimensional. 😱  <br>
                  Si te pica la curiosidad y quieres descubrir qué hacen estas cookies esenciales, puedes revisar nuestra <a href="https://www.uji.es/organs/ouag/sg/docs/politiques/gen/cookies/">política de cookies</a> — no es un easter egg secreto, pero sí es un acceso directo al código fuente.  <br>
                  Recuerda, en este mundo de bits y bytes, no usamos trucos de magia para mejorar tu experiencia, solo código limpio y unas cookies esenciales. 🍪💾  <br>
                  ¡Sigue hackeando, que el siguiente nivel está a un clic de distancia! 🎮💥`,
        accept: "Aceptar Cookies — ¡Que el código esté contigo, joven padawan! ⚡",
        reject: "Rechazar Cookies — Elige tu propio camino... pero si lo haces, la web funcionará en modo seguro, ¡así que no te quejes si encuentras un error 404!"
      }
      
  },
  en: {
    TITLE: "Hackerspace Castellón",
    DESCRIPTION: "Hackerspace Castellón website",
    QUOTE: "For lovers of computing, electronics, video games, and open knowledge.",
    NAV_LINKS: [
      { title: "Agenda", href: "./en/agenda" },
      { title: "Resources", href: "./en/recursos" },
      { title: "Wiki", href: "//hackcs.notion.site/8effcb7d456a4f66b2e7758941d0fdef?v=12646f61f7f780ec99c9000c1bb06901" },
      { title: "Contact", href: "./en/contacto" }
    ],
    FOOTER_TITLE: "Partner associations",
    COOKIES: `Pablo Herrera, the person responsible for this web space provided (<a href="http://hackcs.uji.es/" class="underline">http://hackcs.uji.es/</a>), informs visitors that he assumes responsibility for the truthfulness, accuracy, and updating of the content provided here, and that under no circumstances can Universitat Jaume I be held responsible for any possible damages or harm that may arise from it. This website uses its own and third-party cookies to offer a better experience. <br>
      <a href="https://www.uji.es/organs/ouag/sg/docs/politiques/gen/cookies/" class="underline">By continuing to browse, we understand that you accept our cookie policy.</a>`,
      COOKIES_BANNER: {
        message: `🖥️ <strong>Welcome, Cyber Realm Geek Master! ⚡</strong> <br>
                  In our magical hackerspace, we use essential cookies to keep our website’s OS running smoother than a hyper-boosted spaceship. <br>
                  No need to hit CTRL + ALT + DEL to accept — just keep exploring and you'll auto-accept them like a proper speedrunner.  
                  But as a true hacker geek, you know control is everything. So yeah, you can choose to accept or reject... though in reality, <strong>we only use the cookies necessary to keep our site from becoming an epic bug. 😜</strong> <br>
                  These cookies are like cheat codes unlocking the best features of our site. Without them, you'd be stuck in a dimensional bug. 😱 <br>
                  If curiosity bites and you want to know what these essential cookies do, check out our <a href="https://www.uji.es/organs/ouag/sg/docs/politiques/gen/cookies/">cookie policy</a> — it's not a secret easter egg, but it is a shortcut to the source code. <br>
                  Remember: in this world of bits and bytes, we don’t use magic tricks to improve your experience, just clean code and some essential cookies. 🍪💾 <br>
                  Keep hacking — the next level is just one click away! 🎮💥`,
        accept: "Accept Cookies — May the code be with you, young padawan! ⚡",
        reject: "Reject Cookies — Choose your own path… but if you do, the site will run in safe mode, so don’t be surprised if you encounter a 404 error!"
      }
  },
  ca: {
    TITLE: "Hackerspace Castellón",
    DESCRIPTION: "Pàgina web de Hackerspace Castellón",
    QUOTE: "Per als amants de la informàtica, l'electrònica, els videojocs i el coneixement lliure.",
    NAV_LINKS: [
      { title: " Agenda ", href: "./ca/agenda" },
      { title: " Recursos ", href: "./ca/recursos" },
      { title: " Wiki ", href: "//hackcs.notion.site/8effcb7d456a4f66b2e7758941d0fdef?v=12646f61f7f780ec99c9000c1bb06901" },
      { title: " Contacte ", href: "./ca/contacto" }
    ],
    FOOTER_TITLE: "Associacions amigues",
    COOKIES: `Pablo Herrera, responsable d’aquest espai web cedit (<a href="http://hackcs.uji.es/" class="underline">http://hackcs.uji.es/</a>), comunica als visitants que assumeix la responsabilitat per la veracitat, exactitud i actualització dels continguts proporcionats aquí, i que en cap cas es podrà responsabilitzar la Universitat Jaume I pels possibles danys o perjudicis que se’n pogueren derivar. Aquest lloc web utilitza cookies pròpies i de tercers per oferir una millor experiència. <br>
      <a href="https://www.uji.es/organs/ouag/sg/docs/politiques/gen/cookies/" class="underline">En continuar navegant entenem que accepteu la nostra política de cookies.</a>`,
      COOKIES_BANNER: {
        message: `🖥️ <strong>Benvingut, Mestre Friki del Ciberespai! ⚡</strong> <br>
                  Al nostre hackerspace màgic, usem cookies essencials per a mantindre el sistema operatiu de la web funcionant més suau que una nau hiperpropulsada. <br>
                  No cal que faces un CTRL + ALT + DEL per a acceptar-les — només cal que continues navegant i les acceptaràs automàticament, com un bon speedrunner.  
                  Però com a autèntic hacker geek, saps que el control mola, així que pots triar si acceptes o rebutges... encara que en realitat, <strong>només usem les cookies necessàries perquè la web no es convertisca en un bug èpic. 😜</strong> <br>
                  Aquestes cookies són com els codis de trucs que desbloquegen les millors funcions de la nostra web. Sense elles, estaries atrapat en un bug dimensional. 😱 <br>
                  Si tens curiositat i vols saber què fan aquestes cookies essencials, pots consultar la nostra <a href="https://www.uji.es/organs/ouag/sg/docs/politiques/gen/cookies/">política de cookies</a> — no és un easter egg secret, però sí un accés directe al codi font. <br>
                  Recorda: en aquest món de bits i bytes, no usem trucs de màgia per a millorar la teua experiència, només codi net i unes poques cookies essencials. 🍪💾 <br>
                  Continua hackejant — el pròxim nivell està a només un clic! 🎮💥`,
        accept: "Acceptar Cookies — Que el codi estiga amb tu, jove padawan! ⚡",
        reject: "Rebutjar Cookies — Tria el teu camí… però si ho fas, la web funcionarà en mode segur, així que no et queixes si et trobes un error 404!"
      },
  }
};
