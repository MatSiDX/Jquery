$("#capa").mouseenter(function (evento) {
    $("#mensaje").css("display", "block")
    $("div").css("padding", " 10px")
    $("#capa").css("background-color", " aqua")
})
$("#capa").mouseleave(function (evento) {
    $("#mensaje").css("display", "none");
})

$(document).ready(function () {
    $("#ev0").click(function () {
        $("#id0").hide();
    });

    $("#ev1").click(function () {
        $("#id0").show();
    });

});

$("#id1").ready(function () {
    $("#ev2").click(function () {
        $("#id1").hide(1000);//"easing"
    });

    $("#ev3").click(function () {
        $("#id1").show(1000);//"easing"
    });
});

$("#id2").ready(function () {
    $("#ev4").click(function () {
        $("#id2").toggle();
    });
});

$("#id3").ready(function () {
    $("#ev5").click(function () {
        $("#id3").toggle(1000);
    });
});

$(document).ready(function () {
    $("#id4").click(function () {
        alert("Evento click");
    });

    $("#id5").dblclick(function () {
        alert("Evento dblclick");
    });

    $("#id6").mouseenter(function () {
        //alert("Evento mouseenter");
    });

    $("#id7").mouseleave(function () {
        //alert("Evento mouseleave");
    });

});

$(document).ready(function () {
    var pers = {
        nombre: "Gerson",
        edad: 19
    };

    $(".cls1").click(function () {
        alert("Hola " + pers.nombre + " tienes " + pers.edad + " años de edad");
    });
});

$ ("body").css("margin-left", "50px");
