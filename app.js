angular.module('blog', []);
angular.module('blog').controller('Rest', function ($scope, $http){
  $http.get('https://api-fake-blog.onrender.com/postagens')
    .then(function(response) {
        $scope.publicacoes = response.data;
    })
    .catch(function(error) {
        console.error('Erro ao carregar as postagens:', error);
    });
  $scope.index = function (id) {
      localStorage.setItem("index", id);
  };
});


angular.module('myApp', []);
angular.module('myApp').controller('RestNot', function ($scope, $http) {
  var id = localStorage.getItem("index");
  $http.get('https://api-fake-blog.onrender.com/postagem/' + id)
      .then(function(response) {
          $scope.noticia = response.data;
      })
      .catch(function(error) {
          console.error('Erro ao carregar os detalhes da notícia:', error);
      });
});

