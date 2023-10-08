function toggl_visible(){
    if (!$('#mineral-filter-choice').hasClass('not-visible')){
        $('#mineral-filter-choice').addClass('not-visible');
    } else{
        $('#mineral-filter-choice').removeClass('not-visible');
    };
};

function edit_element(element){
    if (window.elements.indexOf(element) >= 0) {
        window.elements.splice(window.elements.indexOf(element), 1);
        $("#"+element).removeClass("selected");
    }
    else {
        window.elements.push(element);
        $("#" + element).addClass("selected");
    };
}

function getAllIndexes(arr, val) {
    var indexes = [], i;
    if (val.length ==1){
    for (i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(i);
    }else{
        indexes.push(arr.indexOf(val));
    }
    return indexes;
}

var elements = [];
function toggl_element(element){
    edit_element(element);
    var i;
    var hidehidehide = true;
    if (window.elements.length > 0) {
        $('.mineral-block').each(function () {
            var count_ele = 0
            for (i = 0; i < window.elements.length; i++) {
                ele = window.elements[i];
                
                // var ele_next_index = ele_index + ele.length;
                var formula = $(this).find(".mineral-formula").text()
                var ele_index = getAllIndexes(formula,ele);
                var exsited = false
                if  (formula.includes(ele)) {
                    var j;
                    for (j = 0; j < ele_index.length; j++){
                        var ele_next_index = ele_index[j] + ele.length;
                        if (ele_next_index<formula.length-1){
                            ele_next = formula[ele_next_index]
                            if (ele_next.toUpperCase() == ele_next){
                                exsited = true;
                            }
                        }else{
                            exsited = true;
                        }
                    };
                };
                if (exsited){
                    count_ele = count_ele + 1;
                }

            };
            if (count_ele == window.elements.length){
                $(this).removeClass('not-visible');
            } else{
                $(this).addClass('not-visible');
            };
        });
                
    } else{
        $('.mineral-block').each(function () {
            if ($(this).hasClass('not-visible')){
                $(this).removeClass('not-visible');
            };
        });

    };
    
};

function reset_element(){
    window.elements = [];
    $(".selected").each(function () {
            $(this).removeClass('selected');
    });
    $('.not-visible').each(function () {
            $(this).removeClass('not-visible');
        });
};

function pplib_edit_element(element) {
    if (window.ppelements.indexOf(element) >= 0) {
        window.ppelements.splice(window.ppelements.indexOf(element), 1);
        $("#" + element).removeClass("selected");
        elepanel = "#pppanel-" + element;
        $(elepanel).addClass('not-visible');
    }
    else {
        window.ppelements.push(element);
        $("#" + element).addClass("selected");
        elepanel = "#pppanel-" + element;
        $(elepanel).removeClass('not-visible');
    };
}

var ppelements = [];
function pplib_toggl_element(element){
    pplib_edit_element(element);

};

function pplib_reset_element(){
    window.ppelements = [];
    $(".selected").each(function () {
        $(this).removeClass('selected');
    });
    $('.mineral-block').each(function () {
        if (!$(this).hasClass('not-visible')){
        $(this).addClass('not-visible');
        };
    });

};

$('.smooth-goto').on('click', function () {
    $('html, body').animate({ scrollTop: $(this.hash).offset().top - 100 }, 500);
    return false;
});