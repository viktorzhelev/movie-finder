
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appHighLight]'
})

export class HighLightDirective {
    constructor(private el: ElementRef) {
        this.el.nativeElement.style.backgroundColor = 'yellow';
    }
    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;   
    }
    @HostListener('mouseenter') onMouseEnter() {
        this.highlight('yellow');
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.highlight('green');
    }
}