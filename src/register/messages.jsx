import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'register.page.title': {
    id: 'register.page.title',
    defaultMessage: 'Registrarse | {siteName}',
    description: 'título de la página de registro',
  },
  // Field labels
  'registration.fullname.label': {
    id: 'registration.fullname.label',
    defaultMessage: 'Nombre completo',
    description: 'Etiqueta que aparece sobre el campo de nombre completo',
  },
  'registration.email.label': {
    id: 'registration.email.label',
    defaultMessage: 'Correo electrónico',
    description: 'Etiqueta que aparece sobre el campo de correo electrónico en la página de registro',
  },
  'registration.username.label': {
    id: 'registration.username.label',
    defaultMessage: 'Nombre de usuario público',
    description: 'Etiqueta que aparece sobre el campo de nombre de usuario',
  },
  'registration.password.label': {
    id: 'registration.password.label',
    defaultMessage: 'Contraseña',
    description: 'Etiqueta que aparece sobre el campo de contraseña',
  },
  'registration.country.label': {
    id: 'registration.country.label',
    defaultMessage: 'País/Región',
    description: 'Marcador de posición para el menú desplegable de opciones de país.',
  },
  'registration.opt.in.label': {
    id: 'registration.opt.in.label',
    defaultMessage: 'Acepto que {siteName} me envíe mensajes de marketing.',
    description: 'Texto para la opción de suscripción en la página de registro.',
  },
  // Help text
  'help.text.name': {
    id: 'help.text.name',
    defaultMessage: 'Este nombre se utilizará en cualquier certificado que obtengas.',
    description: 'Texto de ayuda para el campo de nombre completo en la página de registro',
  },
  'help.text.username.1': {
    id: 'help.text.username.1',
    defaultMessage: 'El nombre que te identificará en tus cursos.',
    description: 'Parte del texto de ayuda para el campo de nombre de usuario en la página de registro',
  },
  'help.text.username.2': {
    id: 'help.text.username.2',
    defaultMessage: 'Esto no se puede cambiar más tarde.',
    description: 'Parte del texto de ayuda para el campo de nombre de usuario en la página de registro',
  },
  'help.text.email': {
    id: 'help.text.email',
    defaultMessage: 'Para activación de cuenta y actualizaciones importantes',
    description: 'Texto de ayuda para el campo de correo electrónico en la página de registro',
  },
  // Form buttons
  'create.account.for.free.button': {
    id: 'create.account.for.free.button',
    defaultMessage: 'Crear una cuenta gratis',
    description: 'Texto de la etiqueta para el botón de envío del formulario de registro',
  },
  'create.account.cta.button': {
    id: 'create.account.cta.button',
    defaultMessage: '{label}',
    description: 'Texto de la etiqueta para el botón de envío del formulario de registro para aquellos usuarios que llegan a través de redirecciones',
  },
  // Institution login
  'register.institution.login.page.title': {
    id: 'register.institution.login.page.title',
    defaultMessage: 'Registrarse con credenciales de institución/campus',
    description: 'Encabezado de la página de la institución',
  },
  // Validation messages
  'empty.name.field.error': {
    id: 'empty.name.field.error',
    defaultMessage: 'Ingresa tu nombre completo',
    description: 'Mensaje de error para el campo de nombre completo vacío',
  },
  'empty.email.field.error': {
    id: 'empty.email.field.error',
    defaultMessage: 'Ingresa tu correo electrónico',
    description: 'Mensaje de error para el campo de correo electrónico vacío',
  },
  'empty.username.field.error': {
    id: 'empty.username.field.error',
    defaultMessage: 'El nombre de usuario debe tener entre 2 y 30 caracteres',
    description: 'Mensaje de error para el campo de nombre de usuario vacío',
  },
  'empty.password.field.error': {
    id: 'empty.password.field.error',
    defaultMessage: 'No se han cumplido los criterios de la contraseña',
    description: 'Mensaje de error para el campo de contraseña vacío',
  },
  'empty.country.field.error': {
    id: 'empty.country.field.error',
    defaultMessage: 'Selecciona tu país o región de residencia',
    description: 'Mensaje de error cuando no se selecciona ningún país/región',
  },
  'invalid.country.field.error': {
    id: 'invalid.country.field.error',
    defaultMessage: 'El país debe coincidir con una opción disponible en el menú desplegable.',
    description: 'Mensaje de error cuando el país no es válido',
  },
  'email.do.not.match': {
    id: 'email.do.not.match',
    defaultMessage: 'Las direcciones de correo electrónico no coinciden.',
    description: 'El correo electrónico no coincide para confirmar el correo electrónico',
  },
  'email.invalid.format.error': {
    id: 'email.invalid.format.error',
    defaultMessage: 'Ingresa una dirección de correo válida',
    description: 'Error de validación para dirección de correo electrónico no válida',
  },
  'username.validation.message': {
    id: 'username.validation.message',
    defaultMessage: 'El nombre de usuario debe tener entre 2 y 30 caracteres',
    description: 'Mensaje de error para el campo de nombre de usuario vacío',
  },
  'name.validation.message': {
    id: 'name.validation.message',
    defaultMessage: 'Ingresa un nombre válido',
    description: 'Mensaje de validación que aparece cuando el nombre completo contiene URL',
  },
  'password.validation.message': {
    id: 'password.validation.message',
    defaultMessage: 'No se han cumplido los criterios de la contraseña',
    description: 'Mensaje de error para contraseña vacía o no válida',
  },
  'username.format.validation.message': {
    id: 'username.format.validation.message',
    defaultMessage: 'Los nombres de usuario solo pueden contener letras (A-Z, a-z), números (0-9), guiones bajos (_) y guiones (-). Los nombres de usuario no pueden contener espacios',
    description: 'Mensaje de validación que aparece cuando el formato del nombre de usuario no es válido',
  },
  // Error messages
  'registration.request.failure.header': {
    id: 'registration.request.failure.header',
    defaultMessage: 'No pudimos crear tu cuenta.',
    description: 'mensaje de error cuando falla el registro.',
  },
  'registration.empty.form.submission.error': {
    id: 'registration.empty.form.submission.error',
    defaultMessage: 'Por favor revisa tus respuestas e intenta de nuevo.',
    description: 'Mensaje de error que aparece en la parte superior del formulario cuando se envía un formulario vacío',
  },
  'registration.request.server.error': {
    id: 'registration.request.server.error',
    defaultMessage: 'Ha ocurrido un error. Intenta refrescar la página o verifica tu conexión a internet.',
    description: 'Mensaje de error para error interno del servidor.',
  },
  'registration.rate.limit.error': {
    id: 'registration.rate.limit.error',
    defaultMessage: 'Demasiados intentos fallidos de registro. Intenta de nuevo más tarde.',
    description: 'Mensaje de error que aparece cuando un usuario anónimo ha realizado demasiados intentos fallidos de registro',
  },
  'registration.tpa.session.expired': {
    id: 'registration.tpa.session.expired',
    defaultMessage: 'El registro usando {provider} ha expirado.',
    description: '',
  },
  'registration.tpa.authentication.failure': {
    id: 'registration.tpa.authentication.failure',
    defaultMessage: 'Lo sentimos, no estás autorizado para acceder a {platform_name} a través de este canal. '
        + 'Por favor contacta a tu administrador de aprendizaje o gerente para acceder a {platform_name}.'
        + '{lineBreak}{lineBreak}Detalles del error:{lineBreak}{errorMessage}',
    description: 'Mensaje de error cuando falla la autenticación de terceros',
  },
  // Terms of Service and Honor Code
  'terms.of.service.and.honor.code': {
    id: 'terms.of.service.and.honor.code',
    defaultMessage: 'Términos de Servicio y Código de Honor',
    description: 'Texto para el hipervínculo que redirige al usuario a los términos de servicio y código de honor',
  },
  'privacy.policy': {
    id: 'privacy.policy',
    defaultMessage: 'Política de Privacidad',
    description: 'Texto para el hipervínculo que redirige al usuario a la política de privacidad',
  },
  'honor.code': {
    id: 'honor.code',
    defaultMessage: 'Código de Honor',
    description: 'Texto para el hipervínculo que redirige al usuario al código de honor',
  },
  'terms.of.service': {
    id: 'terms.of.service',
    defaultMessage: 'Términos de Servicio',
    description: 'Texto para el hipervínculo que redirige al usuario a los términos de servicio',
  },
  // miscellaneous strings
  'registration.username.suggestion.label': {
    id: 'registration.username.suggestion.label',
    defaultMessage: 'Sugerido:',
    description: 'Texto de la etiqueta de nombres de usuario sugeridos.',
  },
  'did.you.mean.alert.text': {
    id: 'did.you.mean.alert.text',
    defaultMessage: 'Quisiste decir',
    description: 'Sugerencia de alerta de quisiste decir',
  },
});

export default messages;
