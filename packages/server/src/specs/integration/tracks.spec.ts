import request from 'supertest';
import { app } from '../../app';
import path from 'path';

const mockContainingCatalogPath = path.resolve(__dirname, '..', 'mocks', 'tracks', 'containing');
const mockEmptyCatalogPath = path.resolve(__dirname, '..', 'mocks', 'tracks', 'empty');

describe('Testing GET /api/tracks', () => {
  it('should return list of local songs', async () => {
    const response = await request(app).get(`/api/tracks`).query({
      path: mockContainingCatalogPath,
    });
    expect(response.statusCode).toEqual(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).not.toEqual(0);
  });

  it('should return an empty array', async () => {
    const response = await request(app).get(`/api/tracks`).query({
      path: mockEmptyCatalogPath,
    });
    expect(response.statusCode).toEqual(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toEqual(0);
  });
});
