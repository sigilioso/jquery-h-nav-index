function slug(str) {
  /*Slug a str*/
  return str.replace(/ /g, '-').replace(/[^\w+-]/g, '');
}
function jhnavigationIndex(container) {
  $(document).ready(function() {
    //Get headings from document
    var headings = $('h1, h2, h3, h4, h5, h6');
    //Build the navigation index div
    var index = $('<div id="jhni_index">');
    //Append a 'knob' to open and close it
    var knob = $('<div id="jhni_knob" title="Index">');
    //Index links
    index.append('<div id="jhni_indexContent">');
    indexContent = index.find('#jhni_indexContent');
    for(i=0; i < headings.length; i++) {
      var h = $(headings[i]);
      sh = i.toString() + '-' + slug(h.text());
      //Set the id in order to internally link the header
      h.attr('id', sh);
      //Append the link to the index
      indexContent.append('<div class="index jhni_' + h.prop('tagName') +'"><a href="#' + sh + '">' + h.text()  + ' </a></div>');
    }
    if(!container || !$(container).length) {
      //Style to place it fixed in the up-left corner
      knob.attr('class', 'jhni_knob');
      index.attr('class', 'jhni_index');
      indexContent.attr('class', 'jhni_indexContent');
      //Insert the index to the beginning of the body ...
      $('body').prepend(index);
      $('body').prepend(knob);
    } else {
    //
      knob.append('<span>Navigation Index</span>');
      //Insert the index to the selected container ...
      $container = $($(container)[0])
      $container.append(knob);
      $container.append(index);
    }
    //... and hide it by default
    indexContent.hide();
    //Open/Close the index with the knob
    knob.click(function() {
      indexContent = $('#jhni_indexContent');
      if(indexContent.is(':visible')){
        $('#jhni_indexContent').hide(500);
      } else {
        $('#jhni_indexContent').show(250);
      }
    });
  });
}

