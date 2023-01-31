import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
    name: 'personalizeduppercase'
})
export class PersonalizedUppercasePipe implements PipeTransform {
    transform( text: string, touppercase: boolean = true ): string {
        return touppercase ? text.toUpperCase() : text;
    }
};