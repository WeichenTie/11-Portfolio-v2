export default function scrollTo(id: string) {
  const elem = document.getElementById(id);
  if (!elem) {
    return;
  }
  const scrollPos = window.innerHeight > elem.clientHeight ?  elem.offsetTop - window.innerHeight / 2 +  elem.clientHeight/ 2 : elem.offsetTop - 20;
  
  window.scrollTo({ top: scrollPos});
}