// 1. DICCIONARI DE TEXTOS DE LA INTERFÍCIE (Per afegir idiomes fàcilment)
const uiTexts = {
    ca: {
        title: "Qüestionari Arduino / ESP32",
        langLabel: "Idioma:",
        nextBtn: "Següent",
        finishBtn: "Finalitzar",
        resultsTitle: "Resultats de l'intent",
        score: "Has encertat {score} de {total} preguntes ({percent}%).",
        restartBtn: "Torna a intentar-ho",
        correct: "Correcte",
        incorrect: "Incorrecte",
        yourRes: "La teva resposta: ",
        correctRes: "Resposta correcta: ",
        why: "Per què? "
    },
    es: {
        title: "Cuestionario Arduino / ESP32",
        langLabel: "Idioma:",
        nextBtn: "Siguiente",
        finishBtn: "Finalizar",
        resultsTitle: "Resultados del intento",
        score: "Has acertado {score} de {total} preguntas ({percent}%).",
        restartBtn: "Volver a intentarlo",
        correct: "Correcto",
        incorrect: "Incorrecto",
        yourRes: "Tu respuesta: ",
        correctRes: "Respuesta correcta: ",
        why: "¿Por qué? "
    }
};

// 2. BATERIA DE 50 PREGUNTES EN FORMAT MULTI-IDIOMA
// Per afegir un idioma nou, només cal afegir la clau corresponent (ex: en: {...}) a cada pregunta.
const questionBank = [
    {
        id: 1,
        ca: {
            pregunta: "Quina funció s'executa una sola vegada en iniciar la placa?",
            opcions: ["loop()", "setup()", "init()", "main()"],
            resposta: 1,
            feedback: "La funció setup() es crida automàticament quan s'inicia un sketch per configurar pins o inicialitzar comunicacions."
        },
        es: {
            pregunta: "¿Qué función se ejecuta una sola vez al iniciar la placa?",
            opcions: ["loop()", "setup()", "init()", "main()"],
            resposta: 1,
            feedback: "La función setup() se llama automáticamente cuando arranca un sketch para configurar pines o inicializar comunicaciones."
        }
    },
    {
        id: 2,
        ca: {
            pregunta: "Quina funció s'executa en bucle continu?",
            opcions: ["setup()", "run()", "loop()", "delay()"],
            resposta: 2,
            feedback: "La funció loop() conté el codi principal del programa que s'executarà indefinidament de dalt a baix."
        },
        es: {
            pregunta: "¿Qué función se ejecuta en bucle continuo?",
            opcions: ["setup()", "run()", "loop()", "delay()"],
            resposta: 2,
            feedback: "La función loop() contiene el código principal del programa que se ejecutará indefinidamente."
        }
    },
    {
        id: 3,
        ca: {
            pregunta: "Amb quin caràcter acaben la majoria de línies de codi en l'IDE d'Arduino?",
            opcions: [".", ":", ",", ";"],
            resposta: 3,
            feedback: "En C/C++, cada sentència o instrucció ha d'acabar obligatòriament amb un punt i coma (;)."
        },
        es: {
            pregunta: "¿Con qué carácter terminan la mayoría de líneas de código en el IDE de Arduino?",
            opcions: [".", ":", ",", ";"],
            resposta: 3,
            feedback: "En C/C++, cada sentencia o instrucción debe terminar obligatoriamente con un punto y coma (;)."
        }
    },
    {
        id: 4,
        ca: {
            pregunta: "Com es posa un comentari d'una sola línia en el codi?",
            opcions: ["# Comentari", "// Comentari", "/* Comentari", ""],
            resposta: 1,
            feedback: "La doble barra '//' s'utilitza per indicar al compilador que la resta de la línia és un comentari."
        },
        es: {
            pregunta: "¿Cómo se pone un comentario de una sola línea en el código?",
            opcions: ["# Comentario", "// Comentario", "/* Comentario", ""],
            resposta: 1,
            feedback: "La doble barra '//' se utiliza para indicar al compilador que el resto de la línea es un comentario."
        }
    },
    {
        id: 5,
        ca: {
            pregunta: "Quin tipus de dades s'utilitza per emmagatzemar un valor numèric sencer?",
            opcions: ["float", "char", "int", "boolean"],
            resposta: 2,
            feedback: "'int' s'utilitza per a enters. 'float' és per a decimals i 'char' per a caràcters."
        },
        es: {
            pregunta: "¿Qué tipo de datos se utiliza para almacenar un valor numérico entero?",
            opcions: ["float", "char", "int", "boolean"],
            resposta: 2,
            feedback: "'int' se utiliza para enteros. 'float' es para decimales y 'char' para caracteres."
        }
    },
    {
        id: 6,
        ca: {
            pregunta: "Quina instrucció configura un pin com a sortida o entrada?",
            opcions: ["pinMode()", "digitalWrite()", "digitalRead()", "analogWrite()"],
            resposta: 0,
            feedback: "pinMode(pin, MODE) defineix el comportament d'un pin específic com a INPUT, OUTPUT o INPUT_PULLUP."
        },
        es: {
            pregunta: "¿Qué instrucción configura un pin como salida o entrada?",
            opcions: ["pinMode()", "digitalWrite()", "digitalRead()", "analogWrite()"],
            resposta: 0,
            feedback: "pinMode(pin, MODE) define el comportamiento de un pin específico como INPUT, OUTPUT o INPUT_PULLUP."
        }
    },
    {
        id: 7,
        ca: {
            pregunta: "Quin és el voltatge de funcionament de la majoria de pins digitals de l'Arduino Uno?",
            opcions: ["3.3V", "5V", "12V", "9V"],
            resposta: 1,
            feedback: "L'Arduino Uno funciona a 5V de lògica interna, a diferència de plaques més modernes com l'ESP32."
        },
        es: {
            pregunta: "¿Cuál es el voltaje de funcionamiento de la mayoría de pines digitales del Arduino Uno?",
            opcions: ["3.3V", "5V", "12V", "9V"],
            resposta: 1,
            feedback: "El Arduino Uno funciona a 5V de lógica interna, a diferencia de placas más modernas como el ESP32."
        }
    },
    {
        id: 8,
        ca: {
            pregunta: "Quin és el voltatge lògic natiu de funcionament d'un ESP32?",
            opcions: ["5V", "1.8V", "12V", "3.3V"],
            resposta: 3,
            feedback: "L'ESP32 utilitza lògica de 3.3V. Aplicar 5V directament als seus pins GPIO pot danyar el microcontrolador."
        },
        es: {
            pregunta: "¿Cuál es el voltaje lógico nativo de funcionamiento de un ESP32?",
            opcions: ["5V", "1.8V", "12V", "3.3V"],
            resposta: 3,
            feedback: "El ESP32 utiliza lógica de 3.3V. Aplicar 5V directamente a sus pines GPIO puede dañar el microcontrolador."
        }
    },
    {
        id: 9,
        ca: {
            pregunta: "Quina instrucció envia un senyal digital alt (HIGH) a un pin?",
            opcions: ["digitalRead()", "analogWrite()", "digitalWrite()", "pinMode()"],
            resposta: 2,
            feedback: "digitalWrite(pin, HIGH) posa el pin seleccionat al voltatge de funcionament màxim (HIGH)."
        },
        es: {
            pregunta: "¿Qué instrucción envía una señal digital alta (HIGH) a un pin?",
            opcions: ["digitalRead()", "analogWrite()", "digitalWrite()", "pinMode()"],
            resposta: 2,
            feedback: "digitalWrite(pin, HIGH) pone el pin seleccionado al voltaje de funcionamiento máximo (HIGH)."
        }
    },
    {
        id: 10,
        ca: {
            pregunta: "Quants mil·lisegons equivalen a delay(2500)?",
            opcions: ["25 ms", "2.5 ms", "25000 ms", "2500 ms (2.5 segons)"],
            resposta: 3,
            feedback: "La funció delay() rep el temps en mil·lisegons, per tant 2500 ms són exactament 2.5 segons."
        },
        es: {
            pregunta: "¿Cuántos milisegundos equivalen a delay(2500)?",
            opcions: ["25 ms", "2.5 ms", "25000 ms", "2500 ms (2.5 segundos)"],
            resposta: 3,
            feedback: "La función delay() recibe el tiempo en milisegundos, por lo tanto 2500 ms son exactamente 2.5 segundos."
        }
    },
    {
        id: 11,
        ca: {
            pregunta: "Quina velocitat de bauds s'utilitza més habitualment per defecte per iniciar el monitor sèrie?",
            opcions: ["9600", "115200", "4800", "A i B són comunes"],
            resposta: 3,
            feedback: "9600 és el clàssic en Arduino Uno, mentre que 115200 és l'estàndard per defecte per a ESP32."
        },
        es: {
            pregunta: "¿Qué velocidad de baudios se utiliza más habitualmente por defecto para iniciar el monitor serie?",
            opcions: ["9600", "115200", "4800", "A y B son comunes"],
            resposta: 3,
            feedback: "9600 es el clásico en Arduino Uno, mientras que 115200 es el estándar por defecto para ESP32."
        }
    },
    {
        id: 12,
        ca: {
            pregunta: "Quina funció inicialitza la comunicació sèrie?",
            opcions: ["Serial.print()", "Serial.begin()", "Serial.open()", "Serial.start()"],
            resposta: 1,
            feedback: "Serial.begin(baudrate) s'ha de cridar dins del setup() per obrir el canal de comunicació sèrie."
        },
        es: {
            pregunta: "¿Qué función inicializa la comunicación serie?",
            opcions: ["Serial.print()", "Serial.begin()", "Serial.open()", "Serial.start()"],
            resposta: 1,
            feedback: "Serial.begin(baudrate) debe llamarse dentro del setup() para abrir el canal de comunicación serie."
        }
    },
    {
        id: 13,
        ca: {
            pregunta: "Què fa la instrucció Serial.println(\"Hola\");?",
            opcions: ["Imprimeix 'Hola' i fa un salt de línia", "Imprimeix 'Hola' en una impressora tèrmica", "Llegeix un text del monitor sèrie", "Esborra la pantalla del monitor sèrie"],
            resposta: 0,
            feedback: "El sufix 'ln' significa 'line', per tant afegeix un salt de línia (retorn de carro) després de la cadena."
        },
        es: {
            pregunta: "¿Qué hace la instrucción Serial.println(\"Hola\");?",
            opcions: ["Imprimeye 'Hola' y hace un salto de línea", "Imprime 'Hola' en una impresora térmica", "Lee un texto del monitor serie", "Borra la pantalla del monitor serie"],
            resposta: 0,
            feedback: "El sufijo 'ln' significa 'line', por lo tanto añade un salto de línea (retorno de carro) después de la cadena."
        }
    },
    {
        id: 14,
        ca: {
            pregunta: "Què vol dir PWM?",
            opcions: ["Power Wave Modulation", "Pulse Width Modulation", "Protocol Wireless Master", "Pin With Modulator"],
            resposta: 1,
            feedback: "PWM (Modulació per Ample de Polsos) és una tècnica per simular un senyal analògic variant el cicle de treball d'un senyal digital."
        },
        es: {
            pregunta: "¿Qué significa PWM?",
            opcions: ["Power Wave Modulation", "Pulse Width Modulation", "Protocol Wireless Master", "Pin With Modulator"],
            resposta: 1,
            feedback: "PWM (Modulación por Ancho de Pulsos) es una técnica para simular una señal analógica variando el ciclo de trabajo de una señal digital."
        }
    },
    {
        id: 15,
        ca: {
            pregunta: "Quina funció s'usa en Arduino per generar un senyal PWM simulant una sortida analògica?",
            opcions: ["analogRead()", "dacWrite()", "analogWrite()", "pwmWrite()"],
            resposta: 2,
            feedback: "analogWrite(pin, valor) rep un valor entre 0 i 255 per modificar el cicle de treball del pin PWM seleccionat."
        },
        es: {
            pregunta: "¿Qué función se usa en Arduino para generar una señal PWM simulando una salida analógica?",
            opcions: ["analogRead()", "dacWrite()", "analogWrite()", "pwmWrite()"],
            resposta: 2,
            feedback: "analogWrite(pin, valor) recibe un valor entre 0 y 255 para modificar el ciclo de trabajo del pin PWM seleccionado."
        }
    },
    {
        id: 16,
        ca: {
            pregunta: "Quina és la resolució per defecte del convertidor analògic-digital (ADC) de l'Arduino Uno?",
            opcions: ["8 bits", "10 bits", "12 bits", "16 bits"],
            resposta: 1,
            feedback: "L'ADC de l'Arduino Uno és de 10 bits, el que significa que mapeja voltatges de 0 a 5V en valors sencers del 0 al 1023."
        },
        es: {
            pregunta: "¿Cuál es la resolución por defecto del convertidor analógico-digital (ADC) del Arduino Uno?",
            opcions: ["8 bits", "10 bits", "12 bits", "16 bits"],
            resposta: 1,
            feedback: "El ADC del Arduino Uno es de 10 bits, lo que significa que mapea voltajes de 0 a 5V en valores enteros del 0 al 1023."
        }
    },
    {
        id: 17,
        ca: {
            pregunta: "Quina resolució nativa té el convertidor analògic-digital (ADC) de l'ESP32?",
            opcions: ["10 bits", "12 bits", "8 bits", "14 bits"],
            resposta: 1,
            feedback: "L'ESP32 té un ADC de 12 bits per defecte, oferint un rang de lectura de 0 a 4095, molt més precís."
        },
        es: {
            pregunta: "¿Qué resolución nativa tiene el convertidor analógico-digital (ADC) del ESP32?",
            opcions: ["10 bits", "12 bits", "8 bits", "14 bits"],
            resposta: 1,
            feedback: "El ESP32 tiene un ADC de 12 bits por defecto, ofreciendo un rango de lectura de 0 a 4095, siendo mucho más preciso."
        }
    },
    {
        id: 18,
        ca: {
            pregunta: "Quina funció llegeix el voltatge en un pin analògic?",
            opcions: ["analogWrite()", "digitalRead()", "analogRead()", "getAnalog()"],
            resposta: 2,
            feedback: "analogRead(pin) llegeix el voltatge aplicat al pin i el converteix en un valor digital segons la resolució de l'ADC."
        },
        es: {
            pregunta: "¿Qué función lee el voltaje en un pin analógico?",
            opcions: ["analogWrite()", "digitalRead()", "analogRead()", "getAnalog()"],
            resposta: 2,
            feedback: "analogRead(pin) lee el voltaje aplicado al pin y lo convierte en un valor digital según la resolución del ADC."
        }
    },
    {
        id: 19,
        ca: {
            pregunta: "Quina perifèria inalambrica integrada diferència principalment l'ESP32 de l'Arduino Uno?",
            opcions: ["Infrarojos", "Wi-Fi i Bluetooth", "Radiofreqüència 433Mhz", "LoRa"],
            resposta: 1,
            feedback: "L'ESP32 inclou piles de comunicació de hardware per a Wi-Fi 802.11 b/g/n i Bluetooth integrats en el xip."
        },
        es: {
            pregunta: "¿Qué periférico inalámbrico integrado diferencia principalmente al ESP32 del Arduino Uno?",
            opcions: ["Infrarrojos", "Wi-Fi y Bluetooth", "Radiofrecuencia 433Mhz", "LoRa"],
            resposta: 1,
            feedback: "El ESP32 incluye pilas de comunicación por hardware para Wi-Fi 802.11 b/g/n y Bluetooth integrados en el chip."
        }
    },
    {
        id: 20,
        ca: {
            pregunta: "Quina llibreria s'inclou típicament per connectar l'ESP32 a una xarxa Wi-Fi domèstica?",
            opcions: ["WiFi.h", "ESP32Network.h", "Internet.h", "SPI.h"],
            resposta: 0,
            feedback: "L'entorn de codi de l'ESP32 utilitza la llibreria <WiFi.h> per gestionar l'estat de connexió com a estació (STA) o punt d'accés (AP)."
        },
        es: {
            pregunta: "¿Qué librería se incluye típicamente para conectar el ESP32 a una red Wi-Fi doméstica?",
            opcions: ["WiFi.h", "ESP32Network.h", "Internet.h", "SPI.h"],
            resposta: 0,
            feedback: "El entorno de código del ESP32 utiliza la librería <WiFi.h> para gestionar el estado de conexión como estación (STA) o punto de acceso (AP)."
        }
    },
    {
        id: 21,
        ca: {
            pregunta: "Què fa la funció map() en Arduino?",
            opcions: ["Dibuixa mapes en una pantalla OLED", "Mapeja coordenades GPS", "Escala un valor numèric d'un rang a un altre", "Enllaça variables de xarxa"],
            resposta: 2,
            feedback: "map(valor, des deBaix, des d'Alt, aBaix, aAlt) recalcula proporcionalment un valor d'un rang origen a un rang destí."
        },
        es: {
            pregunta: "¿Qué hace la función map() en Arduino?",
            opcions: ["Dibuja mapas en una pantalla OLED", "Mapea coordenadas GPS", "Escala un valor numérico de un rango a otro", "Enlaza variables de red"],
            resposta: 2,
            feedback: "map(valor, desdeBajo, desdeAlto, aBajo, aAlto) recalcula proporcionalmente un valor de un rango origen a un rango destino."
        }
    },
    {
        id: 22,
        ca: {
            pregunta: "Quants nuclis de processament té el processador principal de l'ESP32 estàndard?",
            opcions: ["1 nucli", "2 nuclis", "4 nuclis", "8 nuclis"],
            resposta: 1,
            feedback: "L'ESP32 és un microcontrolador de doble nucli (Dual-core Xtensa LX6), permetent executar tasques en paral·lel gràcies a RTOS."
        },
        es: {
            pregunta: "¿Cuántos núcleos de procesamiento tiene el procesador principal del ESP32 estándar?",
            opcions: ["1 núcleo", "2 núcleos", "4 núcleos", "8 núcleos"],
            resposta: 1,
            feedback: "El ESP32 es un microcontrolador de doble núcleo (Dual-core Xtensa LX6), permitiendo ejecutar tareas en paralelo gracias a RTOS."
        }
    },
    {
        id: 23,
        ca: {
            pregunta: "Quina llibreria s'usa comunament per a la comunicació I2C?",
            opcions: ["SPI.h", "SoftwareSerial.h", "Wire.h", "LiquidCrystal.h"],
            resposta: 2,
            feedback: "La llibreria <Wire.h> és la llibreria nativa oficial del framework d'Arduino per gestionar el bus de comunicació síncron I2C."
        },
        es: {
            pregunta: "¿Qué librería se usa comúnmente para la comunicación I2C?",
            opcions: ["SPI.h", "SoftwareSerial.h", "Wire.h", "LiquidCrystal.h"],
            resposta: 2,
            feedback: "La librería <Wire.h> es la librería nativa oficial del framework de Arduino para gestionar el bus de comunicación síncrono I2C."
        }
    },
    {
        id: 24,
        ca: {
            pregunta: "Quins són els dos cables de senyal d'un bus de comunicació I2C?",
            opcions: ["TX i RX", "MOSI i MISO", "SDA i SCL", "VCC i GND"],
            resposta: 2,
            feedback: "I2C utilitza SDA (Serial Data Line) per a les dades i SCL (Serial Clock Line) per al senyal de rellotge de sincronització."
        },
        es: {
            pregunta: "¿Cuáles son los dos cables de señal de un bus de comunicación I2C?",
            opcions: ["TX y RX", "MOSI y MISO", "SDA y SCL", "VCC y GND"],
            resposta: 2,
            feedback: "I2C utiliza SDA (Serial Data Line) para los datos y SCL (Serial Clock Line) para la señal de reloj de sincronización."
        }
    },
    {
        id: 25,
        ca: {
            pregunta: "Quin protocol requereix un pin de selecció d'esclau (SS/CS) per a cada dispositiu connectat?",
            opcions: ["I2C", "UART", "SPI", "1-Wire"],
            resposta: 2,
            feedback: "El bus SPI requereix una línia SS (Slave Select) o CS (Chip Select) independent per activar cada dispositiu esclau connectat al bus."
        },
        es: {
            pregunta: "¿Qué protocolo requiere un pin de selección de esclavo (SS/CS) para cada dispositivo conectado?",
            opcions: ["I2C", "UART", "SPI", "1-Wire"],
            resposta: 2,
            feedback: "El bus SPI requiere una línea SS (Slave Select) o CS (Chip Select) independiente para activar cada dispositivo esclavo conectado al bus."
        }
    },
    {
        id: 26,
        ca: {
            pregunta: "Quina funció retorna el nombre de mil·lisegons transcorreguts des que la placa es va iniciar?",
            opcions: ["delay()", "micros()", "millis()", "time()"],
            resposta: 2,
            feedback: "millis() retorna un valor 'unsigned long' amb el temps acumulat des del boot. És crucial per fer codi no bloquejant."
        },
        es: {
            pregunta: "¿Qué función devuelve el número de milisegundos transcurridos desde que la placa se inició?",
            opcions: ["delay()", "micros()", "millis()", "time()"],
            resposta: 2,
            feedback: "millis() devuelve un valor 'unsigned long' con el tiempo acumulado desde el boot. Es crucial para programar de forma no bloqueante."
        }
    },
    {
        id: 27,
        ca: {
            pregunta: "Per què s'ha d'evitar l'ús de delay() en projectes complexos d'IoT?",
            opcions: ["Atura completament l'execució del processador", "Consumeix més energia de la bateria", "Desconnecta el Wi-Fi per seguretat", "Fa que la placa s'escalfi"],
            resposta: 0,
            feedback: "delay() és una funció bloquejant. Durant el recompte, el nucli del processador no llegeix sensors ni atén connexions de xarxa."
        },
        es: {
            pregunta: "¿Por qué debe evitarse el uso de delay() en proyectos complejos de IoT?",
            opcions: ["Detiene por completo la ejecución del procesador", "Consume mucha más energía de la batería", "Desconecta el Wi-Fi por seguridad", "Hace que la placa se caliente"],
            resposta: 0,
            feedback: "delay() es una función bloqueante. Durante el conteo, el núcleo del procesador se detiene y no lee sensores ni atiende conexiones de red."
        }
    },
    {
        id: 28,
        ca: {
            pregunta: "Quin mètode s'utilitza per evitar l'efecte de rebot (debouncing) d'un polsador per programació?",
            opcions: ["Pujar la resistència de pull-up", "Mesurar el temps transcorregut entre canvis d'estat amb millis()", "Canviar el polsador per un interruptor", "Utilitzar un pin analògic en lloc de digital"],
            resposta: 1,
            feedback: "L'ús de millis() permet verificar que hagi passat un temps mínim (ex. 50ms) per descartar sorolls de transició mecànica."
        },
        es: {
            pregunta: "¿Qué método se utiliza para evitar el efecto de rebote (debouncing) de un pulsador por programación?",
            opcions: ["Subir la resistencia de pull-up", "Medir el tiempo transcurrido entre cambios de estado con millis()", "Cambiar el pulsador por un interruptor", "Utilizar un pin analógico en lugar de digital"],
            resposta: 1,
            feedback: "El uso de millis() permite verificar que haya pasado un tiempo mínimo (ej. 50ms) para descartar los ruidos de la transición mecánica."
        }
    },
    {
        id: 29,
        ca: {
            pregunta: "Què és una interrupció (Interrupt) en microcontroladors?",
            opcions: ["Un error crític de codi", "Un mecanisme per aturar el programa des de la consola", "Un senyal de hardware que pausa el flux normal de codi per executar una funció immediata", "Una funció per reiniciar la placa"],
            resposta: 2,
            feedback: "Les interrupcions (attachInterrupt) reaccionen a esdeveniments físics instantanis executant una ISR de forma prioritària."
        },
        es: {
            pregunta: "¿Qué es una interrupción (Interrupt) en microcontroladores?",
            opcions: ["Un error crítico de código", "Un mecanismo para pausar el programa desde la consola", "Una señal de hardware que pausa el flujo normal de código para ejecutar una función inmediata", "Una función para reiniciar la placa"],
            resposta: 2,
            feedback: "Las interrupciones (attachInterrupt) reaccionan a eventos físicos instantáneos ejecutando una ISR de forma prioritaria."
        }
    },
    {
        id: 30,
        ca: {
            pregunta: "Quina característica ha de tenir una funció ISR que atén una interrupció?",
            opcions: ["Ha de ser molt ràpida i no utilitzar delay()", "Ha de retornar un valor sencer", "Ha d'incloure bucles llargs", "Ha d'imprimir dades per monitor sèrie amb Serial.print()"],
            resposta: 0,
            feedback: "Les ISR (Interrupt Service Routines) han de ser el més curtes possibles i no utilitzar funcions basades en comptadors de temps bloquejants."
        },
        es: {
            pregunta: "¿Qué característica debe cumplir una función ISR que atiende una interrupción?",
            opcions: ["Debe ser muy rápida y no utilizar delay()", "Debe devolver un valor entero", "Debe incluir bucles largos", "Debe imprimir datos por monitor serie con Serial.print()"],
            resposta: 0,
            feedback: "Las ISR (Interrupt Service Routines) deben ser lo más cortas posibles y no utilizar funciones basadas en contadores de tiempo bloqueantes."
        }
    },
    {
        id: 31,
        ca: {
            pregunta: "Quin d'aquests protocols web és un estàndard lleuger basat en publicació/subscripció per a telemetria IoT?",
            opcions: ["HTTP POST", "MQTT", "FTP", "Websocket"],
            resposta: 1,
            feedback: "MQTT utilitza un Broker central on els clients publiquen o es subscriuen a tòpics amb una capçalera de dades extremadament lleugera."
        },
        es: {
            pregunta: "¿Cuál de estos protocolos web es un estándar ligero basado en publicación/suscripción para telemetría IoT?",
            opcions: ["HTTP POST", "MQTT", "FTP", "Websocket"],
            resposta: 1,
            feedback: "MQTT utiliza un Broker central donde los clientes publican o se suscriben a tópicos con una cabecera de datos extremadamente ligera."
        }
    },
    {
        id: 32,
        ca: {
            pregunta: "En MQTT, quin element s'encarrega d'enrutar els missatges entre els publicadors i els subscriptors?",
            opcions: ["El Servidor web", "El Gateway", "El Broker", "L'Esclau"],
            resposta: 2,
            feedback: "El Broker (com Mosquitto o HiveMQ) rep missatges, filtra per tòpics i distribueix la informació als subscriptors."
        },
        es: {
            pregunta: "En MQTT, ¿qué elemento se encarga de enrutar los mensajes entre los publicadores y los suscriptores?",
            opcions: ["El Servidor web", "El Gateway", "El Broker", "El Esclavo"],
            resposta: 2,
            feedback: "El Broker (como Mosquitto o HiveMQ) recibe mensajes, filtra por tópicos y distribuye la información a los suscriptores."
        }
    },
    {
        id: 33,
        ca: {
            pregunta: "Quin format de text lleuger s'utilitza comunament per empaquetar estructures de dades complexes en IoT?",
            opcions: ["XML", "JSON", "HTML", "CSV"],
            resposta: 1,
            feedback: "JSON (JavaScript Object Notation) és fàcil de llegir per humans i màquines, i s'utilitza a bastament per enviar objectes per xarxa."
        },
        es: {
            pregunta: "¿Qué formato de texto ligero se utiliza comúnmente para empaquetar estructuras de datos complejas en IoT?",
            opcions: ["XML", "JSON", "HTML", "CSV"],
            resposta: 1,
            feedback: "JSON (JavaScript Object Notation) es fácil de leer por humanos y máquinas, y se utiliza masivamente para enviar objetos por red."
        }
    },
    {
        id: 34,
        ca: {
            pregunta: "Què és un pin configurat com a INPUT_PULLUP?",
            opcions: ["Un pin connectat a un relé", "Un pin que llegeix corrent altern", "Un pin amb una resistència interna connectada a VCC per evitar estats flotants", "Un pin d'alta potència de sortida"],
            resposta: 2,
            feedback: "INPUT_PULLUP activa una resistència interna cap a positiu de manera que el pin llegeix HIGH de forma nativa fins que es connecta a GND."
        },
        es: {
            pregunta: "¿Qué es un pin configurado como INPUT_PULLUP?",
            opcions: ["Un pin conectado a un relé", "Un pin que lee corriente alterna", "Un pin con una resistencia interna conectada a VCC para evitar estados flotantes", "Un pin de alta potencia de salida"],
            resposta: 2,
            feedback: "INPUT_PULLUP activa una resistencia interna hacia positivo de modo que el pin lee HIGH de forma nativa hasta que se conecta a GND."
        }
    },
    {
        id: 35,
        ca: {
            pregunta: "Quin tipus de memòria conserva les dades del programa fins i tot quan la placa es desconnecta?",
            opcions: ["SRAM", "Memòria Flash", "DRAM", "Cache"],
            resposta: 1,
            feedback: "La memòria Flash és no volàtil i s'encarrega d'emmagatzemar el codi binari del programa binari compilat."
        },
        es: {
            pregunta: "¿Qué tipo de memoria conserva los datos del programa incluso cuando la placa se desconecta?",
            opcions: ["SRAM", "Memoria Flash", "DRAM", "Cache"],
            resposta: 1,
            feedback: "La memoria Flash es no volátil y se encarga de almacenar el código binario del programa compilado."
        }
    },
    {
        id: 36,
        ca: {
            pregunta: "Quina memòria interna s'utilitza habitualment per guardar petites configuracions de hardware permanents que canvien poc?",
            opcions: ["RAM", "EEPROM / NVS", "ROM", "SD Card"],
            resposta: 1,
            feedback: "L'EEPROM (o NVS en l'ESP32) és una secció no volàtil reservada per escriure bytes des del codi per desar estats de configuració."
        },
        es: {
            pregunta: "¿Qué memoria interna se utiliza habitualmente para guardar pequeñas configuraciones permanentes de hardware que cambian poco?",
            opcions: ["RAM", "EEPROM / NVS", "ROM", "SD Card"],
            resposta: 1,
            feedback: "La EEPROM (o NVS en el ESP32) es una sección no volátil reservada para escribir bytes desde el código para salvar estados de configuración."
        }
    },
    {
        id: 37,
        ca: {
            pregunta: "Què vol dir OTA en el context d'actualització de microcontroladors?",
            opcions: ["Over-The-Air (Actualització sense fils via Wi-Fi)", "On-Time-Action", "Output Transmission Array", "Overclock Total Applied"],
            resposta: 0,
            feedback: "OTA permet carregar un nou firmware de codi a l'ESP32 remotament utilitzant el Wi-Fi sense necessitat de connectar un cable USB."
        },
        es: {
            pregunta: "¿Qué significa OTA en el contexto de actualización de microcontroladores?",
            opcions: ["Over-The-Air (Actualización inalámbrica vía Wi-Fi)", "On-Time-Action", "Output Transmission Array", "Overclock Total Applied"],
            resposta: 0,
            feedback: "OTA permite cargar un nuevo firmware de código al ESP32 remotamente usando el Wi-Fi sin necesidad de conectar un cable USB."
        }
    },
    {
        id: 38,
        ca: {
            pregunta: "Quina tecnologia de ràdio és ideal per a telemetria de llarg abast (quilòmetres) i molt baix consum de dades?",
            opcions: ["Bluetooth BLE", "Wi-Fi 5G", "LoRa / LoRaWAN", "Zigbee"],
            resposta: 2,
            feedback: "LoRa és una tecnologia de modulació de ràdio que aconsegueix cobertures d'enllaç de quilòmetres enviant paquets petits de bytes."
        },
        es: {
            pregunta: "¿Qué tecnología de radio es ideal para telemetría de largo alcance (kilómetros) y muy bajo consumo de datos?",
            opcions: ["Bluetooth BLE", "Wi-Fi 5G", "LoRa / LoRaWAN", "Zigbee"],
            resposta: 2,
            feedback: "LoRa es una tecnología de modulación de radio que consigue coberturas de enlace de kilómetros enviando paquetes pequeños de bytes."
        }
    },
    {
        id: 39,
        ca: {
            pregunta: "Què passa si declares una variable dins de la funció loop()?",
            opcions: ["És global i es llegeix arreu", "Es crea i destrueix en cada cicle del bucle (Àmbit local)", "Dóna error de compilació", "Es desa en l'EEPROM"],
            resposta: 1,
            feedback: "Les variables definides dins d'un bloc `{}` tenen un àmbit (scope) local. Es reinicien a cada iteració de la funció."
        },
        es: {
            pregunta: "¿Qué ocurre si declaras una variable dentro de la función loop()?",
            opcions: ["Es global y se lee en todo el código", "Se crea y destruye en cada ciclo del bucle (Ámbito local)", "Da error de compilación", "Se guarda en la EEPROM"],
            resposta: 1,
            feedback: "Las variables definidas dentro de un bloque `{}` tienen un ámbito (scope) local. Se reinician en cada iteración de la función."
        }
    },
    {
        id: 40,
        ca: {
            pregunta: "Quina perifèria interna de l'ESP32 permet generar una sortida analògica pura en voltatge (no PWM)?",
            opcions: ["ADC", "DAC", "SPI", "Capacitive Touch"],
            resposta: 1,
            feedback: "A diferència del PWM, el DAC (Digital to Analog Converter) de l'ESP32 genera corrent i voltatge analògic variable de veritat."
        },
        es: {
            pregunta: "¿Qué periférico interno del ESP32 permite generar una salida analógica pura en voltaje (no PWM)?",
            opcions: ["ADC", "DAC", "SPI", "Capacitive Touch"],
            resposta: 1,
            feedback: "A diferencia del PWM, el DAC (Digital to Analog Converter) del ESP32 genera corriente y voltaje analógico variable real."
        }
    },
    {
        id: 41,
        ca: {
            pregunta: "Quina eina del IDE d'Arduino permet visualitzar gràfics de variables en temps real?",
            opcions: ["Monitor Sèrie", "Serial Plotter (Arxivador sèrie)", "Compilador", "Gestor de llibreries"],
            resposta: 1,
            feedback: "El Serial Plotter dibuixa automàticament corbes de gràfics quan es reben dades numèriques separades per espais o comes."
        },
        es: {
            pregunta: "¿Qué herramienta del IDE de Arduino permite visualizar gráficos de variables en tiempo real?",
            opcions: ["Monitor Serie", "Serial Plotter (Trazador serie)", "Compilador", "Gestor de librerías"],
            resposta: 1,
            feedback: "El Serial Plotter dibuja automáticamente curvas gráficas cuando se reciben datos numéricos separados por espacios o comas."
        }
    },
    {
        id: 42,
        ca: {
            pregunta: "Quina paraula clau es col·loca abans d'una variable en una interrupció per forçar el processador a llegir-la directament de la RAM?",
            opcions: ["static", "const", "volatile", "unsigned"],
            resposta: 2,
            feedback: "La clau 'volatile' indica al compilador que la variable pot canviar de forma externa inesperada a causa d'una interrupció."
        },
        es: {
            pregunta: "¿Qué palabra clave se coloca antes de una variable en una interrupción para forzar al procesador a leerla directamente de la RAM?",
            opcions: ["static", "const", "volatile", "unsigned"],
            resposta: 2,
            feedback: "La clave 'volatile' indica al compilador que la variable puede cambiar de forma externa inesperada debido a una interrupción."
        }
    },
    {
        id: 43,
        ca: {
            pregunta: "Quina d'aquestes opcions és un mode de baix consum de l'ESP32?",
            opcions: ["Deep Sleep", "Light Sleep", "Modem Sleep", "Totes les anteriors"],
            resposta: 3,
            feedback: "L'ESP32 té múltiples perfils de gestió d'energia. El 'Deep Sleep' desactiva gairebé tot el xip estalviant microamperes."
        },
        es: {
            pregunta: "¿Cuál de estas opciones es un modo de bajo consumo del ESP32?",
            opcions: ["Deep Sleep", "Light Sleep", "Modem Sleep", "Todas las anteriores"],
            resposta: 3,
            feedback: "El ESP32 tiene múltiples perfiles de gestión de energía. El 'Deep Sleep' desactiva casi todo el chip ahorrando microamperios."
        }
    },
    {
        id: 44,
        ca: {
            pregunta: "Quin coprocessador de molt baix consum pot seguir actiu en l'ESP32 durant el Deep Sleep per monitoritzar sensors?",
            opcions: ["Coprocessador ULP", "Nucli Beta", "RTC Clock", "Módulo Core 0"],
            resposta: 0,
            feedback: "El coprocessador ULP (Ultra Low Power) pot executar instruccions de codi bàsiques de sensors mentre els nuclis principals dormen."
        },
        es: {
            pregunta: "¿Qué coprocesador de muy bajo consumo puede seguir activo en el ESP32 durante el Deep Sleep para monitorizar sensores?",
            opcions: ["Coprocesador ULP", "Núcleo Beta", "RTC Clock", "Módulo Core 0"],
            resposta: 0,
            feedback: "El coprocesador ULP (Ultra Low Power) puede ejecutar instrucciones de código básicas de sensores mientras los núcleos principales duermen."
        }
    },
    {
        id: 45,
        ca: {
            pregunta: "Què indica un valor de retorn '-1' quan intentes llegir el canal sèrie amb Serial.read()?",
            opcions: ["S'ha desconnectat el cable USB", "Que el buffer de lectura està buit i no hi ha dades disponibles", "Error de curtcircuit", "La velocitat de bauds és incorrecta"],
            resposta: 1,
            feedback: "Serial.read() retorna -1 quan s'executa si no s'ha rebut cap caràcter nou pel buffer sèrie."
        },
        es: {
            pregunta: "¿Qué indica un valor de retorno '-1' cuando intentas leer el canal serie con Serial.read()?",
            opcions: ["Se ha desconectado el cable USB", "Que el buffer de lectura está vacío y no hay datos disponibles", "Error de cortocircuito", "La velocidad de baudios es incorrecta"],
            resposta: 1,
            feedback: "Serial.read() devuelve -1 cuando se ejecuta si no se ha recibido ningún carácter nuevo por el buffer serie."
        }
    },
    {
        id: 46,
        ca: {
            pregunta: "Quina funció s'ha d'utilitzar abans de llegir el buffer sèrie amb Serial.read() per comprovar si hi ha bytes?",
            opcions: ["Serial.begin()", "Serial.available()", "Serial.listen()", "Serial.check()"],
            resposta: 1,
            feedback: "Serial.available() retorna el nombre de bytes guardats al buffer de recepció llestos per ser llegits sense bloquejar."
        },
        es: {
            pregunta: "¿Qué función debe utilizarse antes de leer el buffer serie con Serial.read() para comprobar si hay bytes?",
            opcions: ["Serial.begin()", "Serial.available()", "Serial.listen()", "Serial.check()"],
            resposta: 1,
            feedback: "Serial.available() devuelve el número de bytes guardados en el buffer de recepción listos para ser leídos sin bloquear."
        }
    },
    {
        id: 47,
        ca: {
            pregunta: "Quina estructura de hardware interna reinicia el microcontrolador si el codi es queda penjat en un bucle infinit bloquejant de forma imprevista?",
            opcions: ["Interruptor de paret", "Watchdog Timer (WDT)", "Coprocesador RTC", "Reset automàtic de compilació"],
            resposta: 1,
            feedback: "El temporitzador Watchdog (gos guardià) s'ha de reiniciar constantment pel codi. Si el codi es bloqueja, el WDT desborda i força un reset físic."
        },
        es: {
            pregunta: "¿Qué estructura de hardware interna reinicia el microcontrolador si el código se queda colgado en un bucle infinito bloqueante de forma imprevista?",
            opcions: ["Interruptor de pared", "Watchdog Timer (WDT)", "Coprocesador RTC", "Reset automático de compilación"],
            resposta: 1,
            feedback: "El temporizador Watchdog (perro guardián) debe ser reiniciado constantemente por el código. Si el código se bloquea, el WDT desborda y fuerza un reset físico."
        }
    },
    {
        id: 48,
        ca: {
            pregunta: "Quin element de programació avançat guarda l'adreça de memòria on resideix una altra variable?",
            opcions: ["Un array de dades", "Un punter (Pointer)", "Una constant de directiva", "Una funció buida"],
            resposta: 1,
            feedback: "Els punters (declarats amb asterisc, ex: int *p) contenen referències directes a adreces físiques de memòria RAM."
        },
        es: {
            pregunta: "¿Qué elemento de programación avanzado guarda la dirección de memoria donde reside otra variable?",
            opcions: ["Un array de datos", "Un puntero (Pointer)", "Una constante de directiva", "Una función vacía"],
            resposta: 1,
            feedback: "Los punteros (declarados con asterisco, ej: int *p) contienen referencias directas a direcciones físicas de memoria RAM."
        }
    },
    {
        id: 49,
        ca: {
            pregunta: "En l'entorn de programació d'Arduino / C++, què és una classe (Class)?",
            opcions: ["Una línia d'alumnes", "Una plantilla per instanciar objectes que agrupa variables i funcions", "Un tipus de variable per desar decimals", "Una directiva del preprocessador"],
            resposta: 1,
            feedback: "Una classe defineix l'estructura del paradigma de Programació Orientada a Objectes (POO) com es fa amb la classe 'Serial'."
        },
        es: {
            pregunta: "En el entorno de programación de Arduino / C++, ¿qué es una clase (Class)?",
            opcions: ["Una línea de alumnos", "Una plantilla para instanciar objetos que agrupa variables y funciones", "Un tipo de variable para guardar decimales", "Una directiva del preprocesador"],
            resposta: 1,
            feedback: "Una clase define la estructura del paradigma de Programación Orientada a Objetos (POO) tal como se hace con la clase 'Serial'."
        }
    },
    {
        id: 50,
        ca: {
            pregunta: "Quin protocol utilitza el framework d'ESP32 per allotjar serveis web locals interactius de forma asíncrona?",
            opcions: ["ESPAsyncWebServer", "Apache standard", "FTP Server.h", "Modbus TCP"],
            resposta: 0,
            feedback: "La llibreria ESPAsyncWebServer és molt eficient per crear servidors web ja que respon a peticions per esdeveniments sense col·lapsar el loop principal."
        },
        es: {
            pregunta: "¿Qué protocolo utiliza el framework de ESP32 para alojar servicios web locales interactivos de forma asíncrona?",
            opcions: ["ESPAsyncWebServer", "Apache standard", "FTP Server.h", "Modbus TCP"],
            resposta: 0,
            feedback: "La librería ESPAsyncWebServer es altamente eficiente para crear servidores web ya que responde a peticiones por eventos sin colapsar el loop principal."
        }
    }
];

