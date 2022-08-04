import { showYears } from "./src/home.js";
import { hideALlElements } from "./src/hide.js";

window.addEventListener('load', showYears);

document.querySelectorAll('#years table tr td')
    .forEach(y => y.addEventListener('click', loadYear));

function loadYear(ev) {
    if (ev.target.textContent == '2020') {
        hideALlElements();
        document.getElementById('year-2020').style.display = '';

        document.querySelectorAll('#year-2020 table tr td')
            .forEach(y => y.addEventListener('click', loadMonth));

        function loadMonth(ev) {
            if (ev.target.textContent == 'Jan') {
                hideALlElements();
                document.getElementById('month-2020-1').style.display = '';
            } else if (ev.target.textContent == 'Feb') {
                hideALlElements();
                document.getElementById('month-2020-2').style.display = '';
            }
        }
    } else if (ev.target.textContent == '2021') {
        hideALlElements();

    } else if (ev.target.textContent == '2022') {
        hideALlElements();

    } else {
        hideALlElements();

    }
}
