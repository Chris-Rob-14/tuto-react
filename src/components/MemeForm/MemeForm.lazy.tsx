import { lazy, Suspense, ComponentProps } from 'react';

const LazymemeForm = lazy(() => import('./MemeForm'));

const memeForm = (props: ComponentProps<typeof LazymemeForm>) => (
  <Suspense fallback={null}>
    <LazymemeForm {...props} />
  </Suspense>
);

export default memeForm;
