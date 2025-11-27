import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'login.page.title': {
    id: 'login.page.title',
    defaultMessage: 'Iniciar sesión | {siteName}',
    description: 'título de la página de inicio de sesión',
  },
  // Login labels
  'login.user.identity.label': {
    id: 'login.user.identity.label',
    defaultMessage: 'Nombre de usuario o correo electrónico',
    description: 'Etiqueta para el campo de identidad del usuario para ingresar nombre de usuario o correo electrónico para iniciar sesión',
  },
  'login.password.label': {
    id: 'login.password.label',
    defaultMessage: 'Contraseña',
    description: 'Etiqueta para el campo de contraseña',
  },
  'sign.in.button': {
    id: 'sign.in.button',
    defaultMessage: 'Iniciar sesión',
    description: 'Etiqueta del botón de inicio de sesión que aparece en la página de inicio de sesión',
  },
  'forgot.password': {
    id: 'forgot.password',
    defaultMessage: '¿Olvidaste tu contraseña?',
    description: 'Texto del botón para contraseña olvidada',
  },
  'institution.login.button': {
    id: 'institution.login.button',
    defaultMessage: 'Credenciales de institución/campus',
    description: 'muestra la lista de instituciones',
  },
  'institution.login.page.title': {
    id: 'institution.login.page.title',
    defaultMessage: 'Iniciar sesión con credenciales de institución/campus',
    description: 'Encabezado de la página de institución',
  },
  'institution.login.page.sub.heading': {
    id: 'institution.login.page.sub.heading',
    defaultMessage: 'Elige tu institución de la lista a continuación',
    description: 'Encabezado de la lista de instituciones',
  },
  'non.compliant.password.title': {
    id: 'non.compliant.password.title',
    defaultMessage: 'Recientemente cambiamos nuestros requisitos de contraseña',
    description: 'Un título que aparece en negrita antes del mensaje de error para contraseña no conforme',
  },
  'non.compliant.password.message': {
    id: 'non.compliant.password.message',
    defaultMessage: 'Tu contraseña actual no cumple con los nuevos requisitos de seguridad. '
                    + 'Acabamos de enviar un mensaje de restablecimiento de contraseña a la dirección de correo electrónico asociada con esta cuenta. '
                    + 'Gracias por ayudarnos a mantener tus datos seguros.',
    description: 'Mensaje de error para contraseña no conforme',
  },
  'account.locked.out.message.1': {
    id: 'account.locked.out.message.1',
    defaultMessage: 'Para proteger tu cuenta, ha sido bloqueada temporalmente. Inténtalo de nuevo en 30 minutos.',
    description: 'Parte del mensaje para cuando la cuenta de usuario ha sido bloqueada después de múltiples intentos fallidos de inicio de sesión',
  },
  'username.or.email.format.validation.less.chars.message': {
    id: 'username.or.email.format.validation.less.chars.message',
    defaultMessage: 'El nombre de usuario o correo electrónico debe tener al menos 2 caracteres.',
    description: 'Mensaje de validación que aparece cuando el nombre de usuario o la dirección de correo electrónico tiene menos de 2 caracteres',
  },
  'email.validation.message': {
    id: 'email.validation.message',
    defaultMessage: 'Ingresa tu nombre de usuario o correo electrónico',
    description: 'Mensaje de validación que aparece cuando el correo electrónico está vacío',
  },
  'password.validation.message': {
    id: 'password.validation.message',
    defaultMessage: 'Ingresa tu contraseña',
    description: 'Mensaje de validación que aparece cuando la contraseña está vacía',
  },
  // Account Activation Strings
  'account.activation.success.message.title': {
    id: 'account.activation.success.message.title',
    defaultMessage: '¡Éxito! Has activado tu cuenta.',
    description: 'Título del mensaje de éxito de activación de cuenta',
  },
  'account.activation.success.message': {
    id: 'account.activation.success.message',
    defaultMessage: 'Ahora recibirás actualizaciones por correo electrónico y alertas de nosotros relacionadas con los cursos en los que estás inscrito. Inicia sesión para continuar.',
    description: 'Mensaje mostrado a los estudiantes cuando su cuenta ha sido activada exitosamente',
  },
  'account.activation.info.message': {
    id: 'account.activation.info.message',
    defaultMessage: 'Esta cuenta ya ha sido activada.',
    description: 'Mensaje mostrado cuando la cuenta del estudiante ya ha sido activada',
  },
  'account.activation.error.message.title': {
    id: 'account.activation.error.message.title',
    defaultMessage: 'Tu cuenta no pudo ser activada',
    description: 'Título del mensaje de error de activación de cuenta',
  },
  'account.activation.support.link': {
    id: 'account.activation.support.link',
    defaultMessage: 'contactar soporte',
    description: 'Texto del enlace usado en el mensaje de error de activación de cuenta para ir al centro de ayuda del estudiante',
  },
  // Email Confirmation Strings
  'account.confirmation.success.message.title': {
    id: 'account.confirmation.success.message.title',
    defaultMessage: '¡Éxito! Has confirmado tu correo electrónico.',
    description: 'Título del mensaje de éxito de verificación de cuenta',
  },
  'account.confirmation.success.message': {
    id: 'account.confirmation.success.message',
    defaultMessage: 'Inicia sesión para continuar.',
    description: 'Mensaje mostrado a los estudiantes cuando su cuenta ha sido activada exitosamente',
  },
  'account.confirmation.info.message': {
    id: 'account.confirmation.info.message',
    defaultMessage: 'Este correo electrónico ya ha sido confirmado.',
    description: 'Mensaje mostrado cuando la cuenta del estudiante ya ha sido verificada',
  },
  'account.confirmation.error.message.title': {
    id: 'account.confirmation.error.message.title',
    defaultMessage: 'Tu correo electrónico no pudo ser confirmado',
    description: 'Título del mensaje de error de verificación de cuenta',
  },
  'tpa.account.link': {
    id: 'tpa.account.link',
    defaultMessage: 'cuenta de {provider}',
    description: 'Texto del enlace del mensaje de error usado para ir al SSO cuando el usuario del personal intenta iniciar sesión con contraseña.',
  },
  'internal.server.error.message': {
    id: 'internal.server.error.message',
    defaultMessage: 'Ha ocurrido un error. Intenta recargar la página o verifica tu conexión a internet.',
    description: 'Mensaje de error que aparece cuando el servidor responde con código de error 500',
  },
  'login.rate.limit.reached.message': {
    id: 'login.rate.limit.reached.message',
    defaultMessage: 'Demasiados intentos fallidos de inicio de sesión. Inténtalo de nuevo más tarde.',
    description: 'Mensaje de error que aparece cuando un usuario anónimo ha realizado demasiados intentos fallidos de inicio de sesión',
  },
  'login.failure.header.title': {
    id: 'login.failure.header.title',
    defaultMessage: 'No pudimos iniciar tu sesión.',
    description: 'Mensaje de encabezado de fallo de inicio de sesión.',
  },
  'contact.support.link': {
    id: 'contact.support.link',
    defaultMessage: 'contactar al soporte de {platformName}',
    description: 'Texto del enlace usado en el mensaje de error de usuario inactivo para ir al centro de ayuda del estudiante',
  },
  'login.incorrect.credentials.error': {
    id: 'login.incorrect.credentials.error',
    defaultMessage: 'El nombre de usuario, correo electrónico o contraseña que ingresaste es incorrecto. Por favor inténtalo de nuevo.',
    description: 'Mensaje de error para correo electrónico o contraseña incorrectos',
  },
  'login.form.invalid.error.message': {
    id: 'login.form.invalid.error.message',
    defaultMessage: 'Por favor completa los campos a continuación.',
    description: 'Mensaje de usuario de entrada vacía del formulario de inicio de sesión',
  },
  'login.incorrect.credentials.error.reset.link.text': {
    id: 'login.incorrect.credentials.error.reset.link.text',
    defaultMessage: 'restablecer tu contraseña',
    description: 'Texto del enlace de restablecimiento de contraseña para credenciales de correo electrónico o contraseña incorrectas',
  },
  'login.incorrect.credentials.error.before.account.blocked.text': {
    id: 'login.incorrect.credentials.error.before.account.blocked.text',
    defaultMessage: 'haz clic aquí para restablecerla.',
    description: 'Texto del enlace de restablecimiento de contraseña para credenciales de correo electrónico o contraseña incorrectas antes de bloquear la cuenta',
  },
  // Vulnerable password change prompt
  'password.security.nudge.title': {
    id: 'password.security.nudge.title',
    defaultMessage: 'Seguridad de la contraseña',
    description: 'Título para el aviso que insta al usuario a cambiar su contraseña vulnerable',
  },
  'password.security.block.title': {
    id: 'password.security.block.title',
    defaultMessage: 'Cambio de contraseña requerido',
    description: 'Título para el aviso que pide al usuario cambiar su contraseña vulnerable',
  },
  'password.security.nudge.body': {
    id: 'password.security.nudge.body',
    defaultMessage: 'Nuestro sistema detectó que tu contraseña es vulnerable. '
                    + 'Te recomendamos cambiarla para que tu cuenta permanezca segura.',
    description: 'Copia del mensaje para el aviso que insta al usuario a cambiar su contraseña vulnerable',
  },
  'password.security.block.body': {
    id: 'password.security.block.body',
    defaultMessage: 'Nuestro sistema detectó que tu contraseña es vulnerable. '
                    + 'Cambia tu contraseña para que tu cuenta permanezca segura.',
    description: 'Copia del mensaje para el aviso que pide al usuario cambiar su contraseña vulnerable',
  },
  'password.security.close.button': {
    id: 'password.security.close.button',
    defaultMessage: 'Cerrar',
    description: 'Botón para cerrar la ventana emergente',
  },
  'password.security.redirect.to.reset.password.button': {
    id: 'password.security.redirect.to.reset.password.button',
    defaultMessage: 'Restablecer tu contraseña',
    description: 'Botón para redirigir a los usuarios a la página de restablecimiento de contraseña',
  },
  'login.tpa.authentication.failure': {
    id: 'login.tpa.authentication.failure',
    defaultMessage: 'Lo sentimos, no estás autorizado para acceder a {platform_name} a través de este canal. '
        + 'Por favor contacta a tu administrador de aprendizaje o gerente para acceder a {platform_name}.'
        + '{lineBreak}{lineBreak}Detalles del error:{lineBreak}{errorMessage}',
    description: 'Mensaje de error cuando falla la tubería de autenticación de terceros',
  },
});

export default messages;
