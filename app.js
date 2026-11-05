'use strict';
const CARD_URL='https://arekm2506.github.io/wizyt-wka-2026/';
const $=id=>document.getElementById(id);
const say=text=>{$('status').textContent=text;};
const artwork=$('artwork');
function missingArtwork(){artwork.hidden=true;$('artwork-missing').hidden=false;document.querySelectorAll('.artwork-qr,.artwork-save').forEach(element=>{element.hidden=true;});}
artwork.addEventListener('error',missingArtwork);
if(artwork.complete&&artwork.naturalWidth===0)missingArtwork();
$('qr-toggle').addEventListener('click',event=>{
  event.preventDefault();
  const panel=$('qr-panel');
  const open=panel.hidden;
  panel.hidden=!open;
  $('qr-toggle').setAttribute('aria-expanded',String(open));
  if(open){panel.scrollIntoView({block:'start',behavior:'auto'});panel.focus({preventScroll:true});}
});
function showCopy(){ $('copy-panel').hidden=false;$('share-url').value=CARD_URL;$('share-url').focus();$('share-url').select(); }
async function copyLink(){
  try{if(!navigator.clipboard?.writeText)throw new Error('Clipboard unavailable');await navigator.clipboard.writeText(CARD_URL);say('Link skopiowany / Link copied.');}
  catch{showCopy();say('Zaznaczony link skopiuj ręcznie / Copy the selected link manually.');}
}
$('share').addEventListener('click',async()=>{
  if(typeof navigator.share==='function'){
    try{await navigator.share({title:'Arkadiusz Mordak — wizytówka / business card',url:CARD_URL});return;}
    catch(error){if(error.name==='AbortError')return;}
  }
  showCopy();await copyLink();
});
$('copy').addEventListener('click',copyLink);
let installPrompt;
window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();installPrompt=event;$('install').hidden=false;});
$('install').addEventListener('click',async()=>{if(!installPrompt)return;const prompt=installPrompt;installPrompt=null;$('install').hidden=true;try{await prompt.prompt();await prompt.userChoice;}catch{say('Dodaj skrót przez menu przeglądarki / Add using your browser menu.');}});
window.addEventListener('appinstalled',()=>{$('install').hidden=true;installPrompt=null;});
