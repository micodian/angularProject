//decorator imported from @angular/core to make this class a component
import{ Component } from '@angular/core';

@Component({
    //add properties of this component
    //anywhere there is an element for courses, angular would render the template
    selector: 'courses',
    template: '<h2>Courses</h2>'


})
export class CoursesComponent{

}