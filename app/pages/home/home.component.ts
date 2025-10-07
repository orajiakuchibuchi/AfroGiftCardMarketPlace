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

    const slides = $('.hero-item');
    let currentIndex = 0;

    const TYPE_SPEED = 90; // typing speed per letter
    const SLIDE_DELAY = 500; // wait before switching slides

    const typeWriter = (element: HTMLElement, text: string, delay = TYPE_SPEED) => {
      return new Promise<void>((resolve) => {
        element.textContent = '';
        element.style.visibility = 'visible';
        let i = 0;
        const timer = setInterval(() => {
          element.textContent += text.charAt(i);
          i++;
          if (i === text.length) {
            clearInterval(timer);
            setTimeout(resolve, 300);
          }
        }, delay);
      });
    };

    const playSlide = async (index: number) => {
      const slide = slides.eq(index);
      const texts = slide.find('.typed-text');

      // Immediately hide all texts before typing
      texts.each((_: number, el: HTMLElement) => {
        el.style.visibility = 'hidden';
        el.textContent = '';
      });

      // Small pause to ensure slide transition completes
      setTimeout(async () => {
        for (let i = 0; i < texts.length; i++) {
          const el = texts[i] as HTMLElement;
          const fullText =
            $(el).attr('data-original') || el.getAttribute('data-original') || '';
          await typeWriter(el, fullText);
        }

        // Wait before next slide
        setTimeout(() => {
          $slider.slick('slickNext');
        }, SLIDE_DELAY);
      }, 100); // small delay so slide fade completes
    };

    // Store original texts
    $('.typed-text').each((_: number, el: HTMLElement) => {
      $(el).attr('data-original', $(el).text());
      el.textContent = ''; // clear initially
      el.style.visibility = 'hidden';
    });

    // Play first slide
    playSlide(currentIndex);

    // When slide changes
    $slider.on('beforeChange', (event: any, slick: any, currentSlide: number, nextSlide: number) => {
      // Pre-hide the next slide's text before it fades in
      const next = slides.eq(nextSlide).find('.typed-text');
      next.each((_: number, el: HTMLElement) => {
        el.textContent = '';
        el.style.visibility = 'hidden';
      });
    });

    $slider.on('afterChange', (event: any, slick: any, currentSlide: number) => {
      currentIndex = currentSlide;
      playSlide(currentIndex);
    });
  }

}
