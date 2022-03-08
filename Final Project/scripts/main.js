var activeFilter = 'all';

$('.pp-filter-button').on('click', function(e) {
  $('.pp-filter-button').removeClass('btn-primary');
  $('.pp-filter-button').addClass('btn-outline-primary');
  
  var button = $(this);
  button.removeClass('btn-outline-primary');
  button.addClass('btn-primary');
  filterItems(button.data("filter"));
  e.preventDefault();
})

function filterItems(filter) {
  if(filter === activeFilter) {
    return;
  }

  activeFilter = filter;
  $('.pp-gallery .card').each(function () {
    var card = $(this);
    var groups = card.data("groups");
    var show = false;
    if(filter === 'all') {
      show = true;
    }
    else {
      for(var i = 0; i < groups.length; i ++) {
        if(groups[i] === filter) {
          show = true;
        }
      }
    }
    // hide everything first
    card.fadeOut(400);

    setTimeout(function() {
      if(show && !card.is(":visible")) {
          card.fadeIn(400)
        }
      }, 500);
  });
}
