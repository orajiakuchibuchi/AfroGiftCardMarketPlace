import { AfterViewInit, Component } from '@angular/core';

declare var $: any; // Declare jQuery to avoid TypeScript errors

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

ngAfterViewInit(): void {
  const $slider = $('.hero-slider-wrapper');
  const slides = $('.hero-item');

  // Initialize slick
  $slider.slick({
    autoplay: false,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  const LINE_DELAY = 1000; // 1 second between lines
  const SLIDE_DELAY = 5000; // 5 seconds after all lines are visible

  const showLines = (slideIndex: number) => {
    const slide = slides.eq(slideIndex);
    const texts = slide.find('.typed-text');

    texts.each((i: number, el: HTMLElement) => {
      // Only show lines that are hidden
      if (el.style.visibility !== 'visible') {
        setTimeout(() => {
          el.style.visibility = 'visible';
        }, i * LINE_DELAY);
      }
    });

    // Move to next slide after all lines + extra delay
    const totalDelay = texts.length * LINE_DELAY + SLIDE_DELAY;
    setTimeout(() => {
      $slider.slick('slickNext');
    }, totalDelay);
  };

  // Initially hide all lines for all slides
  slides.each((_: number, slide: HTMLElement) => {
    $(slide).find('.typed-text').each((_: number, el: HTMLElement) => {
      el.style.visibility = 'hidden';
    });
  });

  // Play first slide
  showLines(0);

  // On slide change
  $slider.on('afterChange', (event: any, slick: any, currentSlide: number) => {
    showLines(currentSlide);
  });
}


}
