import { Component } from "@angular/core";
import { RadioOption } from "../Shared/Radio/radio-option.model";

@Component({
    selector: "order-component",
    templateUrl: "order-component.html"
})
export class OrderComponent {
    public paymentOptions: RadioOption[] = [
        { label: "Dinheiro", value: "MON" },
        { label: "Cartão de Débito", value: "DEB" },
        { label: "Cartão Refeição", value: "REF" }
    ]
}