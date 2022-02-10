

const intro = "Hi, my name is"
function introduction(name) {
    return `${intro} ${name}.`; 
}

introduction("Aki")
introduction("Samip")

function introductionWithLanguage(name, language) {
return `Hi, my name is ${name} and I am learning to program in ${language}.` ;
}

introductionWithLanguage("Aki", "Ember.js")

function introductionWithLanguageOptional(name, language = "JavaScript") {
return `Hi, my name is ${name} and I am learning to program in ${language}.`    
}

introductionWithLanguageOptional("Gracie")