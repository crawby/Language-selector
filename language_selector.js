(function() {
    // Wait for the DOM to be fully loaded
    jQuery(document).ready(function() {
      console.log("Language switcher initialized.");
      
      // When the language dropdown changes
      jQuery('#languageSelect').on('change', function() {
        // Get the selected language code
        var chosenLang = jQuery(this).val();
        
        // Hide all language boxes
        jQuery('.langbox').hide();
        
        // Show the box that matches the selected language
        jQuery('.langbox.' + chosenLang).show();
      });
    });
  })();
  