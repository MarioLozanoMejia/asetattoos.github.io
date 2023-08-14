document.addEventListener('DOMContentLoaded', function() {
    const chatBody = document.getElementById('chat-body');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
  
    function addBotMessage(message) {
      const botMessage = document.createElement('div');
      botMessage.classList.add('chat-message', 'bot');
      botMessage.textContent = message;
      chatBody.appendChild(botMessage);
    }
  
    function userSendMessage() {
      const userMessage = userInput.value.trim();
      if (userMessage !== '') {
        const userChatMessage = document.createElement('div');
        userChatMessage.classList.add('chat-message', 'user');
        userChatMessage.textContent = userMessage;
        chatBody.appendChild(userChatMessage);
        userInput.value = '';
  
        // Respuestas automáticas del bot
        switch (userMessage.toLowerCase()) {
          case '¿cuánto tiempo tarda en sanar un tatuaje?':
            addBotMessage('El tiempo de curación de un tatuaje puede variar, pero generalmente lleva de 2 a 4 semanas. Durante este período, es esencial mantenerlo limpio y seguir las instrucciones de cuidado proporcionadas por el tatuador para obtener los mejores resultados.');
            break;
  
          case '¿cuáles son los cuidados posteriores recomendados para un tatuaje recién hecho?':
            addBotMessage('Después de hacerse un tatuaje, es fundamental mantenerlo limpio y humectado para evitar infecciones y mejorar la cicatrización. Los cuidados incluyen lavar el tatuaje con agua y jabón suave, aplicar una crema recomendada por el tatuador y evitar rascar o exponerlo a la luz solar directa durante el proceso de curación.');
            break;
  
          case '¿qué debo considerar antes de decidirme por un diseño de tatuaje permanente?':
            addBotMessage('Antes de elegir un diseño de tatuaje permanente, es esencial tomar el tiempo para reflexionar sobre su significado y relevancia en su vida. Asegúrate de seleccionar un diseño que realmente te represente y que estés seguro de que te gustará a lo largo del tiempo.');
            break;
  
          case '¿cuál es la edad mínima para hacerse un tatuaje?':
            addBotMessage('En muchos lugares, la edad mínima legal para hacerse un tatuaje sin el consentimiento de los padres o tutores es de 18 años. Algunos estudios de tatuajes pueden requerir una edad aún mayor para realizar el procedimiento.');
            break;
  
          case '¿es doloroso hacerse un tatuaje?':
            addBotMessage('La sensación de dolor varía según la persona y la ubicación del tatuaje. Algunas áreas del cuerpo pueden ser más sensibles que otras. Aunque el proceso puede ser incómodo, muchos describen la sensación como soportable y similar a una leve quemadura o rasguño.');
            break;
  
          case '¿cuánto cuesta hacerse un tatuaje?':
            addBotMessage('El costo de un tatuaje depende del tamaño, la complejidad del diseño y la reputación del tatuador. Los precios pueden variar ampliamente, por lo que es recomendable consultar con varios estudios de tatuajes para obtener presupuestos precisos.');
            break;
  
          case '¿es seguro hacerse un tatuaje durante el embarazo?':
            addBotMessage('La mayoría de los profesionales del tatuaje desaconsejan hacerse un tatuaje durante el embarazo debido a los cambios hormonales y las posibles complicaciones de la cicatrización. Es mejor esperar hasta después del embarazo para evitar riesgos innecesarios.');
            break;
  
          default:
            addBotMessage('Lo siento, no entiendo tu pregunta. Por favor, intenta otra vez o contáctanos para obtener más información.');
            break;
        }
      }
    }
  
    sendButton.addEventListener('click', userSendMessage);
    userInput.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        userSendMessage();
      }
    });
  });
  