/* Since the constructor property can be overwritten (which will be covered in the next two challenges) 
it’s generally better to use the instanceof method to check the type of an object.
*/

function Dog(name) {
    this.name = name;
}


function joinDogFraternity(candidate) {
    return candidate.constructor == Dog;
}