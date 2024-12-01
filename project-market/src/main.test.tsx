
import { createRoot } from 'react-dom/client';

jest.mock('react-dom/client', () => ({
  createRoot: jest.fn(() => ({
    render: jest.fn(),
  })),
}));

describe('Application entry point', () => {
  it('mounts the application without crashing', () => {
    const root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);

    require('./main'); 
    expect(createRoot).toHaveBeenCalledWith(root);
  });
});
