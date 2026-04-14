import {
  Directive,
  ElementRef,
  OnInit,
  OnDestroy,
  inject,
  input,
} from '@angular/core';

@Directive({
  selector: '[appReveal]',
})
export class RevealDirective implements OnInit, OnDestroy {
  private el = inject(ElementRef);
  private observer?: IntersectionObserver;

  threshold = input(0.15);
  delay = input(0);

  ngOnInit() {
    const el = this.el.nativeElement as HTMLElement;
    el.classList.add('reveal');

    if (this.delay()) {
      el.style.transitionDelay = `${this.delay()}ms`;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          this.observer?.unobserve(el);
        }
      },
      { threshold: this.threshold() }
    );

    this.observer.observe(el);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
