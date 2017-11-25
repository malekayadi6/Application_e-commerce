console.log("debut malek");
$.ajax({
  url: 'http://localhost/back/public/braintree/token',
  type: 'get',
      dataType: 'json',
    }).success(function(data){
      braintree.setup(data.token, 'dropin', {
        
        container: 'payment'
      });
    });