// 3. APARTAT DE LÒGICA I CONTROL DEL QÜESTIONARI
let currentLanguage = "ca";
let currentQuizQuestions = [];
let currentQuestionIndex = 0;
let userScore = 0;
let userAnswers = []; // Desa objectes amb {preguntaObj, opcioSeleccionada, esCorrecta}

// Nodes del DOM
const langSelect = document.getElementById("lang-select");
const quizTitle = document.getElementById("quiz-title");
const langLabel = document.getElementById("lang-label");
const btnNext = document.getElementById("btn-next");
const progressBar = document.getElementById("progress-bar");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const quizCore = document.getElementById("quiz-core");
const resultsBox = document.getElementById("results-box");
const resultsTitle = document.getElementById("results-title");
const scoreText = document.getElementById("score-text");
const feedbackList = document.getElementById("feedback-list");
const btnRestart = document.getElementById("btn-restart");

// Inicialització en carregar la pàgina
window.addEventListener("DOMContentLoaded", () => {
    initQuiz();
    langSelect.addEventListener("change", handleLanguageChange);
    btnNext.addEventListener("click", handleNextClick);
    btnRestart.addEventListener("click", initQuiz);
});

// Funció per arrencar o reiniciar el qüestionari
function initQuiz() {
    userScore = 0;
    currentQuestionIndex = 0;
    userAnswers = [];
    
    // 10 Preguntes Aleatòries sense repetició
    currentQuizQuestions = selectRandomQuestions([...questionBank], 10);
    
    // Visibilitat de seccions
    resultsBox.classList.add("hidden");
    quizCore.classList.remove("hidden");
    
    updateInterfaceTexts();
    renderCurrentQuestion();
}

