// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import { Dropdown } from 'bootstrap';


import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

Fancybox.bind('[data-fancybox]', {
});

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 700,
});

document.querySelectorAll('a[data-bs-toggle="tab"]').forEach(tab => {
  tab.addEventListener('shown.bs.tab', function (event) {
    const activatedTab = document.querySelector(event.target.getAttribute('href'));
    const allTabs = document.querySelectorAll('.tab-pane');

    allTabs.forEach(tabContent => tabContent.classList.add('d-none'));
    activatedTab.classList.remove('d-none');
  });
});









