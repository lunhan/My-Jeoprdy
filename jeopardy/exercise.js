function getCategory(numberOfCategories){
    //get x amount of categoroes from API
    //let category = fetchCategoriesFromAPI(numberOfCategories);

    return fetchCategoriesFromAPI(numberOfCategories);
}

let categoriesForGame = getCategory(5);
console.log(categoriesForGame);

function getQuestions(categories){
    //initialzing an empty arry of question
    let questionArray = [];
    for (let x = 0; x < categories.lengthl; x++){
        //going through each categpry individually
        let currentCategory = categories[x];
        //getting questions from the API for each category
        let categoryQuestion = fetchQuestionsFromAPI(currentCategory);
        //pushing questions to the empty array
        questionArray.push(categoryQuestion);
    }
    return questionArray;
}

let questionForGame = getQuestions(categoriesForGame);
addToGame(categoriesForGame, questionForGame);