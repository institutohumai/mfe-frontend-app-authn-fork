# GitHub Copilot Instructions for @edx/frontend-app-authn

## Architecture & Organization
- **Feature-Based Structure**: Code is organized by feature (e.g., `src/login`, `src/register`) rather than by type.
  - Each feature directory is self-contained with its own components and `data` subdirectory.
  - **Strict Boundaries**: Import only from a feature's public `index.js`. Never import from internal files of another feature.
  - **Data Directory**: Contains Redux logic (`actions.js`, `reducers.js`, `sagas.js`, `selectors.js`, `service.js`).
  - **No Circular Dependencies**: Features should not import from parents or grandparents.
- **Core Platform**: Built on `@edx/frontend-platform`.
  - Use `getConfig()` for app configuration.
  - Use `AppProvider` for global context.
- **Routing**: Defined in `src/MainApp.jsx` using `react-router-dom` v6.

## Tech Stack & Patterns
- **UI Library**: Use `@openedx/paragon` (Bootstrap-based) for UI components (`Form`, `Button`, etc.).
- **State Management**: Redux with Redux Saga for side effects.
  - Follow the "Ducks" pattern but split into functional files within the `data` folder.
- **Internationalization**: Use `react-intl` via `@edx/frontend-platform/i18n`.
  - Use `useIntl` hook or `injectIntl` HOC.
  - Define messages in `messages.jsx` or `messages.js`.
  - Run `make extract_translations` to update message files.
- **Analytics**: Use `sendPageEvent` and `sendTrackEvent` from `@edx/frontend-platform/analytics`.

## Development Workflow
- **Start Dev Server**: `npm run dev` (starts webpack-dev-server).
- **Testing**: `npm run test` (Jest).
  - Tests are co-located with code or in `tests/` subdirectories.
  - Use `@testing-library/react` for component tests.
- **Linting**: `npm run lint` (ESLint).
- **Build**: `npm run build` (Webpack).

## Common Patterns
- **Components**: Named semantically (e.g., `LoginPage.jsx`).
- **Styling**: SCSS files, often imported in the component or `index.scss`.
- **Configuration**: Access environment variables and config via `getConfig()`.
- **API Calls**: Encapsulated in `service.js` within the feature's `data` directory.

## Key Files
- `src/MainApp.jsx`: Main entry point and routing configuration.
- `src/base-container/index.jsx`: Main layout wrapper.
- `src/common-components/`: Shared components used across features.
- `docs/decisions/0002-feature-based-application-organization.rst`: Detailed architecture decision record.
