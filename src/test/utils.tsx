import { CssVarsProvider } from '@mui/joy';
import { Store } from '@reduxjs/toolkit';
import { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { createStore } from '~/store';

interface TestProviderProps {
  store?: Store;
}

export const TestProvider: FC<PropsWithChildren<TestProviderProps>> = ({ children, store }) => {
  const testStore = store ?? createStore();
  return (
    <CssVarsProvider>
      <Provider store={testStore}>{children}</Provider>
    </CssVarsProvider>
  );
};
