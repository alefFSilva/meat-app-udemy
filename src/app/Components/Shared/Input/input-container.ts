import { Component, Input, ContentChild, AfterContentInit, OnInit } from "@angular/core";
import { NgModel } from "@angular/forms";

@Component({
    selector: 'input-container',
    templateUrl: 'input.container.html'
})
export class InputContainer implements AfterContentInit {
    @Input() label: string
    @Input() errorMessage: string

    inputElement: NgModel; 
    @ContentChild(NgModel) ngModel : NgModel;
    
    constructor() {
        
    }

    ngAfterContentInit(): void {
        this.inputElement = this.ngModel;

        if(this.inputElement === undefined){
            throw new Error("Este input precisaer conter uma NgModel");
        }
    }

    public get HasSuccess(): boolean {
        return this.inputElement.valid && (this.inputElement.dirty || this.inputElement.touched);
    }

    public get HasError(): boolean {
        return !this.inputElement.valid && (this.inputElement.dirty || this.inputElement.touched);
    }
}