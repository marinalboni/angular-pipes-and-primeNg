import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
    name: 'personalizedcanfly'
})
export class PersonalizedCanFlyPipe implements PipeTransform {
    transform( info: boolean ): string {
        return info ? 'Yes' : 'No';
    }
};