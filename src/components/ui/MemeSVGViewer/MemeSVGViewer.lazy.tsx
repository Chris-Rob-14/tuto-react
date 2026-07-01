import { lazy, Suspense, ComponentProps } from 'react';

const LazyMemeSVGViewer = lazy(() => import('./MemeSVGViewer'));

const MemeSVGViewer = (props: ComponentProps<typeof LazyMemeSVGViewer>) => (
  <Suspense fallback={null}>
    <LazyMemeSVGViewer {...props} />
  </Suspense>
);

export default MemeSVGViewer;
