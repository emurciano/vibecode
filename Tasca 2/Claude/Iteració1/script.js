let currentSection = 1;
    const totalSections = 5;

    function showSection(sectionIndex) {
        // Ocultar totes les seccions
        document.querySelectorAll('.quiz-section').forEach(sec => sec.classList.remove('active'));
        // Desactivar totes les pestanyes
        document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));

        // Activar secció seleccionada
        document.getElementById(`section-${sectionIndex}`).classList.add('active');
        // Activar pestanya seleccionada
        document.querySelectorAll('.nav-tab')[sectionIndex - 1].classList.add('active');

        currentSection = sectionIndex;

        // Gestió de visibilitat dels botons inferiors
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const submitBtn = document.getElementById('submit-btn');

        prevBtn.style.visibility = (currentSection === 1) ? 'hidden' : 'visible';
        
        if (currentSection === totalSections) {
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'inline-block';
        } else {
            nextBtn.style.display = 'inline-block';
            submitBtn.style.display = 'none';
        }

        // Desplaçar la finestra cap a dalt de la zona de control de manera suau
        document.querySelector('.section-panel').scrollIntoView({ behavior: 'smooth' });
    }

    function changeSection(direction) {
        let targetSection = currentSection + direction;
        if (targetSection >= 1 && targetSection <= totalSections) {
            showSection(targetSection);
        }
    }

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

            // Neteja de classes prèvies de control visual
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

        // Mostrar bloc final d'avaluació global
        const resultSummary = document.getElementById('result-summary');
        document.getElementById('score-text').textContent = `${score} / ${total}`;
        const percentage = Math.round((score / total) * 100);
        document.getElementById('percentage-text').textContent = `${percentage}% d'encerts (Qualificació: ${(score/total*10).toFixed(2)} / 10)`;
        resultSummary.style.display = 'block';

        // Desplaçament fins al bloc final de puntuació
        resultSummary.scrollIntoView({ behavior: 'smooth' });
    }
