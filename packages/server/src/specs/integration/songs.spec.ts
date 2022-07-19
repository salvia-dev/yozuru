import request from 'supertest';
import { app } from '../../app';

describe('Testing GET /api/song', () => {
  it('should return list of local songs', async () => {
    const response = await request(app).get('/api/songs');
    expect(response.statusCode).toEqual(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
