let cbuxl = document.getElementById("cbuxl");
let cbu = document.getElementById("cbu");
let registrar = document.getElementById("modal-button");
let bienvenida = document.getElementById("bienvenida");
let info = document.getElementById("info");
let retirar = document.getElementById("retirar");
let exitos = document.getElementById("exitos");
let premioEnviado = document.getElementById("premioEnviado");
let contraseña = document.getElementById("paginaWeb");
let noIngreso = document.getElementById("noIngreso");
let soporte = document.getElementById("soporte");
let demorasPago = document.getElementById("demorasPago");
let solicitoUsuario = document.getElementById("solicitoUsuario");
let cbuEquivocado = document.getElementById("cbuEquivocado");
let ordenLlegada = document.getElementById("ordenLlegada");
let demorasCargas = document.getElementById("demorasCargas");
let form = document.getElementById("form");
let form_button = document.getElementById("formButton");
let usuario = document.getElementById("usuario");
let modal = document.getElementById("myModal");
let btn = document.getElementById("pad-button-reg");
let span = document.getElementsByClassName("close")[0];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let inputNombre = document.getElementById("name").value;
  let inputCBU = document.getElementById("number").value;
  let inputAlias = document.getElementById("alias").value;

  if (inputNombre.length != 0 && inputCBU != 0 && inputAlias.length != 0) {
    cbuxl.addEventListener("click", () => {
      const texto = `Hola! 🚨 *NO ENVÍE DINERO SIN CONSULTAR CBU SEGUNDOS ANTES DE TRANSFERIR* 🚨 De lo contrario, la carga se demorará.

⬇️ *CBU VIGENTE* ⬇️
Titular: *${inputNombre}*
CBU: *${inputCBU}*
Alias: *${inputAlias}*

⚜️ *MÍNIMO DE CARGA: $1.000*

ENVÍE:
🔺*COMPROBANTE*
🔺*USUARIO* de la plataforma
🔺*NOMBRE COMPLETO* del TITULAR de la cuenta bancaria

❗Para cargas *MENORES* a $3.000 se debe abonar un *RECARGO* de $30.❗
Ejemplo: $1.000 = $1.030

*Si no envían los $30 se le descuenta de su carga neta*
Ejemplo: $1.000 = $970

📲 *PARA JUGAR INGRESE A:* https://azarlatino1.com/`;
      const elementoTemporal = document.createElement("textarea");
      elementoTemporal.value = texto;
      document.body.appendChild(elementoTemporal);
      elementoTemporal.select();
      elementoTemporal.setSelectionRange(0, 9999);
      document.execCommand("copy");
      document.body.removeChild(elementoTemporal);
    });

    cbu.addEventListener("click", () => {
      const texto = `${inputCBU}`;
      const elementoTemporal = document.createElement("textarea");
      elementoTemporal.value = texto;
      document.body.appendChild(elementoTemporal);
      elementoTemporal.select();
      elementoTemporal.setSelectionRange(0, 9999);
      document.execCommand("copy");
      document.body.removeChild(elementoTemporal);
    });

    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
    document.getElementById("alias").value = "";
  } else {
    alert("Por favor, completa todos los datos!!");
  }
});

registrar.addEventListener("click", function (e) {
  e.preventDefault();
  let user = document.getElementById("usuario").value;
  console.log(user);

  const texto = `🔸*USUARIO REGISTRADO*🔸

*TU USUARIO:* ${user}
*CONTRASEÑA:* hola1234

🔸 *MÍNIMO DE CARGA:* $1.000
🔸 *MINIMO DE RETIRO:* $2.000
(sólo se aceptan apuestas deportivas de primera línea)

Para comenzar a jugar ingresá aquí: https://azarlatino1.com/

🔞 *SÓLO APTO PARA MAYORES DE 18 AÑOS* 🔞
    
🌐 Visita nuestra página web www.suertecaba.com y mantenete al día con todas nuestras novedades. ¡Allí vas a encontrar *SIEMPRE* nuestra información de contacto! 📞✨ 

⚠️ *RECUERDE CONSULTAR SIEMPRE NUESTRO CBU SEGUNDOS ANTES DE TRANSFERIR*`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);

  document.getElementById("usuario").value = "";

  modal.style.display = "none";
});

