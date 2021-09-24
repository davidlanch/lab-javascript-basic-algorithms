// // Iteration 1: Names and Input
    let hacker1= "Mohammed";
    console.log("The driver's name is " + hacker1);

    let hacker2= "Mohammed";
    console.log(`The navigator's name is ${hacker2}`);

// // // Iteration 2: Conditionals

//     if(hacker1.length >hacker2.length){
//         console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
//     }else if(hacker1.length < hacker2.length){
//         console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.` );
//     }else{
//         console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
//     }

// // // Iteration 3: Loops

//     let count = "";

//     for (let i = 0; i < hacker1.length; i++) {
//         let upper = hacker1[i].toUpperCase()
//         count += upper + " ";

//     }
//     console.log(count);

//     let navRev = "";

//     for (let i = hacker2.length -1 ; i >= 0; i--) {
//         navRev += hacker2[i]
//     }
//     console.log(navRev);

    // let names = [hacker2, hacker1];
    // names.sort();
    // console.log(names)

    if(hacker1 === hacker2) {
        console.log(0);
    }if (hacker1 > hacker2) {
        console.log(1);
    } if (hacker1 < hacker2)
     { console.log(-1);
    }



// Bonus 1:

// let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis justo laoreet, mollis augue malesuada, faucibus ante. Praesent elementum lectus eget ipsum dapibus tempus. Pellentesque volutpat iaculis urna, a auctor eros viverra vitae. Praesent ac sapien eleifend, finibus ex vel, laoreet justo. Aenean nisi nulla, varius ac enim eu, malesuada venenatis est. Proin vestibulum eleifend sapien, nec mattis urna mollis sit amet. Suspendisse a fringilla lectus, ac lacinia massa. Mauris nec lobortis quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ac arcu nulla. Mauris mattis egestas ultrices. Sed in eros quam. Integer posuere, turpis varius convallis vehicula, ante libero gravida arcu, non mollis arcu mi eget libero.

//         Nulla a tristique felis. In auctor molestie bibendum. Etiam rutrum augue eget enim feugiat lacinia. Vestibulum fringilla viverra diam, eget viverra velit pulvinar et. Mauris vitae risus ipsum. In eros lorem, vehicula vitae ante nec, sagittis iaculis dui. Aenean eu augue libero. Donec sed nulla tincidunt, viverra magna non, eleifend nisl. Ut semper nibh vel leo ultricies ornare. Phasellus sit amet turpis neque. Quisque mollis, justo at ultricies finibus, quam lorem efficitur felis, non posuere diam dui id erat. Cras non magna interdum, tempus libero nec, vulputate nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla ut elit quis arcu volutpat blandit.
        
//         Duis posuere aliquam diam, at ultrices sapien fermentum non. Donec vel auctor risus. Morbi eget bibendum libero. Praesent ornare varius arcu, eget maximus tellus tempus at. Nunc ullamcorper, lectus ut pellentesque sagittis, augue lorem elementum nulla, eget finibus dui quam at tortor. Duis tempus non odio quis dapibus. Cras viverra id nisi vel tempor. Ut ut aliquam arcu, at bibendum dolor. Donec porttitor faucibus ex, vel venenatis libero consequat ac. Donec efficitur eleifend convallis. Nullam ullamcorper sem sed consequat scelerisque. Ut elementum mattis vulputate.`;

// function count(string) {
//   return string.length;
// }
// console.log(count(lorem));


// function ocurrence (string , word){
// //     return string.split(word).length -1;
// }

// console.log(ocurrence (lorem , "sapien"))

//     Go to lorem ipsum generator and:

// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
