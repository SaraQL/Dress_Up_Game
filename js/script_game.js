// PARTIE SIDEBAR
$(document).ready(function() {
    $('#head').click(function() {
        $(this).css('transform', 'scale(1.1)');
        $('.hair-makeup img').css('display', 'block');
        $('#hairstyle').css('display', 'block');
        $('#makeup').css('display', 'block');

        $('.cloth img').css('display', 'none');
        $('#up').css('display', 'none');
        $('#down').css('display', 'none');
        $('.shoes-accessories img').css('display', 'none');
        $('#shoes').css('display', 'none');
        $('#accessories-title').css('display', 'none');
    });
});

$(document).ready(function() {
    $('#clothes').click(function() {
        $(this).css('transform', 'scale(1.1)');
        $('.cloth img').css('display', 'block');
        $('#up').css('display', 'block');
        $('#down').css('display', 'block');

        $('.hair-makeup img').css('display', 'none');
        $('#hairstyle').css('display', 'none');
        $('#makeup').css('display', 'none');
        $('.shoes-accessories img').css('display', 'none');
        $('#shoes').css('display', 'none');
        $('#accessories-title').css('display', 'none');
    });
});


$(document).ready(function() {
    $('#accessories').click(function() {
        $(this).css('transform', 'scale(1.1)');
        $('.shoes-accessories img').css('display', 'block');
        $('#shoes').css('display', 'block');
        $('#accessories-title').css('display', 'block');

        $('.hair-makeup img').css('display', 'none');
        $('#hairstyle').css('display', 'none');
        $('#makeup').css('display', 'none');
        $('.cloth img').css('display', 'none');
        $('#up').css('display', 'none');
        $('#down').css('display', 'none');
    });
});

//PARTIE GARDE-ROBE
// Les coupes de cheveux
$(document).ready(function() {
    $('#icon_hair1').click(function() {
        $(this).css('transform', 'scale(1.1)');
        $('#hair1').css('display', 'block');
        $('#hair2').css('display', 'none');
        $('#hair3').css('display', 'none');
    });
    $(this).dblclick(function() {
        $(this).css('transform', 'scale(1)');
        $('#hair1').css('display', 'none');
    });
});

$(document).ready(function() {
    $('#icon_hair2').click(function() {
        $(this).css('transform', 'scale(1.1)');
        $('#hair2').css('display', 'block');
        $('#hair1').css('display', 'none');
        $('#hair3').css('display', 'none');
        }); 

    $('#icon_hair2').dblclick(function() {
        $(this).css('transform', 'scale(1)');
        $('#hair2').css('display', 'none');
    });
});

$(document).ready(function() {
    $('#icon_hair3').click(function() {
        $(this).css('transform', 'scale(1.1)');
        $('#hair3').css('display', 'block');
        $('#hair1').css('display', 'none');
        $('#hair2').css('display', 'none');
    });
    $('#icon_hair3').dblclick(function() {
        $(this).css('transform', 'scale(1)');
        $('#hair3').css('display', 'none');
    });
});

// Les maquillages 
$(document).ready(function() {
    $('#icon_makeup1').click(function() {
        alert
        $(this).css('transform', 'scale(1.1)');
        $('#makeup1').css('display', 'block');
        $('#makeup2').css('display', 'none');
    });

    $('#icon_makeup1').dblclick(function() {
        $(this).css('transform', 'scale(1)');
        $('#makeup1').css('display', 'none');

    });
});

$(document).ready(function() {
    $('#icon_makeup2').click(function() {
        $(this).css('transform', 'scale(1.1)');
        $('#makeup2').css('display', 'block');
        $('#makeup1').css('display', 'none');
    });
    $('#icon_makeup2').dblclick(function() {
        $(this).css('transform', 'scale(1)');
        $('#makeup2').css('display', 'none');
    });
});

// Les hauts
$(document).ready(function() {
    $('#icon_shirt4').click(function() {
        $(this).css('transform', 'scale(1.1)');
        $('#shirt4').css('display', 'block');
        $('#shirt2').css('display', 'none');
        $('#shirt1').css('display', 'none');
        });

    $('#icon_shirt4').dblclick(function() {
        $(this).css('transform', 'scale(1)');
        $('#shirt4').css('display', 'none');
    });
        $('#icon_shirt4').dblclick(function() {
    $(this).css('transform', 'scale(1)');
    $('#shirt4').css('display', 'none');

    });
});

