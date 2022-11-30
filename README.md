# Juegos En Red - Eclipsoft
Lautaro Berruezo, Gustavo Herrero, Óscar Alarcón y Jorge Sanz.

![eclipsoftlogo](https://user-images.githubusercontent.com/33161767/196520005-4d49a613-dd8f-48f9-af78-ef7ce9e73b78.png)


# Alterdune
![alterduneLogo](https://user-images.githubusercontent.com/33161767/196519763-778be354-fde8-4dbf-8819-bd833e4e3a9a.png)


## 1.Introducción
Este es el documento de diseño de “Alterdune”, un videojuego multijugador para PC basado en la obra indie de Toby Fox “Undertale”. Este documento tiene como finalidad representar la idea y las bases del juego; así como entender cómo funciona.

### 1.1. Concepto del juego
Alterdune es un juego multijugador de dos jugadores que consistirá en combates a muerte entre dos jugadores. En los combates se podrá atacar y esquivar al adversario. Se podrá escoger entre el bando de los humanos y el de los monstruos, pero sólo uno prevalecerá sobre el otro.

### 1.2. Género
El juego se compone de dos géneros principalmente:
RPG: es un género de videojuegos donde el jugador controla las acciones de un personaje inmerso en el mundo del juego. En Alterdune los jugadores podrán controlar las acciones de sus personajes en base al tipo que elijan.
Acción: son juegos dinámicos en los que el jugador depende de su velocidad de reacción y destreza. En Alterdune la acción está presente de manera constante ya que el juego es puro combate.

### 1.3. Propósito y público objetivo
El principal propósito de Eclipsoft con ALTERDUNE  es aprender a desarrollar un juego multijugador que nos ayude a aumentar nuestra experiencia como equipo de desarrollo de videojuegos y brindar a los jugadores la oportunidad de probar un juego multijugador con los combates clásicos de Undertale.

Alterdune tiene como objetivo llegar a todos los públicos, ya que busca ser un juego entretenido tanto visualmente como a nivel de jugabilidad. Por tanto las partidas serán cortas y dinámicas para poder disfrutar de combates fluidos y de todas las combinaciones de combatientes que este título nos ofrece.

### 1.4. Jugabilidad
Alterdune se divide únicamente en dos fases de juego, un laberinto por el que los jugadores deberán pasar y el combate, por tanto la jugabilidad se basa en dos sencillos elementos:
Movimiento: trás la cinemática principal los jugadores deberán recorrer un laberinto (cada uno por su lado) hasta encontrarse con el otro para comenzar la fase de combate.
Combate: una vez se encuentran los personajes pasan a combatir directamente, cada uno con sus respectivas habilidades.
Habilidades: centradas en ataques para los monstruos y esquives para los humanos. Dependiendo del tipo de humano o monstruo que escojas tendrás una serie de ataques u otros, los humanos también pueden optar a tener ataques o algún tipo de habilidades de curación, aguante, etc.

### 1.5. Estilo visual
El juego tendrá un estilo pixel art, sencillo y llamativo, con una paleta de colores cálidos y texturas simples. En el combate los colores tendrán un gran papel, ya que con ellos se diferenciarán las acciones.

### 1.6. Alcance 
El objetivo principal es desarrollar un juego sencillo y divertido, que sea dinámico y entretenido para los jugadores. La idea principal es meter pocos personajes pero que se puedan añadir más en un futuro, para dar más diversidad y duración al juego.

## 2. Mecánicas de juego
En esta sección entraremos en detalles en las mecánicas de Alterdune. Se explicarán las bases jugables y se detallarán las acciones que podrá llevar a cabo el jugador (tanto el protagonista como el enemigo). 

### 2.1. Jugabilidad
Nivel: Alterdune consta de un nivel donde se enfrentarán los dos jugadores. Uno controlará al humano (3 clases a elegir) y otro controlará al enemigo (3 clases a elegir). El nivel comenzará en un laberinto en el desierto. Los dos jugadores deberán encontrarse en el centro del laberinto para después de un diálogo comenzar la batalla. Durante el combate, el protagonista deberá esquivar los ataques que le lance el enemigo y en cada turno en el que no reciba daño quitará vida al enemigo. La batalla acabará en el momento que uno de los dos pierda toda su vida. Después de un diálogo final entre los dos personajes acabará el nivel. 

Intensidad: La dificultad de Alterdune viene dada por la habilidad de cada jugador debido a ser un combate entre estos dos. El humano deberá ser capaz de esquivar los ataques del enemigo y el enemigo deberá ser capaz de acertar con sus ataques. 

Clases: Las tres diferentes clases de humano y las 3 diferentes clases de monstruos permiten a cada jugador escoger su estilo de juego. El jugador humano podrá escoger entre la clase defensiva, la clase agresiva y la clase híbrida. El enemigo también podrá escoger entre los diferentes monstruos. Cada clase tiene sus características especiales. 

Planificación de la batalla: Debido a los diferentes tipos de clases los jugadores deberán ser capaces de adaptar su estilo de juego según la clase que escojan y contra la que deban jugar. 

### 2.2. Flujo de juego
Nuestro juego multijugador funcionará en partidas en las que solo pueden participar 2 jugadores, a los cuales se les da un alma a las que les pueden poner un color y un nombre. 
Las almas aparecen en un mismo punto dentro de una pirámide y tendrán que competir para ver cual de ellas llega primero al centro, pasando trampas y algunos otros peligros.
El alma que primero llegue al centro podrá transformarse en un monstruo poderoso mientras que la otra alma se convertirá en humano. Después de un breve diálogo entre ellas tendrán que combatir y el que gane la pelea gana la partida.

### 2.3. Personajes
El juego tendrá un total de 3 personajes (3 monstruos y 3 humanos) y todos serán igual de protagonistas, pues las almas podrán elegir clases para lo que se vayan a transformar. 
Cada monstruo y cada humano tendrá sus respectivas diferencias en aspecto y características de combate. 
Humanos:
Unai Híbrido
Eusebio Defensivo
Luis Angel Ofensivo
Monstruo:
Ophidian
Forgotten
??? 

### 2.4. Movimientos e interacciones
El movimiento será el simple movimiento de un juego RPG, el personaje que se controle podrá moverse hacia arriba, abajo, derecha e izquierda.
Habrá algún que otro puzzle antes de llegar al centro del mapa por lo que el personaje que se esté controlando tendrá que interactuar con ciertos obstáculos en su entorno para llegar al final.

## 3. Interfaz

### 3.1 Diagrama de flujo
El siguiente diagrama de estados muestra las pantallas presentes a lo largo de Alterdune y las transiciones entre ellas. En puntos posteriores nos centraremos en ellas detenidamente.
![int1](https://user-images.githubusercontent.com/33161767/196520246-2039ddc8-a869-40d9-b004-62f94b6ff53c.png)

### 3.2 Menú principal
![int2](https://user-images.githubusercontent.com/33161767/196520724-578c1b91-21fe-492d-919c-e724fbbce74d.png)

##### Botones

Botón jugar: al ser pulsado lleva a la interfaz Selección de personaje.

Botón salir: al ser pulsado lleva al sistema operativo.

Transición fundido a negro.

![int3](https://user-images.githubusercontent.com/33161767/196520790-37f1e215-4f49-42d6-886a-b839ec8b1479.png)

##### Botones

Botón jugador 1: Al ser pulsado se debe seleccionar el personaje a ser jugado.

Botón jugador 2: Al ser pulsado se debe seleccionar el personaje a ser jugado.

Botón aceptar: Al ser pulsado lleva a la interfaz de Laberinto. Uso de transición de tipo cinemática, en la que se presenta el escenario en cuestión.

Botón Volver: Al ser pulsado lleva a la interfaz de Menú principal. Uso de transición de fundido a negro.

### 3.3 Interfaz Laberinto
![int4](https://user-images.githubusercontent.com/33161767/196520844-dc7ad65e-a997-4e95-a042-fd800f962057.png)

##### Botones

Entrada por teclado.

Cuando uno de los jugadores llega al centro, se produce una transición a la interfaz de combate de tipo cinemática; en la cual se muestran a los combatientes y el cambio de escenario.

3.4 Interfaz Combate
![int5](https://user-images.githubusercontent.com/33161767/196520921-8cb1da9e-df16-4009-8c55-98aa3dcd5e94.png)

##### Botones

Entrada por teclado.

Al finalizar la partida vuelve a la pantalla de selección de personaje con una cinemática de fundido a negro.



## 4. Arte
La estética de Alterdune va a tomar como referencia la de otro videojuego llamado Undertale pero tendrá colores más vivos y cálidos. Todo teniendo en cuenta que el espacio del juego será en un bioma desértico y caluroso.
El arte del juego va a ser enteramente en pixel art y estará basado generalmente en la imagen de título de abajo.
Todo el arte del videojuego va a ser realizado con la herramienta Aseprite para pixel art.

Por ahora el equipo de desarrollo posee sprites para las almas y un pequeño fondo para el menú: 

![fondo](https://user-images.githubusercontent.com/33161767/196521463-3bf29a3c-6443-4cb9-b155-3cd84ca6b2df.png)

A la izquierda está lo que sería el sprite para las almas. Este se podrá elegir de distintos colores, pero el naranja será el predeterminado.


### 4.1. Arte 2D
##### Los elementos que se querrán utilizar en el juego serán:

Mapa base 2d visto desde arriba basado en un sitio desértico

Varios personajes humanos en pixel art (con su modo de combate)

Varios personajes monstruos en pixel art (con sus ataques)

Fondo de menu principal
![sprite](https://user-images.githubusercontent.com/33161767/196521554-f510c594-6347-4ffe-83db-b6559f992f65.png)


### 4.2. Audio
##### Elementos auditivos que se necesitarán son:

Sonido de daño recibido

Sonido de daño causado 

Sonidos de ataques

Música para las batallas y de fondo

Sonidos varios para fuera de combate (hablar con personajes, eventos, etc)



## 5. Escenas programadas:
Las escenas de las que el juego consta son 6, y se dividen en 3 grupos de 2: de interfaz, de jugabilidad y de información.
### 5.1 Escenas de interfaz
La interfaz es la primera pantalla en ser mostrada, y en ella se pudede sellecionar botones que desencadearán distitas funcionalidades. Esta interfaz ha sido implementada mediante el uso de botones y sus funciones. Al pulsar se muestran créditos (animaciones), se muestra información (controles) o se dirige a dos escenas destino. Al pulsar seleccioón de personaje lleva a la segunda escena de interfaz, donde se podrá elegir el personaje de los dos jugadores. Al pulsar jugar comienzan las escenas de jugabilidad.
### 5.2 Escenas de jugabilidad.
La primera escena se basa en la entrada al laberinto de ambos personajes. Esta escena ha sido implementada mediante la codificación de la cámara: solo permite avanzar a la dercha (al templo). Los cambios de pantalla por posición se han logrado mediante la detección de colisión de los personajes con un sprite invisible, colocado en posiciones idóneas. Al entrar al laberinto, se carga la segunda escana de jugabilidad donde se pueden observar muros y trampas. Esta escena se ha implementado mediante el zoom de la cámara (para impedir la visión al laberinto), la creación de un grupo de sprites con físicas estáticas y sus respectivas detecciones de colisiones con los jugadores, y la creación de las trampas (mismo método que con los muros). La diferencia entre los mueros y las trampas es elmétodo que desencadena cada uno. Los muros implementa actuúan como objetos inamovibles; mientras que las trampas devuelven a la posición incial y añaden color a los jugadores. Si se detectta 3 veces la colisión, se termina el juego (escena informativa de Game over). Sin embargo, si se consigue llegar al final, llevará a una escena informativa de continuará.
### 5.2 Escenas de información.
Son muy parecidas a las de interfaz, pero con menos funcionalidades. Se distiguen 2: de Gameover y de Continuará. Ambas tienen dos botones de volver al menú principal.
