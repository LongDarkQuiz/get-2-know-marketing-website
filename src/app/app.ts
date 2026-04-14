import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { HowItWorks } from './components/how-it-works/how-it-works';
import { Story } from './components/story/story';
import { Events } from './components/events/events';
import { PhysicalCard } from './components/physical-card/physical-card';
import { Leaderboard } from './components/leaderboard/leaderboard';
import { Pricing } from './components/pricing/pricing';
import { Cta } from './components/cta/cta';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    Hero,
    HowItWorks,
    Story,
    Events,
    PhysicalCard,
    Leaderboard,
    Pricing,
    Cta,
    Footer,
  ],
  template: `
    <app-navbar />
    <main>
      <app-hero />
      <app-how-it-works />
      <app-story />
      <app-events />
      <app-physical-card />
      <app-leaderboard />
      <app-pricing />
      <app-cta />
    </main>
    <app-footer />
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class App {}
