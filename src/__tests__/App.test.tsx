import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import App from '../renderer/App';

jest.mock('renderer/firebase', () => ({ db: {}, storage: {} }));
jest.mock('firebase/firestore', () => ({
  collection: jest.fn(),
  getDocs: jest.fn().mockResolvedValue({ forEach: jest.fn() }),
  onSnapshot: jest.fn(() => jest.fn()),
}));
jest.mock('firebase/storage', () => ({
  ref: jest.fn(),
  listAll: jest.fn().mockResolvedValue({ items: [] }),
  getDownloadURL: jest.fn(),
}));

describe('App', () => {
  it('should render', () => {
    expect(render(<App />)).toBeTruthy();
  });
});
