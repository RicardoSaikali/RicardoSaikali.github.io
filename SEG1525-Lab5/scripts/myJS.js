


$(document).ready(function(){
    $(document).on("click", ".open-bookAppointment", function (e) {
        e.preventDefault();
        var serviceName = $(this).data('id')+" Booking";
        $("#modalTitle").text( serviceName );
    });





});
