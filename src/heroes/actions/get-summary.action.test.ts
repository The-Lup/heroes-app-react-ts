import { describe, expect, test } from 'vitest';
import { getSummaryAction } from './get-summary.action';

describe('getSummaryAction', () => {
  test('Should fetch summary and return complete information', async () => {
    const summary = await getSummaryAction();

    expect(summary).toStrictEqual({
      totalHeroes: expect.any(Number),
      strongestHero: expect.objectContaining({
        id: expect.any(String),
        name: expect.any(String),
        strength: expect.any(Number),
      }),
      smartestHero: expect.objectContaining({
        id: expect.any(String),
        name: expect.any(String),
        intelligence: expect.any(Number),
      }),
      heroCount: expect.any(Number),
      villainCount: expect.any(Number),
    });
  });
});