bienvenida.addEventListener("click", () => {
  const texto = `👋🏼  Bienvenido/a a *SUERTE CABA* 🍀 Te pido tu *NOMBRE* y *APELLIDO* para poder generarte un usuario 💬 

📱  *PLATAFORMA:* https://azarlatino1.com/ aquí encontrarás: 
. Slots (maquinitas)
. Ruletas en vivo
. Apuestas deportivas (sólo se aceptan apuestas deportivas de primera línea)
. Blackjack
. Baccarat
. Bingo
🔞 *SÓLO APTO PARA MAYORES DE 18 AÑOS* 🔞

🔺 *MÍNIMO DE CARGA: $1.000*
🔺 *MÍNIMO DE RETIRO $2.000*
🔺 *MÁXIMO DE RETIRO NO TENEMOS*
🌐 Conocenos a través de nuestra web 👉🏼 www.suertecaba.com y *no pierdas nunca nuestro contacto!*

Si ya tiene un usuario *CON NOSOTROS* por favor avísenos 🙏🏻`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

info.addEventListener("click", () => {
  const texto = `¡Hola! Somos *Suerte Caba* 🍀 

💻 *Plataforma:* www.azarlatino1.com 

Contamos con: 
. Slots (maquinitas)
. Ruletas en vivo
. Apuestas deportivas (solo se aceptan apuestas de primera línea)
. Blackjack 
. Baccarat
. Bingo

*IMPORTANTE* 
🔺 MÍNIMO DE CARGA: *$1.000*
🔺 MÍNIMO DE RETIRO: *$2.000*
🔺 MÁXIMO DE RETIRO: *NO TENEMOS*

También puede acceder a nuestra web www.suertecaba.com y encontrar nuestros juegos recomendados, líneas de confianza y *tener contacto directo con nuestra empresa.*

🔞 *DESTINADO A UN PÚBLICO ADULTO:* Al acceder a jugar con nosotros, usted confirma que *tiene 18 años o más.*

Si quiere que le generemos un usuario indíquenos su *nombre* y *apellido!* 📥`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

retirar.addEventListener("click", () => {
  const texto = `💸 Para retirar su dinero complete los siguientes datos *EN ORDEN*:

1️⃣ Nombre de usuario (del juego)
2️⃣ Nombre y apellido que figura en su cuenta de banco
3️⃣ Monto que desea retirar
4️⃣ CBU / CVU
5️⃣ ALIAS

♦️ *MÍNIMO DE RETIRO: $2.000* 

Una vez que complete los datos, será enviado al sector de pagos 💰
*Se abona por orden de llegada, por favor sea paciente mientras procesamos su pago. Puede demorar un rato.* 🙏🏻`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

exitos.addEventListener("click", () => {
  const texto = `*RETIRO EXITOSO* 🏆✨
Sus fichas *ya fueron retiradas* y su premio fue enviado al sector de pagos para ser abonado 🏦💲

En caso de que quiera retirar más fichas *POR FAVOR* avísenos antes de que le abonemos, sino, *le recomiendo NO responder hasta que le enviemos el comprobante del pago, de lo contrario perderá el lugar en la fila y su pago se demorará aún más.* 🙏🏻`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

premioEnviado.addEventListener("click", () => {
  const texto = `*TU PREMIO YA FUE ENVIADO* 🥳💸💯
Gracias por elegirnos 🙌🏻 Espero que lo disfrutes!

Accedé a nuestra web www.suertecaba.com, dejanos un comentario y valorá nuestro servicio *para acceder a un 10% de bonificación en tu próxima carga!* 💬⭐`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

paginaWeb.addEventListener("click", () => {
  const texto = `Accedé a nuestra web www.suertecaba.com, guardala en favoritos y *no pierdas nunca nuestro contacto!*
*También podes dejarnos un comentario y valorar nuestro servicio* 💻🌟`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

noIngreso.addEventListener("click", () => {
  const texto = `🤚🏼 Aguarde! Su transferencia aún no impactó, *tenga en cuenta que a veces las transferencias cuentan con demora.* ⌛️

*En cuanto llegue el dinero a nuestra cuenta, le cargaremos las fichas.* 🔸`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

soporte.addEventListener("click", () => {
  const texto = `¡Hola! 👋🏼 Debido a problemas e inconvenientes con la plataforma, le recomendamos que se ponga en contacto con nuestro equipo de soporte accediendo a la sección *"Soporte"* en la página de inicio. El servicio está disponible las 24 horas. Inicie una conversación detallando el problema que experimentó y adjunte capturas de pantalla si es posible. 🛠️💬`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

demorasPago.addEventListener("click", () => {
  const texto = `Estimado cliente 👋🏼 Le informamos que *hay demoras en el sector pagos*, su premio aún permanece en fila, le solicitamos *POR FAVOR* que *NO RESPONDA* este mensaje para no perder el lugar 🔺

Si desea cargar nuevamente, puede hacerlo *descontando fichas de su premio*. 
🙏🏻 Gracias y disculpe las molestias ocasionadas.`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

solicitoUsuario.addEventListener("click", () => {
  const texto = `🙏🏻 Por favor, *debajo de CADA COMPROBANTE que envíes* necesito que escribas *SIEMPRE* tu *nombre de usuario*. 📝
De lo contrario, no se podrá cargar las fichas!`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

cbuEquivocado.addEventListener("click", () => {
  const texto = `Hola 👋🏼 Envió dinero a un cbu con el cual no estamos trabajando en este momento, *recuerde consultar cbu segundos antes de transferir* (está especificado previamente). 📝
Aguarde a que se conecte un supervisor y revise si su dinero ingresó para poder cargarle las fichas, *le aviso que puede demorar un rato.*`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

ordenLlegada.addEventListener("click", () => {
  const texto = `Le informo que *Mercado Pago* cuenta con demoras ⏳ Si envía dinero desde esa aplicación, hasta que no nos ingrese a nuestra cuenta *NO PODREMOS CARGARLE LAS FICHAS*. 🤚🏼 

*NO SE ACEPTAN COMPROBANTES EN PROCESO, NI CON DEMORA, CHEQUEE BIEN EL ESTADO DE SU TRANSFERENCIA POR FAVOR* 🙏🏼`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

bonificacion.addEventListener("click", () => {
  const texto = `‼️ *INFO SOBRE LAS BONIFICACIONES* ‼️

Las bonificaciones que se te asignen son para aumentar tus posibilidades de ganar! En el caso que ganes, *se efectúa el retiro de todo (incluyendo la bonificación)* pero esta misma, no se incluye en el pago del premio.💰`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

btn.onclick = function () {
  modal.style.display = "block";
  usuario.focus();
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
