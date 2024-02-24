let cbuxl = document.getElementById("cbuxl");
let cbu = document.getElementById("cbu");
let registrar = document.getElementById("modal-button");
let bienvenida = document.getElementById("bienvenida");
let info = document.getElementById("info");
let retirar = document.getElementById("retirar");
let exitos = document.getElementById("exitos");
let premioEnviado = document.getElementById("premioEnviado");
let contraseña = document.getElementById("contraseña");
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
      const texto = `Hola! ⚠️ *NO ENVIAR DINERO SIN CONSULTAR CBU SEGUNDOS ANTES* ⚠️

 ⚜️ *MÍNIMO DE CARGA: $1.000*

*DATOS DE LA CUENTA*
Nombre Completo: *${inputNombre}*
CBU: *${inputCBU}*
Alias: *${inputAlias}*

ENVIAR:
🔺COMPROBANTE
🔺USUARIO de la plataforma
🔺NOMBRE COMPLETO del TITULAR de la cuenta bancaria

❗Para cargas *MENORES* a $3.000 se debe abonar un *RECARGO* de $30.❗
Ejemplo: $1.000 = $1.030

*Si no envían los $30 se le descuenta de su carga neta*
Ejemplo: $1.000 = $970

📲 *INGRESÁ AQUÍ PARA JUGAR:* https://universegame.best/`;
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
*CONTRASEÑA:* abc123

Para comenzar a jugar ingresá aquí: https://universegame.best/
    
Encontranos en instagram como *@suertecaba_arg*

*CONSULTAR CBU PARA CARGAR TUS FICHAS* 🎰`;
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
  const texto = `👋🏼 Hola buenas! 
Bienvenido/a a SUERTE CABA 🍀
Te pido tu *NOMBRE* y *APELLIDO* para poder generarte un usuario 💬

🔺 *MÍNIMO DE CARGA: $1.000*
🔺 *MÍNIMO DE RETIRO $2.000*
🔺 *MÁXIMO DE RETIRO NO TENEMOS*

En caso de ya tener un usuario *CON NOSOTROS* registrado en la plataforma por favor avisar 🙏🏻`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

info.addEventListener("click", () => {
  const texto = `⚜️ Somos @suertecaba_arg
Tu casino ONLINE de confianza 🍀 En nuestra plataforma te vas a encontrar con los mismos juegos que en un casino físico sólo que podrás jugarlos desde la comodidad en donde estés 💯

*¿Cómo hacer para jugar?*
Te creamos un usuario, nos solicitas *nuestro cbu para cargar el dinero* que quieras jugar, corroboramos que ingrese y listo 😄 Te acreditamos las fichas al instante.

🔺 *MÍNIMO DE CARGA: $1.000*
🔺 *MÍNIMO DE RETIRO $2.000*

Si querés que te generemos un usuario responde este mensaje 📨`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

retirar.addEventListener("click", () => {
  const texto = `🤑 Para retirar su dinero responda este mensaje indicandonos *EN ORDEN*:

1️⃣ Nombre de usuario
2️⃣ Nombre y apellido que figura en tu cuenta de banco
3️⃣ Monto que deseas retirar
4️⃣ CBU / CVU
5️⃣ ALIAS

♦️ *MÍNIMO DE RETIRO: $2.000*

Aguarde unos instantes y en breve será enviado al sector de pagos 💸
*Su chat será archivado, por ende, no será leído de manera frecuente, SEA PACIENTE* 🙏🏻`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

exitos.addEventListener("click", () => {
  const texto = `*RETIRO EXITOSO*👏🏼‼️

Sus fichas *ya fueron retiradas* y su premio fue enviado al sector de pagos 💸🤑

Ya se encuentra en fila para ser abonado 💸🥳
*NO responda este mensaje porque sino pasará a estar último/a en la fila de premios, AGUARDE SU TURNO.* 🙏🏻

*NO SEA INSISTENTE* ⚠️`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

premioEnviado.addEventListener("click", () => {
  const texto = `*TU PREMIO YA FUE ENVIADO* 🥳🥳💯🎉
Felicitaciones! Disfrutalo mucho, *gracias por elegirnos* 🙌🏻`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

contraseña.addEventListener("click", () => {
  const texto = `*CONTRASEÑA RESTABLECIDA*🔑
Por favor, atualice la pagina para evitar que se bloquee el usuario, luego copie y pegue los datos así se evitan errores de tipeo 🙂`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

noIngreso.addEventListener("click", () => {
  const texto = `🤚🏼 Su transferencia aún no impactó, *tenga en cuenta que a veces las transferencias cuentan con demoras.* ⌛️

Si el dinero no ingresa a nuestra cuenta bancaria, no tenemos autorizado cargarle las fichas 🎰 
*Aguarde y en cuanto llegue su transferencia, sus fichas serán cargadas* 🔸`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

soporte.addEventListener("click", () => {
  const texto = `Buenas 👋🏼 por problemas e inconvenientes con la plataforma le solicitamos que *se comunique con el soporte de la página* ingresando al cuadro de diálogo que figura en la parte superior derecha de la misma, ya que nosotros *no podemos acceder a la configuración de las máquinas.* 🎰⚠️`;
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
  const texto = `Hola 👋🏼 Le informo que envió dinero a un cbu con el cual no estamos trabajando en este momento. 😐 Dejamos especificado previamente que siempre que vaya a realizar una transferencia, CONSULTE EL CBU, por más que le hayamos enviado uno hace unos minutos.

Ahora deberá aguardar a que ingresemos a esa cuenta y verifiquemos que haya ingresado su dinero. PUEDE *DEMORAR UNAS HORAS.*❗️

*SEA RESPONSABLE CON SU DINERO PORQUE SI ENVÍA POR ERROR A UNA CUENTA INACTIVA QUE NO PODEMOS INGRESAR, LO PIERDE*`;
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

demorasCargas.addEventListener("click", () => {
  const texto = `Estimado cliente 👋🏼 Le informamos que *hay demoras en las cargas* debido a que las transferencias estan ingresando con delay. 
*Si envía dinero y no ingresa*, no se le cargarán las fichas, hasta que no se demuestre como depositado en nuestra cuenta. *Cuando se normalice la situación, le notificamos* 😀`;
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
