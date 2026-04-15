import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ContentService {
  // CDN base
  readonly cdn = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663529279191/4VNBrU4upray3weSTj4rZG';

  // Nav
  readonly navLinks = signal([
    { label: 'How it works', href: '#how' },
    { label: 'For events', href: '#events' },
    { label: 'Pricing', href: '#pricing' },
  ]);
  readonly navCta = signal({ label: 'Create your quiz', href: '#pricing' });

  // Hero
  readonly heroTag = signal('THE TABLE GAME EVERYONE ACTUALLY PLAYS');
  readonly heroHeading = signal('Your guests are already on their phones.');
  readonly heroHeadingAccent = signal('Give them something fun.');
  readonly heroSub = signal(
    'Create a quiz about yourself. Print the QR code. Let your guests compete. No app download. No setup. Works all day.'
  );
  readonly heroPrimaryCta = signal({ label: 'Create your event quiz', href: '#pricing' });
  readonly heroSecondaryCta = signal({ label: 'See how it works', href: '#how' });
  readonly heroMarqueeItems = signal([
    'All about the couple',
    'Zero setup',
    'Live leaderboard',
    'Everyone can play',
  ]);

  // How it works
  readonly howHeading = signal('How it works');
  readonly howSub = signal('Three steps to the most memorable moment of your event.');
  readonly howSteps = signal([
    {
      num: '01',
      title: 'Create',
      desc: 'Put together a short quiz about you, your story, and your special day.',
      icon: 'images/icons/phone.svg',
    },
    {
      num: '02',
      title: 'Share',
      desc: 'Then print your QR codes and display them on the tables.',
      icon: 'images/icons/qr-code.svg',
    },
    {
      num: '03',
      title: 'Play',
      desc: 'Guests answer questions about you, keeping the focus where it should be.',
      icon: 'images/icons/trophy.svg',
    },
  ]);

  // Story section
  readonly storyHeading = signal('Keep guests connected to your day');
  readonly storySub = signal(
    'A light, personal way to bring people in - without interrupting the moments that matter.'
  );
  readonly storyFeatures = signal([
    'A quick, interactive quiz all about the couple',
    'Guests play on their own phone - no setup needed',
    'A live leaderboard that gets everyone involved',
  ]);
  readonly storyFootnote = signal('Something fun, personal, and easy for everyone to take part in.');

  // Events
  readonly eventsHeading = signal('Perfect for any celebration');
  readonly events = signal([
    {
      title: 'Weddings',
      desc: 'Bring together old friends and new faces. A quiz about the couple is the ultimate icebreaker.',
      icon: 'images/icons/heart.svg',
      features: [
        'Personalised questions about the couple',
        'Guest participation tracking',
        'Shareable leaderboard',
        'Works for up to 200 Guests (Event pack)',
      ],
    },
    {
      title: 'Birthdays',
      desc: '18th, 21st, 30th, 40th, 50th, you name it - make it memorable. A quiz about the birthday person is the perfect icebreaker that brings together old friends and new faces.',
      icon: 'images/icons/party-popper.svg',
      features: [
        'Customised questions about the birthday person',
        'Fun milestone celebrations',
        'Instant entertainment',
        'Works for up to 200 Guests (Event pack)',
      ],
    },
  ]);

  // Physical card
  readonly cardHeading = signal('The physical card');
  readonly cardDesc = signal(
    'Place a card on the table. Guests scan it when they like.'
  );
  readonly cardFeatures = signal([
    'Premium card design included',
    'Custom branding options',
    'Print-ready files',
    'Digital alternative available',
  ]);

  // Leaderboard
  readonly leaderboardHeading = signal('A little friendly competition');
  readonly leaderboardDesc = signal(
    'Scores update quietly in the background.'
  );
  readonly leaderboardFeatures = signal([
    'Real-time score updates',
    'Instant rankings',
    'Shareable results',
    'Memorable moments',
  ]);

  // Pricing
  readonly pricingHeading = signal('Simple pricing');
  readonly pricingSub = signal("Start free. Upgrade when you're ready.");
  readonly pricingPlans = signal([
    {
      badge: 'FREE',
      price: '£0',
      period: '',
      desc: '',
      features: ['Create 1 quiz', 'Digital QR', 'Up to 5 guests', 'Basic leaderboard'],
      cta: 'Get started',
      highlighted: false,
      comingSoon: false,
    },
    {
      badge: 'MOST POPULAR',
      price: '£29.99',
      period: 'per event',
      desc: 'EVENT PACK',
      features: [
        'Everything in Free',
        'Templates for QR card design',
        'Up to 200 guests',
        'Up to 5 games',
        'Light & Dark mode theme',
        'Leaderboard & Analytics export',
      ],
      cta: 'Get the event pack',
      highlighted: true,
      comingSoon: false,
    },
    {
      badge: 'COMING SOON',
      price: 'Custom',
      period: '',
      desc: 'ENTERPRISE PACK',
      features: [
        'Everything in Event Pack',
        'Custom QR card design',
        'Unlimited guests',
        'Unlimited games',
        'Hosted global leaderboard',
      ],
      cta: 'Contact sales',
      highlighted: false,
      comingSoon: true,
    },
  ]);

  // CTA
  readonly ctaHeading = signal('Keep your guests engaged throughout the day');
  readonly ctaDesc = signal(
    'Create your quiz in minutes. Print your QR card and place it around the venue. A light, personal way to keep guests engaged, while keeping the focus on you.'
  );
  readonly ctaCta = signal({ label: 'Create your quiz now', href: '#pricing' });

  // Footer
  readonly footerCopy = signal('© 2026 get2know. All rights reserved.');
  readonly footerLinks = signal([
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Contact', href: '/contact' },
  ]);
}
