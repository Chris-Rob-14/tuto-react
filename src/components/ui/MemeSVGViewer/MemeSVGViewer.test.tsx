import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import MemeSVGViewer from './MemeSVGViewer';

describe('<MemeSVGViewer />', () => {
  test('should mount', () => {
    render(<MemeSVGViewer />);

    const memeSvgViewer = screen.getByTestId('MemeSVGViewer');

    expect(memeSvgViewer).toBeInTheDocument();
  });
});
