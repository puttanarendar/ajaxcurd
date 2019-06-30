var app=angular.module("angular_post_demo",["ngRoute"]);
app.config(function($routeProvider)
{
 $routeProvider
 .when('/',{
     templateUrl:'http://localhost/ajaxcrud/Ajax_Controller/getarticlespage',
     controller:'userCtrl'
 })
 .when('/CreateArticle',{
     templateUrl:'http://localhost/ajaxcrud/Ajax_Controller/CreateArticle',
     controller:'createCtrl'
 })
 .when('/ViewArticle/:id',{
     templateUrl:'http://localhost/ajaxcrud/Ajax_Controller/ViewArticle',
     controller:'ViewCtrl'
 })
 .when('/DeleteArticle/:id',{
     templateUrl:'http://localhost/ajaxcrud/Ajax_Controller/DeleteArticle',
     controller:'DeleteCtrl'
 })
});


app.controller('userCtrl',function($scope,$http){
  $http.get("http://localhost/ajaxcrud/Ajax_Controller/getarticles")
  .then(function success(response){
  	//alert(response.data);
      $scope.users=response.data;
      //console.log($scope.users);
  }), function error(err) {

alert(err);
}
});

app.controller('createCtrl',function($scope){
	//alert();
    //$scope.info="create Articles";
    $('#alert').hide();
    $('#submit').click(function(){
    	//alert();
    	var title=$('#title').val();
    	var description=$('#description').val();
    	var datatype=$('#fromdata').serialize();
    	if(title !='' && description !='')
    	{
           $.ajax({
               url:'http://localhost/ajaxcrud/Ajax_Controller/articledata',
               method:'post',
               data:{title:title,description:description},
               cache:false,
               success:function(response)
               {
               	  $('#alert').show();
               	  if(response==true)
               	  {
                  $('#msg').html('Data is Inserted Successfully');
                  location.reload();
                  }
                  else
                  {
                  	$('#msg').html('Data is Not Added');
                  }
               }
           });
    	}
    	else
    	{
    		//alert();
    		$('#alert').show();
    		$('#msg').html("Enter fill all details");
    	}
    })
})

app.controller('ViewCtrl',function($scope,$http,$routeParams){
  $http({
  	url:'http://localhost/ajaxcrud/Ajax_Controller/getdata',
  	method:'get',
  	params:{id:$routeParams.id}
  }).
  then(function(response){
     $scope.form=response.data;
  })
  $scope.updatearticle=function()
  {
    /*$http.post('http://localhost/ajaxcrud/Ajax_Controller/updatedata',info).then(function(response){
       alert(response);
    })*/
    alert();
  }
});
app.controller('DeleteCtrl',function($scope,$http,$routeParams){
    $http({
      url:'http://localhost/ajaxcrud/Ajax_Controller/deletedata',
      method:'get',
      params:{id:$routeParams.id}
    }).then(function(result){
      if(result)
      {
        location.href="http://localhost/ajaxcrud/Ajax_Controller/";
      }
    })
})


