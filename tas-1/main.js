var sampleText = "JavaScript is a must-now programing langue for modern devoloper "

function modly(newarray) {

          var result = ''

     for (var i of newarray.split (" ") ) {
          result = result + i.split('').reverse().join('') + " "

     }

     return {
          result1 : sampleText.split (' ').reverse().join(' '),
          result2: result.split(' ').reverse().join(' ')
     }
}

     console.log(modly (sampleText));
// console.log(modly(sampleText));

