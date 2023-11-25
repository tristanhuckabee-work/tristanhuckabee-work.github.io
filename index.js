window.onload = () => {
  const pl = document.querySelector('#projects-link');
  const eml = document.querySelector('#employment-link');
  const edl = document.querySelector('#education-link');
  const pc = document.querySelector('#project-container');
  const emc = document.querySelector('#employment-container');
  const edc = document.querySelector('#education-container');

  pl.addEventListener('click', e => {
    if (eml.classList.contains('current')) eml.classList.remove('current');
    if (edl.classList.contains('current')) edl.classList.remove('current');
    pl.classList.add('current');

    if (!emc.classList.contains('hidden')) emc.classList.add('hidden');
    if (!edc.classList.contains('hidden')) edc.classList.add('hidden');
    pc.classList.remove('hidden');
  });
  eml.addEventListener('click', e => {
    if (pl.classList.contains('current')) pl.classList.remove('current');
    if (edl.classList.contains('current')) edl.classList.remove('current');
    eml.classList.add('current');

    if (!pc.classList.contains('hidden')) pc.classList.add('hidden');
    if (!edc.classList.contains('hidden')) edc.classList.add('hidden');
    emc.classList.remove('hidden');
  });
  edl.addEventListener('click', e => {
    if (pl.classList.contains('current')) pl.classList.remove('current');
    if (eml.classList.contains('current')) eml.classList.remove('current');
    edl.classList.add('current');

    if (!pc.classList.contains('hidden')) pc.classList.add('hidden');
    if (!emc.classList.contains('hidden')) emc.classList.add('hidden');
    edc.classList.remove('hidden');
  });
}