window.onload = () => {
  const hl = document.querySelector('#home-link');
  const pl = document.querySelector('#projects-link');
  const eml = document.querySelector('#employment-link');
  const edl = document.querySelector('#education-link');
  const hc = document.querySelector('#about-me');
  const pc = document.querySelector('#project-container');
  const emc = document.querySelector('#employment-container');
  const edc = document.querySelector('#education-container');

  // if (edl.classList.contains('current')) edl.classList.remove('current');
  hl.addEventListener('click', e => {
    if (pl.classList.contains('current')) pl.classList.remove('current');
    if (eml.classList.contains('current')) eml.classList.remove('current');
    if (edl.classList.contains('current')) edl.classList.remove('current');
    hl.classList.add('current');

    if (!pc.classList.contains('hidden')) pc.classList.add('hidden');
    if (!emc.classList.contains('hidden')) emc.classList.add('hidden');
    if (!edc.classList.contains('hidden')) edc.classList.add('hidden');
    hc.classList.remove('hidden');
  });
  pl.addEventListener('click', e => {
    if (hl.classList.contains('current')) hl.classList.remove('current');
    if (eml.classList.contains('current')) eml.classList.remove('current');
    if (edl.classList.contains('current')) edl.classList.remove('current');
    pl.classList.add('current');

    if (!hc.classList.contains('hidden')) hc.classList.add('hidden');
    if (!emc.classList.contains('hidden')) emc.classList.add('hidden');
    if (!edc.classList.contains('hidden')) edc.classList.add('hidden');
    pc.classList.remove('hidden');
  });
  eml.addEventListener('click', e => {
    if (hl.classList.contains('current')) hl.classList.remove('current');
    if (pl.classList.contains('current')) pl.classList.remove('current');
    if (edl.classList.contains('current')) edl.classList.remove('current');
    eml.classList.add('current');

    if (!hc.classList.contains('hidden')) hc.classList.add('hidden');
    if (!pc.classList.contains('hidden')) pc.classList.add('hidden');
    if (!edc.classList.contains('hidden')) edc.classList.add('hidden');
    emc.classList.remove('hidden');
  });
  edl.addEventListener('click', e => {
    if (hl.classList.contains('current')) hl.classList.remove('current');
    if (pl.classList.contains('current')) pl.classList.remove('current');
    if (eml.classList.contains('current')) eml.classList.remove('current');
    edl.classList.add('current');

    if (!hc.classList.contains('hidden')) hc.classList.add('hidden');
    if (!pc.classList.contains('hidden')) pc.classList.add('hidden');
    if (!emc.classList.contains('hidden')) emc.classList.add('hidden');
    edc.classList.remove('hidden');
  });
}