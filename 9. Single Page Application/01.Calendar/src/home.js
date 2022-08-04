export function showYears() {
    document.querySelectorAll('section').forEach(s => s.style.display = 'none');
    document.querySelector('#years').style.display = '';
}