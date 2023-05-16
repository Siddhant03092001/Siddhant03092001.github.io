function getBotResponse(input) {
    //rock paper scissors
    if (input == "Can you provied the link of all courses?") {
        return "https://www.sciastra.com/courses/";
    } else if (input == "Number of selection which would done by you team") {
        return "https://www.sciastra.com/selections/";
    } else if (input == "which type of material is used?") {
        return "https://www.sciastra.com/materials/";
    }

    // Simple responses
    if (input == "what is the application form deadline of various exams.") {
        return "You can go to ";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    }
    
    else if (input == "HELLO SHUVIDHA"){
            return "HIIIIIIII";
        }
    
     else {
        return "Try asking something else!";
    }

    
}