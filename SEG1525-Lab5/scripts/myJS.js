var anytime = [];
var ricardotime = [1,2];
var johntime = [3,4];
var thomastime = [5,6];
var currentDayFilter=[];

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
    $("#datetimepicker").datetimepicker({
        // value:'2021-06-11',
        disabledWeekDays: currentDayFilter
    });

    $('#toggle').on("click", function(){
        $('#datetimepicker').datetimepicker("toggle");
    });

    $("#selectPro").on("change", function(){
        // $('#datetimepicker').datetimepicker();
        $('#datetimepicker').datetimepicker("destroy");
        datefunc();
        
        $('#datetimepicker').datetimepicker("testing");      
    });



    function datefunc(){
        let days = [];
        days.push(maptime[ selectPro.children("option:selected").text()]);
        currentDayFilter = days;
        return days;
    }   



});
