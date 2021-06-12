var anytime = [];
var ricardotime = [1,2];
var johntime = [3,4];
var thomastime = [5,6];
let currentDayFilter;

var maptime = {
    "Any": anytime,
    "Dr. Ricardo": ricardotime,
    "Dr. John": johntime,
    "Dr. Thomas": thomastime
};

$(document).ready(function(){
    var myform = $("#bookform");
    var firstname = document.querySelector("#firstName");
    var lastName = $("#lastName");
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


    // $('#datetimepicker').datetimepicker();
    // $("#datetimepicker").datetimepicker({
    //     // value:'2021-06-11',
    //     disabledWeekDays: currentDayFilter
    // });

    $("#datetimepicker").datetimepicker({
        // value:'2021-06-11',
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
        // $('#datetimepicker').datetimepicker("show");      
    });

    
    
    

    function datefunc(){
        currentDayFilter = maptime[ selectPro.children("option:selected").text()];
        return currentDayFilter;
    }   



});
