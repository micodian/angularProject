//decorator imported from @angular/core to make this class a component
import{ Component } from '@angular/core';

@Component({
    //add properties of this component
    //anywhere there is an element for courses, angular would render the template
    //using string interpolation
    selector: 'courses',
    template: `
    <h2>{{ title }}</h2>
    <ul>
        <li *ngFor = "let course of courses">
            {{ course }}
        </li>
    </ul>

    `


})
export class CoursesComponent{
    //adding a field
    title = "List of courses";
    courses =["course1","course2","course3"];
}