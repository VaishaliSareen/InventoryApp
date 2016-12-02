/**
 * Created by Owner on 11/22/2016.
 */
// this is the JQuerry for asking the user if they really want to delete a particular product
// all the classes are with .classname and id's are with #idname
$('.confirmation').on('click',function(){
    return confirm('Are you sure you want to delete this product?');
});
// for password authentication
var check = $('#validateForm').validate({
    rules: {
        confirm: {
        required: true,
        equalTo: '#password'
        }
    },
    messages: {
        confirm: {
        equalTo: 'Please type in the same passwords'
        }
    }
});