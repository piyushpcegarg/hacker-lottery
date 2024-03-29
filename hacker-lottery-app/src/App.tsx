import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import routes from './routes';
import DarkTheme from './theme/DarkTheme';
import LightTheme from './theme/LightTheme';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { IntlProvider } from 'react-intl';
import config from './config';

export type UserContext = {
  setLocale: Dispatch<SetStateAction<string>>;
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
};

export const UserPreferenceContext = React.createContext<UserContext>({
  setLocale: (): void => {
    console.log('Initial blank implementation');
  },
  theme: config.defaultTheme,
  setTheme: (): void => {
    console.log('Initial blank implementation');
  },
});

const loadLocaleData = (locale: string) => {
  switch (locale) {
    case 'en':
      return import('./lang/messages_en.json');
    case 'hi':
      return import('./lang/messages_hi.json');
    default:
      return import('./lang/messages_en.json');
  }
};

const App = () => {
  const routing = useRoutes(routes);

  const [locale, setLocale] = useState<string>(config.defaultLocale);
  const [theme, setTheme] = useState<string>(config.defaultTheme);
  const [messages, setMessages] = useState<{ [key: string]: any }>();

  useEffect(() => {
    loadLocaleData(locale).then((d) => {
      setMessages(d.default);
    });
  }, [locale]);

  return (
    <React.Fragment>
      <IntlProvider
        locale={locale}
        defaultLocale="en"
        messages={messages}
      >
        <UserPreferenceContext.Provider value={{setLocale, theme, setTheme}}>
          <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
            {/* CssBaseline to kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {routing}
          </ThemeProvider>
        </UserPreferenceContext.Provider>
      </IntlProvider>
    </React.Fragment>
  );
};

export default App;
