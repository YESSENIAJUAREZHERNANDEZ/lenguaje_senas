// notificationFunctions.js

// Función para solicitar permiso para enviar notificaciones
function requestNotificationPermission() {
  Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
      console.log('Permiso concedido para enviar notificaciones.');
    } else {
      console.log('Permiso para enviar notificaciones denegado.');
    }
  });
}

// Función para enviar una notificación
function sendNotification() {
  if (Notification.permission === 'granted') {
    new Notification('¡Hola!', {
      body: 'Esta es una notificación de prueba.'
    });

    if ('setAppBadge' in navigator) {
      navigator.setAppBadge(42)
        .then(() => {
          console.log("El distintivo se estableció correctamente");
        })
        .catch(e => {
          console.error("Error al establecer el distintivo", e);
        });
    } else {
      console.log("La función navigator.setAppBadge() no está soportada en este navegador.");
    }
  } else {
    console.log('El permiso para enviar notificaciones no ha sido concedido.');
  }
}
