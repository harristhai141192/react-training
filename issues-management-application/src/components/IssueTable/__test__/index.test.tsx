import IssueTable from '..';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { act, render, waitFor } from '@utils/testing';

describe('It should rendered', () => {
  it('should pass', async () => {
    const fakeResponse = { title: 'Test' };
    const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
    const mockedFetch = jest.fn().mockResolvedValueOnce(mRes);
    global.fetch = mockedFetch;
    render(<IssueTable />);
    await act(async () => {
      await waitFor(() => expect(mockedFetch).toHaveBeenCalledTimes(1));
    });
  });
});
