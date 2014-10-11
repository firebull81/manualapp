app.factory('notifier', function(toastr){
  return {
    success: function(msg) {
      toastr.success(msg);
    },
    error: function(msg) {
      toastr.error(msg);
    }
  }
});

toastr.options = {
  "closeButton": false,
  "debug": false,
  "positionClass": "toast-top-right",
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
};