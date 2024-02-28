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
            /*for (let index = 0; index < data.length; index++) {
               // console.log(data[index]);
              data[index].hasOwnProperty('capital') ? options.push(data[index].capital[0]) :  options.push('NONE');    
               
            }*/
            let capitalIndex = 0;
            while (options.length < 4) {
                data[capitalIndex].hasOwnProperty('capital') ? options.push(data[capitalIndex].capital[0]) :  options.push('NONE'); 
                capitalIndex++;
            }            
            break;         
        case 1:
            /*for (let index = 0; index < data.length; index++) {
                //options.push(data[index].name.common); 
                data[index].hasOwnProperty('name') ? options.push(data[index].name.common) :  options.push('NONE');               
            }*/
            let nameIndex = 0;
            while (options.length < 4) {
                data[nameIndex].hasOwnProperty('name') ? options.push(data[nameIndex].name.common) : options.push('NONE'); 
                nameIndex++;
            } 
            break;
        case 2:
            /*for (let index = 0; index < data.length; index++) {                  
                //data[index].hasOwnProperty('region') ? options.push(data[index].region) :  options.push('NONE'); 
                let value = data[index].hasOwnProperty('region') ? data[index].region : 'NONE';  
                if (!options.includes(value)) {
                    options.push(value);
                }              
            }*/
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
           /* for (let index = 0; index < data.length; index++) {
               // console.log(data[index]);
               // let curr = data[index].hasOwnProperty('currencies') ? Object.values(data[index].currencies) : 'NONE'; 
                //options.push(curr[0].name);   
                if (data[index].hasOwnProperty('currencies')) {
                    let curr = Object.values(data[index].currencies);
                    if (!options.includes(curr[0].name)) {
                        options.push(curr[0].name);
                    }
                    
                } else {
                    options.push('NONE');
                }                
            }   */
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
            /*for (let index = 0; index < data.length; index++) {
                //options.push(data[index].fifa);    
               let value = data[index].hasOwnProperty('fifa') ? data[index].fifa :  'NONE'; 
                if (!options.includes(value)) {
                    options.push(value);
                }            
            }*/
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
            /*for (let index = 0; index < data.length; index++) {
                if (data[index].hasOwnProperty('languages')) {
                    let lang = Object.values(data[index].languages);
                    if (!options.includes(lang[0])) {
                       options.push(lang[0]);
                    } 
                    
                } else {
                    options.push('NONE'); 
                }
                                 
            } */
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
            /*for (let index = 0; index < data.length; index++) {                             
                data[index].hasOwnProperty('area') ? options.push(data[index].area.toString()) : options.push('NONE');                  
            }*/
            let areaIndex = 0;
            while (options.length < 4) {
               data[areaIndex].hasOwnProperty('area') ? options.push(data[areaIndex].area.toString()) : options.push('NONE');
               areaIndex++;
            }              
            break;
        case 7:
            /*for (let index = 0; index < data.length; index++) {                 
                data[index].hasOwnProperty('population') ? options.push(data[index].population.toString()) : options.push('NONE');                  
            }    */
            let populationIndex = 0;
            while (options.length < 4) {
                data[populationIndex].hasOwnProperty('population') ? options.push(data[populationIndex].population.toString()) : options.push('NONE');
                populationIndex++;
            }         
            break;    
        case 8:            
            /*for (let index = 0; index < data.length; index++) {                 
                // data[index].hasOwnProperty('car') ? options.push(data[index].car.signs[0]) : options.push('NONE'); 
                let value = data[index].hasOwnProperty('car') && data[index].car.hasOwnProperty('signs') ? data[index].car.signs[0] : options.push('NONE');
                if (!options.includes(value)) {
                    options.push(value);
                }                 
            } */
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
           /* for (let index = 0; index < data.length; index++) {                 
                let value = data[index].hasOwnProperty('subregion') ? data[index].subregion : 'NONE';
                if (!options.includes(value)) {
                    options.push(value);
                }                   
            } */
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
