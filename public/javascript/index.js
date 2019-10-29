addEventListenerOnBoxes()

function addEventListenerOnBoxes(){
    $('.column').on('click', function(e){
        e.target.classList.add('cross');
    })
}