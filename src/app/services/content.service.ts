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
      desc: 'Answer 10 questions about yourself. Customise the look. Done in 2 minutes.',
      icon: 'images/icons/phone.svg',
    },
    {
      num: '02',
      title: 'Print',
      desc: 'Get your unique QR code. Print it on a card or display it on a screen.',
      icon: 'images/icons/qr-code.svg',
    },
    {
      num: '03',
      title: 'Play',
      desc: 'Your guests scan the code. They answer the questions. Live leaderboard updates.',
      icon: 'images/icons/trophy.svg',
    },
  ]);

  // Story section
  readonly storyHeading = signal('Bring your guests into your story');
  readonly storySub = signal(
    'A simple, fun way to get everyone involved — all centred around you, your story, and your day.'
  );
  readonly storyFeatures = signal([
    'A quick, interactive quiz all about the couple',
    'Guests play on their own phone — no setup needed',
    'Questions about your story, your guests, and your day',
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
        'Works for 100+ guests',
      ],
    },
    {
      title: 'Birthdays',
      desc: '18th, 21st, 30th, 40th, 50th, you name it — make it memorable. A quiz about the birthday person is the perfect icebreaker that brings together old friends and new faces.',
      icon: 'images/icons/party-popper.svg',
      features: [
        'Customised questions about the birthday person',
        'Fun milestone celebrations',
        'Instant entertainment',
        'Works for 100+ guests',
      ],
    },
  ]);

  // Physical card
  readonly cardHeading = signal('The physical card');
  readonly cardDesc = signal(
    'Print your QR code on a beautiful card. Display it at your event. Your guests scan it from their phones. No setup needed.'
  );
  readonly cardFeatures = signal([
    'Premium card design included',
    'Custom branding options',
    'Print-ready files',
    'Digital alternative available',
  ]);

  // Leaderboard
  readonly leaderboardHeading = signal('Live leaderboard');
  readonly leaderboardDesc = signal(
    "Watch the scores update in real-time. The tension builds. Someone's winning. Someone's losing. Everyone's laughing."
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
  readonly ctaHeading = signal('Ready to make your event unforgettable?');
  readonly ctaDesc = signal(
    'Create your quiz in 2 minutes. Print the card. Let your guests play. Watch the magic happen.'
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
