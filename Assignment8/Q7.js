for (var i = 0; i < 10; i++) {
    setTimeout(function() { console.log(i); }, 1000); }

//Error Due to var hoisting it will print 10 10 10 upto 10 times .