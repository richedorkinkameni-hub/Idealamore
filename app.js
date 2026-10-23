const $ = (id) => document.getElementById(id);
const profiles = [
  {name:"Maya, 26",meta:"Avignon · Aime voyager",bio:"« Les plus belles connexions commencent par une conversation sincère. »",art:"art-1"},
  {name:"Noah, 29",meta:"Nîmes · Passionné de musique",bio:"« Je préfère une vraie discussion aux apparences. »",art:"art-2"},
  {name:"Inès, 25",meta:"Marseille · Nature et culture",bio:"« Curiosité, respect et humour : le trio gagnant. »",art:"art-3"}
];
let profileIndex = 0;
let likes = [];
let installPrompt = null;
function toast(message){const el=$("toast");el.textContent=message;el.classList.remove("hidden");clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>el.classList.add("hidden"),2600)}
function showProfile(){const p=profiles[profileIndex%profiles.length];$("personName").textContent=p.name;$("personMeta").textContent=p.meta;$("personBio").textContent=p.bio;$("profileArt").className="profile-art "+p.art}
function showView(name){document.querySelectorAll(".view").forEach(v=>v.classList.add("hidden"));$(name+"View").classList.remove("hidden");document.querySelectorAll(".tab").forEach(b=>b.classList.toggle("active",b.dataset.view===name))}
$("enterBtn").addEventListener("click",()=>{if(!$("ageCheck").checked||!$("termsCheck").checked){toast("Confirme les deux cases pour continuer.");return}$("ageGate").classList.add("hidden");$("mainView").classList.remove("hidden");try{sessionStorage.setItem("idealAmoreDemoEntered","yes")}catch(e){}});
document.querySelectorAll(".tab").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.view)));
$("passBtn").addEventListener("click",()=>{profileIndex++;showProfile();toast("Profil passé — démonstration uniquement.")});
$("likeBtn").addEventListener("click",()=>{const p=profiles[profileIndex%profiles.length];if(!likes.includes(p.name))likes.push(p.name);profileIndex++;showProfile();toast("J’aime enregistré sur cet appareil (démo).")});
$("editProfileBtn").addEventListener("click",()=>openDialog("<p class='eyebrow'>APERÇU DU PROFIL</p><h2>Votre histoire, vos mots.</h2><p>Dans la version connectée, vous pourrez ajouter une photo, une présentation, votre ville et vos préférences de rencontre.</p><p><strong>Conseil :</strong> ne publiez jamais votre adresse exacte, vos coordonnées bancaires ou des informations sensibles.</p>"));
$("premiumBtn").addEventListener("click",()=>openDialog("<p class='eyebrow'>L’EXPÉRIENCE PLUS</p><h2>Premium se prépare.</h2><p>Les fonctionnalités et le prix seront définis avant le lancement. Aucun abonnement ni paiement n’est disponible dans ce prototype.</p><p>Avant d’activer Premium, il faudra mettre en place la validation sécurisée des achats et les conditions de résiliation.</p>"));
$("safetyBtn").addEventListener("click",()=>openDialog("<p class='eyebrow'>CHARTE DE SÉCURITÉ</p><h2>Le respect n’est pas une option.</h2><ul><li>Réservé aux personnes de 18 ans et plus.</li><li>Respectez le consentement et les limites de chacun.</li><li>N’envoyez pas d’argent à une personne que vous n’avez jamais rencontrée.</li><li>Privilégiez un lieu public lors d’une première rencontre.</li><li>La version publique devra inclure blocage, signalement, modération et suppression de compte.</li></ul><p>Cette case d’âge est une déclaration, pas une vérification d’identité.</p>"));
function openDialog(html){$("dialogContent").innerHTML=html;$("infoDialog").showModal()}
$("closeDialog").addEventListener("click",()=>$("infoDialog").close());
$("infoDialog").addEventListener("click",e=>{if(e.target===$("infoDialog"))$("infoDialog").close()});
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();installPrompt=e;$("installBtn").classList.remove("hidden")});
$("installBtn").addEventListener("click",async()=>{if(!installPrompt){toast("Sur iPhone : Safari → Partager → Sur l’écran d’accueil.");return}installPrompt.prompt();await installPrompt.userChoice;installPrompt=null;$("installBtn").classList.add("hidden")});
if("serviceWorker" in navigator && location.protocol.startsWith("http"))window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
try{if(sessionStorage.getItem("idealAmoreDemoEntered")==="yes"){$("ageGate").classList.add("hidden");$("mainView").classList.remove("hidden")}}catch(e){}
showProfile();