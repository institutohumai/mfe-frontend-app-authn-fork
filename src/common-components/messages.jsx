import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  // institution login strings
  'institution.login.page.sub.heading': {
    id: 'institution.login.page.sub.heading',
    defaultMessage: 'Elige tu institución de la lista a continuación',
    description: 'Encabezado de la lista de instituciones',
  },
  // logistration strings
  'logistration.sign.in': {
    id: 'logistration.sign.in',
    defaultMessage: 'Iniciar sesión',
    description: 'Texto que aparece en la pestaña para cambiar entre iniciar sesión y registrarse',
  },
  'logistration.register': {
    id: 'logistration.register',
    defaultMessage: 'Registrarse',
    description: 'Texto que aparece en la pestaña para cambiar entre iniciar sesión y registrarse',
  },
  // enterprise sso strings
  'enterprisetpa.title.heading': {
    id: 'enterprisetpa.title.heading',
    defaultMessage: '¿Te gustaría iniciar sesión usando tus credenciales de {providerName}?',
    description: 'Texto de encabezado usado en autenticación de terceros empresarial',
  },
  'enterprisetpa.login.button.text': {
    id: 'enterprisetpa.login.button.text',
    defaultMessage: 'Mostrarme otras formas de iniciar sesión o registrarse',
    description: 'Texto del botón para iniciar sesión',
  },
  'enterprisetpa.login.button.text.public.account.creation.disabled': {
    id: 'enterprisetpa.login.button.text.public.account.creation.disabled',
    defaultMessage: 'Mostrarme otras formas de iniciar sesión',
    description: 'Texto del botón para iniciar sesión cuando la creación de cuentas está deshabilitada',
  },
  // social auth providers
  'sso.sign.in.with': {
    id: 'sso.sign.in.with',
    defaultMessage: 'Iniciar sesión con {providerName}',
    description: 'Texto para lector de pantalla que aparece antes del nombre del proveedor de autenticación social',
  },
  'sso.create.account.using': {
    id: 'sso.create.account.using',
    defaultMessage: 'Crear cuenta usando {providerName}',
    description: 'Texto para lector de pantalla que aparece antes del nombre del proveedor de autenticación social',
  },
  // password field strings
  'show.password': {
    id: 'show.password',
    defaultMessage: 'Mostrar contraseña',
    description: 'etiqueta aria para el icono de mostrar contraseña en el campo de contraseña',
  },
  'hide.password': {
    id: 'hide.password',
    defaultMessage: 'Ocultar contraseña',
    description: 'etiqueta aria para el icono de ocultar contraseña en el campo de contraseña',
  },
  'one.letter': {
    id: 'one.letter',
    defaultMessage: '1 letra',
    description: 'requisito de contraseña de tener 1 letra',
  },
  'one.number': {
    id: 'one.number',
    defaultMessage: '1 número',
    description: 'requisito de contraseña de tener 1 número',
  },
  'eight.characters': {
    id: 'eight.characters',
    defaultMessage: '8 caracteres',
    description: 'requisito de contraseña de tener un mínimo de 8 caracteres',
  },
  'password.sr.only.helping.text': {
    id: 'password.sr.only.helping.text',
    defaultMessage: 'La contraseña debe contener al menos 8 caracteres, al menos una letra y al menos un número',
    description: 'Texto de ayuda de contraseña para la clase sr-only',
  },
  // third party auth
  'tpa.alert.heading': {
    id: 'tpa.alert.heading',
    defaultMessage: '¡Casi listo!',
    description: 'Encabezado de alerta de éxito después de que el usuario ha iniciado sesión exitosamente con autenticación social',
  },
  'login.third.party.auth.account.not.linked': {
    id: 'login.third.party.auth.account.not.linked',
    defaultMessage: 'Has iniciado sesión exitosamente en {currentProvider}, pero tu cuenta de {currentProvider} '
                    + 'no tiene una cuenta de {platformName} vinculada. Para vincular tus cuentas, '
                    + 'inicia sesión ahora usando tu contraseña de {platformName}.',
    description: 'Mensaje que aparece en la página de inicio de sesión si el usuario se ha autenticado exitosamente con autenticación social '
                  + 'pero no existe una cuenta de plataforma asociada',
  },
  'register.third.party.auth.account.not.linked': {
    id: 'register.third.party.auth.account.not.linked',
    defaultMessage: '¡Has iniciado sesión exitosamente en {currentProvider}! Solo necesitamos un poco más de información '
                    + 'antes de que comiences a aprender con {platformName}.',
    description: 'Mensaje que aparece en la página de registro si el usuario se ha autenticado exitosamente con TPA '
                  + 'pero no existe una cuenta de plataforma asociada',
  },
  'registration.using.tpa.form.heading': {
    id: 'registration.using.tpa.form.heading',
    defaultMessage: 'Termina de crear tu cuenta',
    description: 'Encabezado que aparece sobre el formulario cuando el usuario intenta crear una cuenta usando autenticación social',
  },
  supportTitle: {
    id: 'zendesk.supportTitle',
    description: 'Título para el botón de soporte',
    defaultMessage: 'Soporte de edX',
  },
  selectTicketForm: {
    id: 'zendesk.selectTicketForm',
    description: 'Seleccionar formulario de ticket',
    defaultMessage: 'Por favor elige tu tipo de solicitud:',
  },
  'registration.other.options.heading': {
    id: 'registration.other.options.heading',
    defaultMessage: 'O regístrate con:',
    description: 'Un mensaje que aparece sobre los proveedores de autenticación de terceros, es decir, saml, google, facebook, etc.',
  },
  'institution.login.button': {
    id: 'institution.login.button',
    defaultMessage: 'Credenciales de institución/campus',
    description: 'muestra la lista de instituciones',
  },
  'login.other.options.heading': {
    id: 'login.other.options.heading',
    defaultMessage: 'O inicia sesión con:',
    description: 'Texto que aparece sobre otras opciones de inicio de sesión como botones de autenticación social',
  },
  'enterprise.login.btn.text': {
    id: 'enterprise.login.btn.text',
    defaultMessage: 'Credenciales de empresa o escuela',
    description: 'Texto del enlace de inicio de sesión de empresa o escuela.',
  },
});

export default messages;
