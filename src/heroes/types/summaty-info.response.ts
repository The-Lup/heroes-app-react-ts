import type { Hero } from './hero.interface';

export interface SummaryInfoResponse {
  totalHeroes: number;
  strongestHero: Hero;
  smartestHero: Hero;
  heroCount: number;
  villainCount: number;
}
