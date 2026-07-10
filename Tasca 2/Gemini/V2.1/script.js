// Control de l'estat de l'aplicació
let currentSection = 1;
const totalSections = 5;

// Funció per a mostrar una secció concreta i gestionar la navegació
function showSection(sectionIndex) {
    // Ocultar totes les seccions del qüestionari
    document.querySelectorAll('.quiz-section').forEach(sec => sec.classList.remove('active'));
    
    // Desactivar totes les pestanyes superiors de selecció
    document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));

    // Activar secció seleccionada
    const targetSection = document.getElementById(`section-${sectionIndex}`);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Activar pestanya superior corresponent
    const tabs = document.querySelectorAll('.nav-tab');
    if (tabs[sectionIndex - 1]) {
        tabs[sectionIndex - 1].classList.add('active');
    }

    currentSection = sectionIndex;

    // Gestió dinàmica de visibilitat dels botons inferiors de control
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');

    if (prevBtn) {
        prevBtn.style.visibility = (currentSection === 1) ? 'hidden' : 'visible';
    }
    
    if (nextBtn && submitBtn) {
        if (currentSection === totalSections) {
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'inline-block';
        } else {
            nextBtn.style.display = 'inline-block';
            submitBtn.style.display = 'none';
        }
    }

    // Desplaçar la finestra de visualització cap a dalt de manera suau
    const panel = document.querySelector('.section-panel');
    if (panel) {
        panel.scrollIntoView({ behavior: 'smooth' });
    }
}

// Funció per a canviar de secció de manera seqüencial (Anterior / Següent)
function changeSection(direction) {
    let targetSection = currentSection + direction;
    if (targetSection >= 1 && targetSection <= totalSections) {
        showSection(targetSection);
    }
}

// Funció d'avaluació tècnica del qüestionari
function validateQuiz() {
    const form = document.getElementById('quiz-form');
    const cards = document.querySelectorAll('.quiz-card');
    let score = 0;
    const total = cards.length;

    cards.forEach(card => {
        const qNum = card.getAttribute('data-question');
        const selectedOption = form.querySelector(`input[name="q${qNum}"]:checked`);
        const feedbackDiv = card.querySelector('.feedback');
        const correctValue = feedbackDiv.getAttribute('data-correct');

        // Neteja estructural de classes de control visual de correccions prèvies
        feedbackDiv.classList.remove('correct', 'incorrect');

        if (selectedOption) {
            const userAns = selectedOption.value;
            if (userAns === correctValue) {
                score++;
                feedbackDiv.classList.add('correct');
                feedbackDiv.innerHTML = "<strong>✓ Correcte!</strong> " + feedbackDiv.innerHTML.replace(/.*<strong>Retroalimentació:<\/strong>/, '');
            } else {
                feedbackDiv.classList.add('incorrect');
                feedbackDiv.innerHTML = `<strong>✗ Incorrecte.</strong> La teva opció triada és incorrecta. La resposta correcta era la (${correctValue}).<br>` + feedbackDiv.innerHTML.replace(/.*<strong>Retroalimentació:<\/strong>/, '');
            }
        } else {
            feedbackDiv.classList.add('incorrect');
            feedbackDiv.innerHTML = `<strong>✗ No contestada.</strong> No has seleccionat cap opció. La resposta correcta era la (${correctValue}).<br>` + feedbackDiv.innerHTML.replace(/.*<strong>Retroalimentació:<\/strong>/, '');
        }
    });

    // Calcular i mostrar el bloc final d'avaluació global sobre 10 punts
    const resultSummary = document.getElementById('result-summary');
    const scoreText = document.getElementById('score-text');
    const percentageText = document.getElementById('percentage-text');

    if (scoreText && percentageText && resultSummary) {
        scoreText.textContent = `${score} / ${total}`;
        const percentage = Math.round((score / total) * 100);
        percentageText.textContent = `${percentage}% d'encerts (Qualificació: ${(score / total * 10).toFixed(2)} / 10)`;
        resultSummary.style.display = 'block';
        
        // Desplaçament automàtic fins al peu on es troba la nota
        resultSummary.scrollIntoView({ behavior: 'smooth' });
    }
}

// Inicialització segura del DOM i assignació d'esdeveniments moderns
document.addEventListener('DOMContentLoaded', () => {
    // 1. Prevenir que el formulari es reinicie en prémer botons interns
    const form = document.getElementById('quiz-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
        });
    }

    // 2. Assignar funcionalitat als botons de navegació inferiors
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');

    if (prevBtn) {
        prevBtn.addEventListener('click', () => changeSection(-1));
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', () => changeSection(1));
    }
    if (submitBtn) {
        submitBtn.addEventListener('click', validateQuiz);
    }

    // 3. Assignar funcionalitat a les pestanyes superiors de canvi directe
    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach((tab, index) => {
        // Eliminem l'atribut onclick antic de l'HTML per evitar duplicats
        tab.removeAttribute('onclick');
        tab.addEventListener('click', () => {
            showSection(index + 1);
        });
    });

    // Execució inicial per a fixar el qüestionari a la Secció 1
    showSection(1);
});