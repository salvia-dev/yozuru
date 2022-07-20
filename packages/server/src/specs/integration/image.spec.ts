import request from 'supertest';
import { app } from '../../app';
import path from 'path';

const mockContainingTrackPath = path.resolve(
  __dirname,
  '..',
  '..',
  'mocks',
  'tracks',
  'containing',
  'sample.mp3',
);
const mockEmptyFolderTrackPath = path.resolve(
  __dirname,
  '..',
  '..',
  'mocks',
  'tracks',
  'empty',
  'sample.mp3',
);

describe('Testing GET /api/tracks/image?path=', () => {
  it('should return a cover image of a provided song', async () => {
    const response = await request(app).get(`/api/tracks/image`).query({
      path: mockContainingTrackPath,
    });
    expect(response.statusCode).toEqual(200);
    expect(response.headers).toHaveProperty('Content-Type');
    expect(response.headers['Content-Type']).toEqual('image/jpeg');
  });

  it('should return an error message that provided song was not found', async () => {
    const response = await request(app).get(`/api/tracks/image`).query({
      path: mockEmptyFolderTrackPath,
    });
    expect(response.statusCode).toEqual(404);
    expect(typeof response.body.message).toBe('string');
    expect(response.body.message).toEqual('Song was not found');
  });
});
