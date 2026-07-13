// ==========================================
// 1. DICCIONARI MULTIIDIOMA I PROTOTIP DE TEXTOS
// ==========================================

const uiLabels = {
    ca: {
        title: "Avaluació TI II: Arquitectura de Sistemes de Control",
        heading: "Avaluació Tècnica: Arquitectura de Sistemes de Control, Microcontroladors i Programació",
        desc: "Aquest qüestionari interactiu està dissenyat per a avaluar els continguts de blocs de sistemes automàtics de control, maquinari i programació encastada de la matèria Tecnologia i Enginyeria II (2n de Batxillerat).",
        tabs: ["1. Arquitectura", "2. Memòria i I/O", "3. Connectivitat", "4. Programació", "5. Eficiència i Avançat"],
        titles: ["Secció 1: Arquitectura de CPU i Sistemes de Control", "Secció 2: Gestió de Memòria i Adquisició de Senyals (I/O)", "Secció 3: Interfícies de Connectivitat i Telemetria", "Secció 4: Programació Avançada i Sistemes d'Interrupció", "Secció 5: Eficiència Energètica i Perifèrics Avançats"],
        btnPrev: "Anterior", btnNext: "Següent", btnSubmit: "Avaluar Qüestionari",
        resHeading: "Resultat de l'Avaluació Tècnica", resFooter: "Revisa a dalt les respostes de cada secció per a comprovar la retroalimentació tècnica detallada.",
        correctMark: "✓ Correcte!", incorrectMark: "✗ Incorrecte.", unansMark: "✗ No contestada.",
        userAnsInfo: "La teva opció triada és incorrecta. La resposta correcta era la", noAnsInfo: "No has seleccionat cap opció. La resposta correcta era la"
    },
    es: {
        title: "Evaluación TI II: Arquitectura de Sistemas de Control",
        heading: "Evaluación Técnica: Arquitectura de Sistemas de Control, Microcontroladores y Programación",
        desc: "Este cuestionario interactivo está diseñado para evaluar los contenidos de los bloques de sistemas automáticos de control, hardware y programación empotrada de la materia Tecnología e Ingeniería II (2º de Bachillerato).",
        tabs: ["1. Arquitectura", "2. Memoria e I/O", "3. Conectividad", "4. Programación", "5. Eficiencia y Avanzado"],
        titles: ["Sección 1: Arquitectura de CPU y Sistemas de Control", "Sección 2: Gestión de Memoria y Adquisición de Señales (I/O)", "Sección 3: Interfrecuencias de Conectividad y Telemetría", "Sección 4: Programación Avanzada y Sistemas de Interrupción", "Sección 5: Eficiencia Energética y Periféricos Avanzados"],
        btnPrev: "Anterior", btnNext: "Siguiente", btnSubmit: "Evaluar Cuestionario",
        resHeading: "Resultado de la Evaluación Técnica", resFooter: "Revisa arriba las respuestas de cada sección para comprobar la retroalimentación técnica detallada.",
        correctMark: "✓ ¡Correcto!", incorrectMark: "✗ Incorrecto.", unansMark: "✗ No contestada.",
        userAnsInfo: "Tu opción elegida es incorrecta. La respuesta correcta era la", noAnsInfo: "No has seleccionado ninguna opción. La respuesta correcta era la"
    },
    en: {
        title: "Evaluation TE II: Control Systems Architecture",
        heading: "Technical Evaluation: Control Systems Architecture, Microcontrollers and Programming",
        desc: "This interactive quiz is designed to evaluate the contents of automatic control systems, hardware, and embedded programming blocks for the Technology and Engineering II subject (2nd year of High School).",
        tabs: ["1. Architecture", "2. Memory & I/O", "3. Connectivity", "4. Programming", "5. Efficiency & Advanced"],
        titles: ["Section 1: CPU Architecture & Control Systems", "Section 2: Memory Management & Signal Acquisition (I/O)", "Section 3: Connectivity Interfaces & Telemetry", "Section 4: Advanced Programming & Interrupt Systems", "Section 5: Energy Efficiency & Advanced Peripherals"],
        btnPrev: "Previous", btnNext: "Next", btnSubmit: "Evaluate Quiz",
        resHeading: "Technical Evaluation Result", resFooter: "Review the answers in each section above to check the detailed technical feedback.",
        correctMark: "✓ Correct!", incorrectMark: "✗ Incorrect.", unansMark: "✗ Not answered.",
        userAnsInfo: "Your chosen option is incorrect. The correct answer was", noAnsInfo: "You haven't selected any option. The correct answer was"
    },
    de: {
        title: "Bewertung TI II: Kontrollsystemarchitektur",
        heading: "Technische Bewertung: Kontrollsystemarchitektur, Mikrocontroller und Programmierung",
        desc: "Dieses interaktive Quiz dient der Bewertung der Inhalte von automatischen Kontrollsystemen, Hardware und eingebetteten Programmierblöcken für das Fach Technologie und Ingenieurwesen II (2. Jahr der Sekundarstufe II).",
        tabs: ["1. Architektur", "2. Speicher & I/O", "3. Konnektivität", "4. Programmierung", "5. Effizienz & Erweitert"],
        titles: ["Abschnitt 1: CPU-Architektur und Kontrollsysteme", "Abschnitt 2: Speicherverwaltung und Signalerfassung (I/O)", "Abschnitt 3: Konnektivitätsschnittstellen und Telemetrie", "Abschnitt 4: Fortgeschrittene Programmierung und Interrupt-Systeme", "Abschnitt 5: Energieeffizienz und fortschrittliche Peripheriegeräte"],
        btnPrev: "Zurück", btnNext: "Weiter", btnSubmit: "Quiz auswerten",
        resHeading: "Ergebnis der technischen Bewertung", resFooter: "Überprüfen Sie die Antworten in den Abschnitten oben, um das detaillierte technische Feedback zu sehen.",
        correctMark: "✓ Richtig!", incorrectMark: "✗ Falsch.", unansMark: "✗ Nicht beantwortet.",
        userAnsInfo: "Ihre gewählte Option ist falsch. Die richtige Antwort war", noAnsInfo: "Sie haben keine Option ausgewählt. Die richtige Antwort war"
    }
};

