function AddRecipeController($scope, $rootScope, $location, Upload, DataService) {
    const ingredients = []

    $scope.addIngredient = function() {
        const { name, quantity } = $scope
        ingredients.push({ name, quantity })
        $scope.ingredients = ingredients
        console.log('Ingredient added')
    }

    $scope.addRecipe = function() {
        const { title, recipeImg, description, ingredients } = $scope
        console.log({ title, recipeImg, description, ingredients })
        DataService.addRecipe({ title, recipeImg, description, ingredients })
            .then(() => $location.path('/'))
    }
    
    $scope.fileSelected = (files) => {
        if (files && files.length) {
            $scope.file = files[0];
        }
    }

    $scope.uploadFile = function() {

        const url = '/upload' 
        const file = $scope.file

        Upload.upload({ url, file })
            .success((data) => console.log(data, 'uploaded'))

    }
}

module.exports = AddRecipeController
