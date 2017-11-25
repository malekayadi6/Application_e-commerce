document.write(5 + 6);
$.ajax({
  url: 'http://localhost/slim-cart-master/public/braintree/token',
  type: 'get',
  dataType: 'json',
  success : function(code_html, statut){
    document.write(5 + 6);    },

  error : function(resultat, statut, erreur){
    document.write(5 + 6);
  },

  complete : function(resultat, statut){
    document.write(5 + 6);
  }
});