// Banc de dades global de dades del qüestionari (Es mostren exemples complets traduits)
const quizDatabase = [
    {
        id: 1, section: 1, correct: "b",
        text: {
            ca: "1. Quina és la diferència fonamental d'arquitectura pel que fa al processament de dades entre l'ATmega328P (Arduino Uno) i el SoC ESP32?",
            es: "1. ¿Cuál es la diferencia fundamental de arquitectura en cuanto al procesamiento de datos entre el ATmega328P (Arduino Uno) y el SoC ESP32?",
            en: "1. What is the fundamental architectural difference regarding data processing between the ATmega328P (Arduino Uno) and the ESP32 SoC?",
            de: "1. Was ist der fundamentale architektonische Unterschied in Bezug auf die Datenverarbeitung zwischen dem ATmega328P (Arduino Uno) und dem ESP32 SoC?"
        },
        options: {
            ca: {
                a: "a) L'ATmega328P és un microcontrolador CISC de 16 bits i l'ESP32 és RISC de 64 bits.",
                b: "b) L'ATmega328P és una arquitectura Harvard de 8 bits (mononuclei) i l'ESP32 compta amb una arquitectura de 32 bits (generalment dual-core Xtensa LX6).",
                c: "c) Ambdós utilitzen arquitectura Von Neumann de 32 bits, diferenciant-se només en la velocitat de rellotge.",
                d: "d) L'ESP32 és un microprocessador pur que requereix perifèrics externs i l'ATmega328P és un sistema encastat tancat."
            },
            es: {
                a: "a) El ATmega328P es un microcontrolador CISC de 16 bits y el ESP32 es RISC de 64 bits.",
                b: "b) El ATmega328P es una arquitectura Harvard de 8 bits (mononúcleo) y el ESP32 cuenta con una arquitectura de 32 bits (generalmente dual-core Xtensa LX6).",
                c: "c) Ambos utilizan arquitectura Von Neumann de 32 bits, diferenciándose solo en la velocidad de reloj.",
                d: "d) El ESP32 es un microprocesador puro que requiere periféricos externos y el ATmega328P es un sistema empotrado cerrado."
            },
            en: {
                a: "a) The ATmega328P is a 16-bit CISC microcontroller and the ESP32 is a 64-bit RISC.",
                b: "b) The ATmega328P is an 8-bit Harvard architecture (single-core) and the ESP32 has a 32-bit architecture (usually dual-core Xtensa LX6).",
                c: "c) Both use 32-bit Von Neumann architecture, differing only in clock speed.",
                d: "d) The ESP32 is a pure microprocessor requiring external peripherals and the ATmega328P is a closed embedded system."
            },
            de: {
                a: "a) Der ATmega328P ist un 16-Bit CISC Mikrocontroller und der ESP32 ist 64-Bit RISC.",
                b: "b) Der ATmega328P ist eine 8-Bit-Harvard-Architektur (Single-Core) und der ESP32 verfügt über eine 32-Bit-Architektur (normalerweise Dual-Core Xtensa LX6).",
                c: "c) Beide verwenden eine 32-Bit-Von-Neumann-Architektur und unterscheiden sich nur in der Taktfrequenz.",
                d: "d) Der ESP32 ist ein reiner Mikroprozessor, der externe Peripheriegeräte erfordert, und el ATmega328P ist ein geschlossenes eingebettetes System."
            }
        },
        feedback: {
            ca: "<strong>Retroalimentació:</strong> El salt de 8 bits a 32 bits multiprocés permet a l'ESP32 executar tasques concurrents complexes i sistemes operatius en temps real (RTOS).",
            es: "<strong>Retroalimentación:</strong> El salto de 8 bits a 32 bits multiproceso permite al ESP32 ejecutar tareas concurrentes complejas y sistemas operativos en tiempo real (RTOS).",
            en: "<strong>Feedback:</strong> The leap from 8-bit to 32-bit multiprocessing allows the ESP32 to execute complex concurrent tasks and real-time operating systems (RTOS).",
            de: "<strong>Feedback:</strong> Der Sprung von 8-Bit auf 32-Bit-Multiprocessing ermöglicht es dem ESP32, komplexe gleichzeitige Aufgaben und Echtzeitbetriebssysteme (RTOS) auszuführen."
        }
    },
    {
        id: 2, section: 1, correct: "b",
        text: {
            ca: "2. En un entorn de temps real (FreeRTOS) utilitzat per l'ESP