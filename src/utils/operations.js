export const getRandomCountries = (countries,numElements) =>{
    let elementsSelected = [];
    while (elementsSelected.length < numElements) {
        let randomIndex = parseInt((Math.random() * countries.length)); 
        let exist = elementsSelected.some((val) => val.name.official === countries[randomIndex].name.official);
        if (!exist) {
            elementsSelected.push(countries[randomIndex]); 
         }
    }
    return elementsSelected;
}

export const load = (src) => {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.addEventListener('load', resolve);
        image.addEventListener('error', reject);
        image.src = src;
    });
}

export const getQuizQuestions = (question = null) => {
    let questions = [
        'Which is the capital of $text ?',
        'Which country does this flag $icon belongs to?',
        'Which is the region of $text ?',
        'Which is the currency of $text ?',
        'Which is the FIFA name of $text ?',
        'Which is the language of $text ?',
        'Which is the measure of area of $text ?',
        'Which is the population of $text ?',
        'Which is the car signs of $text ?',
        'Which is the subregion of $text ?'
    ];   

    if (question != null) {
        
        return questions[question];
    }

    return questions;
}

const getChoices = (question,data) => {
    let options = [];   
    switch (question) {
        case 0:
           
            let capitalIndex = 0;
            while (options.length < 4) {
                data[capitalIndex].hasOwnProperty('capital') ? options.push(data[capitalIndex].capital[0]) :  options.push('NONE'); 
                capitalIndex++;
            }            
            break;         
        case 1:
           
            let nameIndex = 0;
            while (options.length < 4) {
                data[nameIndex].hasOwnProperty('name') ? options.push(data[nameIndex].name.common) : options.push('NONE'); 
                nameIndex++;
            } 
            break;
        case 2:
            
            let regionIndex = 0;
            while (options.length < 4) {
                let value = data[regionIndex].hasOwnProperty('region') ? data[regionIndex].region : 'NONE';  
                if (!options.includes(value)) {
                    options.push(value);
                }
                regionIndex++;
            }
            break;
        case 3:
           
            let currencyIndex = 0;
            while (options.length < 4) {
                if (data[currencyIndex].hasOwnProperty('currencies')) {
                    let curr = Object.values(data[currencyIndex].currencies);
                    if (!options.includes(curr[0].name)) {
                        options.push(curr[0].name);
                    }
                    
                } else {
                    options.push('NONE');
                }
                currencyIndex++;
            }             
            break;
        case 4:
            
            let fifaIndex = 0;
            while (options.length < 4) {
                let value = data[fifaIndex].hasOwnProperty('fifa') ? data[fifaIndex].fifa :  'NONE'; 
                if (!options.includes(value)) {
                    options.push(value);
                } 
                fifaIndex++;
            }
            break;
        case 5:
           
            let languageIndex = 0;
            while (options.length < 4) {
                if (data[languageIndex].hasOwnProperty('languages')) {
                    let lang = Object.values(data[languageIndex].languages);
                    if (!options.includes(lang[0])) {
                       options.push(lang[0]);
                    } 
                    
                } else {
                    options.push('NONE'); 
                }
                languageIndex++;
            }           
            break;
        case 6:
            
            let areaIndex = 0;
            while (options.length < 4) {
               data[areaIndex].hasOwnProperty('area') ? options.push(data[areaIndex].area.toString()) : options.push('NONE');
               areaIndex++;
            }              
            break;
        case 7:
           
            let populationIndex = 0;
            while (options.length < 4) {
                data[populationIndex].hasOwnProperty('population') ? options.push(data[populationIndex].population.toString()) : options.push('NONE');
                populationIndex++;
            }         
            break;    
        case 8:            
           
            let carIndex = 0;
            while (options.length < 4) {
                let value = data[carIndex].hasOwnProperty('car') && data[carIndex].car.hasOwnProperty('signs') ? data[carIndex].car.signs[0] : options.push('NONE');
                if (!options.includes(value)) {
                    options.push(value);
                } 
                carIndex++; 
            } 
            break;
        default:
           
            let subregionIndex = 0;
            while (options.length < 4) {
                let value = data[subregionIndex].hasOwnProperty('subregion') ? data[subregionIndex].subregion : 'NONE';
                if (!options.includes(value)) {
                    options.push(value);
                } 
                subregionIndex++;
            }
            break;
    }
    return {options,answer:options[0]};
}

export const sortAnswers = (answers) =>{
    for (let i = answers.length -1; i > 0; i--) {
       let j = Math.floor(Math.random() * i);
       let k = answers[i];
       answers[i] = answers[j];
       answers[j] = k;
     }
     return answers;
}

export const getCountries = async () => {
    let result = await fetch('https://restcountries.com/v3.1/all');
    let countries = await result.json();
    return countries;
}

export const createGame = (countries) => {
    let gameArr = [];
    //console.log(countries);
    for (let index = 0; index < 10; index++) {
        let countriesGame = getRandomCountries(countries,20);
        let quest = getQuizQuestions(index);
        let results = getChoices(index,countriesGame);
        let game = {
            correctCountry: countriesGame[0],
            correctAns: results.answer,
            question: quest.includes('$text') ? quest.replace('$text',countriesGame[0].name.official) : quest.replace('$icon',countriesGame[0].flag),
            //choices: sortAnswers(options)
            choices: sortAnswers(results.options)
        }
        gameArr.push(game);
    }
    return gameArr;
}
