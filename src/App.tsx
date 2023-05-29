import React, { Suspense } from 'react';
import { TamaguiProvider } from 'tamagui';

import createTamagui from '../tamagui.config';
import Principal from './screens/Principal';

export default function App() {
  return (
    <TamaguiProvider config={createTamagui}>
      {/* if you want nice React 18 concurrent hydration, you'll want Suspense near the root */}
      <Suspense>
        <Principal />
      </Suspense>
    </TamaguiProvider>
  );
}
