import { CoursesService } from './courses.service';
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
    <img src="{{ imageUrl }}" />

    `


})
export class CoursesComponent{
    //adding a field
    title = "List of courses";
    courses;
    imageUrl = "http://lorempixel.com/400/200"

    //constructor to create an instance of courses service
    //creating an object
    constructor(service: CoursesService){
       
        this.courses = service.getCourses();
      
    }
}