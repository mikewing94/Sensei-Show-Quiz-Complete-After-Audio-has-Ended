jQuery(document).ready(function(){

jQuery('[name="quiz_complete"]').hide();

jQuery("#audioplayer").bind("ended", function(){
    jQuery('[name="quiz_complete"]').show();
});
});