// Selecciona X elements d'un array barrejant-lo de forma aleatòria
function selectRandomQuestions(array, numberToSelect) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array.slice(0, numberToSelect);
}

// Actualitza els elements de text fixos del formulari HTML
function updateInterfaceTexts() {
    const txts = uiTexts[currentLanguage];
    quizTitle.textContent = txts.title;
    langLabel.textContent = txts.langLabel;
    resultsTitle.textContent = txts.resultsTitle;
    btnRestart.textContent = txts.restartBtn;
    updateNextButtonText();
}

function updateNextButtonText() {
    const txts = uiTexts[currentLanguage];
    if (currentQuestionIndex === currentQuizQuestions.length - 1) {
        btnNext.textContent = txts.finishBtn;
    } else {
        btnNext.textContent = txts.nextBtn;
    }
}

// Renderitza la pregunta de l'índex actiu
function renderCurrentQuestion() {
    const questionData = currentQuizQuestions[currentQuestionIndex][currentLanguage];
    
    // Actualitza text de la pregunta i barra de progrés
    questionText.textContent = `${currentQuestionIndex + 1}. ${questionData.pregunta}`;
    const progressPercent = (currentQuestionIndex / currentQuizQuestions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
    
    // Neteja opcions anteriors
    optionsContainer.innerHTML = "";
    
    // Injecta les noves opcions
    questionData.opcions.forEach((opcio, index) => {
        const label = document.createElement("label");
        label.className = "option-wrapper";
        
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "quiz-option";
        radio.value = index;
        
        label.appendChild(radio);
        label.appendChild(document.createTextNode(opcio));
        optionsContainer.appendChild(label);
    });
    
    updateNextButtonText();
}

// Execució del canvi d'idioma en calent
function handleLanguageChange(e) {
    currentLanguage = e.target.value;
    document.documentElement.lang = currentLanguage;
    updateInterfaceTexts();
    
    // Si estem en la pantalla de resultats recalculem el feedback, si no, la pregunta activa
    if (!resultsBox.classList.contains("hidden")) {
        renderResults();
    } else {
        renderCurrentQuestion();
    }
}

// Lògica d'avançament d'índex i càlcul intern
function handleNextClick() {
    const selectedRadio = document.querySelector('input[name="quiz-option"]:checked');
    
    // Validació que hi hagi una opció escollida
    if (!selectedRadio) {
        alert(currentLanguage === "ca" ? "Per favor, selecciona una opció abans de continuar." : "Por favor, selecciona una opción antes de continuar.");
        return;
    }
    
    const selectedAnswerIndex = parseInt(selectedRadio.value);
    const originalQuestionObj = currentQuizQuestions[currentQuestionIndex];
    const isCorrect = selectedAnswerIndex === originalQuestionObj[currentLanguage].resposta;
    
    if (isCorrect) {
        userScore++;
    }
    
    // Emmagatzema la tria per la revisió final posterior
    userAnswers.push({
        questionData: originalQuestionObj,
        selectedIndex: selectedAnswerIndex,
        correct: isCorrect
    });
    
    // Control de rutes de finalització
    if (currentQuestionIndex < currentQuizQuestions.length - 1) {
        currentQuestionIndex++;
        renderCurrentQuestion();
    } else {
        progressBar.style.width = "100%";
        renderResults();
    }
}

// Renderitzat de la llista de feedback explicatiu
function renderResults() {
    quizCore.classList.add("hidden");
    resultsBox.classList.remove("hidden");
    
    const txts = uiTexts[currentLanguage];
    
    // Reemplaçament dinàmic de variables de text
    let summary = txts.score
        .replace("{score}", userScore)
        .replace("{total}", currentQuizQuestions.length)
        .replace("{percent}", Math.round((userScore / currentQuizQuestions.length) * 100));
    
    scoreText.textContent = summary;
    feedbackList.innerHTML = "";
    
    // Construcció estructurada de la revisió per cada pregunta
    userAnswers.forEach((ans, index) => {
        const qLang = ans.questionData[currentLanguage];
        
        const itemDiv = document.createElement("div");
        itemDiv.className = `feedback-item ${ans.correct ? 'correct' : 'incorrect'}`;
        
        const qTitle = document.createElement("h3");
        qTitle.textContent = `${index + 1}. ${qLang.pregunta}`;
        itemDiv.appendChild(qTitle);
        
        const statusP = document.createElement("p");
        statusP.className = `p-status ${ans.correct ? 'ok' : 'fail'}`;
        statusP.textContent = ans.correct ? `✓ ${txts.correct}` : `✗ ${txts.incorrect}`;
        itemDiv.appendChild(statusP);
        
        const userAnsP = document.createElement("p");
        userAnsP.innerHTML = `<strong>${txts.yourRes}</strong> ${qLang.opcions[ans.selectedIndex]}`;
        itemDiv.appendChild(userAnsP);
        
        if (!ans.correct) {
            const correctAnsP = document.createElement("p");
            correctAnsP.innerHTML = `<strong>${txts.correctRes}</strong> ${qLang.opcions[qLang.resposta]}`;
            itemDiv.appendChild(correctAnsP);
        }
        
        const feedbackP = document.createElement("p");
        feedbackP.className = "feedback-text";
        feedbackP.innerHTML = `<strong>${txts.why}</strong> ${qLang.feedback}`;
        itemDiv.appendChild(feedbackP);
        
        feedbackList.appendChild(itemDiv);
    });
}