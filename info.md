---
layout: page
title: "Información"
permalink: /info/
---

# <span class="fa fa-music"></span> Blog/Radio 

Aquí iremos subiremos información sobre la radio y blog. Todo el mundo está invitado a participar en la radio. Poco a poco iremos escribiendo documentación para explicaros con que y de que manera podéis contribuir.

# <span class="fa fa-envelope-o"></span> Contacto 
Si quieres contactar con nosotros, puedes enviarnos un correo electrónico a [radioemision@insiberia.net](mailto:radioemision@insiberia.net).
¡Estamos esperando tus ideas y colaboraciones!


# <span class="fa fa-linux"></span> Software libre 

Esta web y la radio utiliza exclusivamente software libre:
- El sistema operativo del servidor es [Arch Linux](https://www.archlinux.org/){:target="blank"}.
- El servidor web es [nginx](https://www.nginx.com/){:target="blank"}.
- La web está construida con [jekyll](https://jekyllrb.com/){:target="blank"}.
- La radio usa [mpd](https://www.musicpd.org/) para reproducir la música y [icecast](https://www.icecast.org/){:target="blank"} para el streaming.
- Los reproductores de audio de la web están hechos con [amplitude.js](https://521dimensions.com/open-source/amplitudejs){:target="blank"}.
- Los iconos son [Fork Awesome](https://forkaweso.me/Fork-Awesome/){:target="blank"}.

# <span class="fa fa-database"></span> Datos y privacidad

Almacenamos la menor información posible de nuestros usuarios. Ahora mismo se están guardando los [logs predefinidos de nginx](http://nginx.org/en/docs/http/ngx_http_log_module.html){:target="blank"} y una estadística del número de oyentes (sólo el número). En cuanto tenga tiempo de investigar el tema reduciré la información que captura nginx. ¡Se agradecen recomendaciones y/o sugerencias!

# <span class="fa fa-list-ul"></span> Ideas y tareas pendientes

- Newsletter (rss).
- Mejorar los reproductores: ~~control de volumen~~ y posición.
- Ajustes de diseño de la web
- ~~Chat abajo del reproductor streaming.~~ Supone muchas complicaciones.
- Escribir documentación:
  - Cómo participar en la radio. Se pueden grabar programas, escribir artículos en el blog, ayudar con la programación...
  - Cómo grabar un programa. Dejo aquí el boceto:
    - Software: Para hacer el programa, te recomendamos que lo grabes con la aplicación de software libre Audacity, que la puedes descargar [en su página](https://audacity.es/). Aquí tienes un [tutorial](https://invidio.us/watch?v=qToqbeZ4xqk) bastante completo.
    - Duración: Si tu formato es de media hora, que sean 29 minutos justos, y en cambio si es de una hora, que sean 59 justos. Esto es importante para poder programar todo sin que sea un lío tremendo, dejando un minuto para las cortinillas. Y procura también que acabe más o menos justito, que no haya muchos segundos de silencio al final del archivo.
    - Formato: El formato en el que se reproducen los archivos en el streaming es MP3, así que mándanoslo si puedes, en MP3, preferiblemente 320kbps. El Audacity no tiene por defecto el plugin para el MP3, así que puedes o instalarte el plugin o mandárnoslo en wav.  Este archivo será el mismo que pongamos en el podcast.
    - Nombre y descripción:  Necesitamos un nombre y una breve descripción del programa, así como un nombre y una breve descripción del episodio. Las descripciones son para cuando publiquemos los podcast, pero si no te apetece describir nada pues no pondremos nada, jaja.
    - Volumen: Es importante que el volumen de el programa esté bastante igualado, incluyendo tanto a las canciones como a tu voz, que debería estar alta y clara.
    - Confirmación y envío: Esta parte es muy importante. Consta de dos fases: confirmación y envío de archivo. Cuanto antes nos confirmes mejor, así vamos organizando la programación. Cómo último día para confirmar de cara al fin de semana es el miércoles, y el último día para enviarnos el archivo de audio es el jueves por la noche. Fuera de plazo seguramente se pase todo a la siguiente semana.

  
  - Cómo emitir en directo.
  - Cómo hacer una radio online.
- Hacer un formulario de envío que permita automatizar todo:      
    - Que ponga la fecha y hora del programa para que se vaya creando automáticamente una lista de reproducción en, quizás, ncmpcmcmppcmpcppcc, o al menos que se ordene en un directorio del servidor para que nos sea quasi-automático montarlo. Para esto quizás que cambie el nombre del archivo a Año-mes-día-hora de emisión (?)
    - Que ponga una descripción del programa para que se cree una página automática del programa con el archivo de podcast del programa.
    - Molaría que también se añadiese el podcast automáticamente al terminar la fecha de emisión
    - Para todo esto la parrilla tiene que estar montada de antes, claro, lo cual no se si es lo mejor. Además hay que confiar en que la gente que confirma nos envía el programa.
- Hacer página con todos los podcast, hacer página con todos los programas, hacer página para cada programa. Evidentemente esto hay que conseguir hacerlo automático
- Establecer un canal de comunicación.
- Algún documento o sitio donde ir poniendo la gente que ha confirmado...
- Hacer una página de cómo puedes colaborar..