$(document).ready(function() {
    $('#icon_shirt2').click(function() {
        $(this).css('transform', 'scale(1.1)');
        $('#shirt2').css('display', 'block');
        $('#shirt4').css('display', 'none');
        $('#shirt1').css('display', 'none');
    });
    $('#icon_shirt2').dblclick(function() {
        $(this).css('transform', 'scale(1)');
        $('#shirt2').css('display', 'none');

    });
        $('#icon_shirt2').dblclick(function() {
    $(this).css('transform', 'scale(1)');
    $('#shirt2').css('display', 'none');

    });
}); 

$(document).ready(function() {
    $('#icon_shirt1').click(function() {
        $(this).css('transform', 'scale(1.1)');
        $('#shirt1').css('display', 'block');
        $('#shirt2').css('display', 'none');
        $('#shirt4').css('display', 'none');
    });
        $('#icon_shirt1').dblclick(function() {
        $(this).css('transform', 'scale(1)');
        $('#shirt1').css('display', 'none');

    });
}); 

// Les bas
$(document).ready(function() {
    $('#icon_pants1').click(function() {
        $(this).css('transform', 'scale(1.1)');
        $('#pants1').css('display', 'block');
        $('#skirt1').css('display', 'none');
        $('#dress1').css('display', 'none');
    });
        $('#icon_pants1').dblclick(function() {
    $(this).css('transform', 'scale(1)');
    $('#pants1').css('display', 'none');

    });
});

$(document).ready(function() {
    $('#icon_skirt1').click(function() {
        $(this).css('transform', 'scale(1.1)');
        $('#skirt1').css('display', 'block');
        $('#pants1').css('display', 'none');
        $('#dress1').css('display', 'none');
    });
        $('#icon_skirt1').dblclick(function() {
    $(this).css('transform', 'scale(1)');
    $('#skirt1').css('display', 'none');

    });
}   );

$(document).ready(function() {
    $('#icon_dress1').click(function() {
        $(this).css('transform', 'scale(1.1)');
        $('#dress1').css('display', 'block');
        $('#pants1').css('display', 'none');
        $('#skirt1').css('display', 'none');
    });
    $('#icon_dress1').dblclick(function() {
        $(this).css('transform', 'scale(1)');
        $('#dress1').css('display', 'none');

    });
});

// Les chaussures
$(document).ready(function() {
    $('#icon_shoes1').click(function() {
        $(this).css('transform', 'scale(1.1)');
        $('#shoes1').css('display', 'block');
        $('#shoes2').css('display', 'none');
    });
    $('#icon_shoes1').dblclick(function() {
        $(this).css('transform', 'scale(1)');
        $('#shoes1').css('display', 'none');

    });
});
$(document).ready(function() {
    $('#icon_shoes2').click(function() {
        $(this).css('transform', 'scale(1.1)');
        $('#shoes2').css('display', 'block');
        $('#shoes1').css('display', 'none');
    });
    $('#icon_shoes2').dblclick(function() {
        $(this).css('transform', 'scale(1)');
        $('#shoes2').css('display', 'none');

    });
}); 

// Les accessoires
$(document).ready(function() {
    $('#icon_accessory1').click(function() {
        $(this).css('transform', 'scale(1.1)');
        $('#accessory1').css('display', 'block');
    });
    $('#icon_accessory1').dblclick(function() {
        $(this).css('transform', 'scale(1)');
        $('#accessory1').css('display', 'none');

    });
});
$(document).ready(function() {
    $('#icon_accessory2').click(function() {
        $(this).css('transform', 'scale(1.1)');
        $('#accessory2').css('display', 'block');
    });
        $('#icon_accessory2').dblclick(function() {
        $(this).css('transform', 'scale(1)');
        $('#accessory2').css('display', 'none');

    });
});
$(document).ready(function() {
    $('#icon_sock1').click(function() {
        $(this).css('transform', 'scale(1.1)');
        $('#sock1').css('display', 'block');
    });
        $('#icon_sock1').dblclick(function() {
        $(this).css('transform', 'scale(1)');
        $('#sock1').css('display', 'none');

    });
});