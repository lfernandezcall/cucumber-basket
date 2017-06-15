function EditRecipeController ($scope, $rootScope, DataService) {
  const ID = $scope.selectedId
  console.log(ID)

  $scope.saveRecipeChanges = function () {
    const {name} = $scope
    console.log({name})
    console.log('This is the &rootScope ID.... ' + $scope.selectedId)

    // DataService.editRecipeById(id, {title, recipeImg, description, ingredients})
    //     .then(console.log(`Sending data to the server to store the data.... `))
  }
}

module.exports = EditRecipeController
