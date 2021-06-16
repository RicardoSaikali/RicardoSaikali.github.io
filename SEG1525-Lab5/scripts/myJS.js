var anytime = [6,0];
var ricardotime = [6,0,1,2];
var johntime = [6,0,3,4];
var thomastime = [6,0,5,3];
let currentDayFilter;

var maptime = {
    "Any - Weekdays Only": anytime,
    "Dr. Ricardo - Wed, Thu, Fri Only": ricardotime,
    "Dr. John - Mon, Tue, Fri Only": johntime,
    "Dr. Thomas - Mon, Tue, Thu Only": thomastime
};




$(document).ready(function(){
    var myform = $("#bookform");
    var firstname = document.querySelector("#firstName");
    var lastName = document.querySelector("#lastName");
    var email = $("#email");
    var phone = $("#phonenumber");
    var selectPro = $("#selectPro");
    var calendar = $("#datetimepicker");
    var card = $("#card");
    var inputBooking = $(".inputBooking");
    var output = document.querySelector("output");

    $(document).on("click", ".open-bookAppointment", function (e) {
        e.preventDefault();
        var serviceName = $(this).data('id')+" Booking";
        $("#modalTitle").text( serviceName );
    });

    datefunc();

    $("#datetimepicker").datetimepicker({
        disabledWeekDays: currentDayFilter
    });
    
    $('#toggle').on("click", function(){
        $('#datetimepicker').datetimepicker("show");
    });

    $("#selectPro").on("change", function(){
        
        $('#datetimepicker').datetimepicker("destroy");
        datefunc();
        var container = document.getElementById("holdCalendar");
        var content = container.innerHTML;
        container.innerHTML= " "; 
        container.innerHTML= content; 
        $("#datetimepicker").datetimepicker({
            // value:'2021-06-11',
            disabledWeekDays: currentDayFilter
        });
        $('#toggle').on("click", function(){
            $('#datetimepicker').datetimepicker("show");
        });  
    });

    
    function datefunc(){
        currentDayFilter = maptime[ selectPro.children("option:selected").text()];
        return currentDayFilter;
    };

    // firstname.oninvalid = function(event) {
    //     event.target.setCustomValidity('Please make sure this field is written correctly and does not have any special characters other than a - or \'');
    // };

    // lastName.oninvalid = function(event) {
    //     event.target.setCustomValidity('Please make sure this field is written correctly and does not have any special characters other than a - or \'');
    // };
    // firstname.oninput = function(event) {
    //     event.target.setCustomValidity(' ');
    // }
    // lastName.oninput = function(event) {
    //     event.target.setCustomValidity(' ');
    // }


});
