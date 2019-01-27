import { Component, Input, forwardRef } from "@angular/core";
import { RadioOption } from "./radio-option.model";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
    selector: 'radio-component',
    templateUrl: 'radio-component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => RadioComponent) ,
            multi: true
        }
    ]
})
export class RadioComponent implements ControlValueAccessor{
    
    @Input()
    public options: RadioOption[];
    
    public selectedOptionValue: any;
    onChange: any;
    
    public SetValue(value: any){
        this.selectedOptionValue = value;
        this.onChange(this.selectedOptionValue);
    }

    writeValue(obj: any): void {
        this.selectedOptionValue = obj;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
       console.log("registerOnTouched");
    }

    setDisabledState?(isDisabled: boolean): void {
        console.log("setDisabledState");
    }
}