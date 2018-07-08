import { Directive, ElementRef, Renderer2, Input, OnChanges } from '@angular/core';

@Directive({
    selector: '[appOrderStatusHighlight]'
})
export class OrderStatusHighlight implements OnChanges {

    @Input() orderStatus: string;

    constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

    ngOnChanges() {
        if (this.orderStatus === 'Pending') {
            this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'orange');
        } else if (this.orderStatus === 'Ready') {
            this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'limegreen');
        }
    }
}
