kickstrap.ready(function() {
   // side bar
   $('.bs-docs-sidenav').affix({
      offset: {
         top: function() {
            return $window.width() <= 980 ? 60 : 60 
         },
            bottom: 20
      }
   })
});