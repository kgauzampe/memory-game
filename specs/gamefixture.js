const html = `<!DOCTYPE html> 
<html lang="en"> 
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Memory game</title>
    <link rel = "stylesheet" href = "Images/style.css"> 

    

</head>
<body> 
    
    <h> Memory game<h/>
    <h>-Match the Astons</h>
    <span id="timer"></span>
    <button onclick="location.reload()">Restart</button>
    <section class="memory_game">
        <div class="memory-card">
            <img class="back" src = "Images/logo.png" id="logo" alt="logo"/>
            <img class="front" src = "Images/1.jpeg" alt="car1"/>
        </div>
        <div class="memory-card">
                <img class="back" src = "Images/logo.png" alt="logo"/>
                <img class="front" src = "Images/1.jpeg" alt = "car1"/>
            </div>
        <div class="memory-card">
                    <img class="back" src = "Images/logo.png" alt="logo"/>
                    <img class="front" src = "Images/2.jpeg" alt="car2"/>
            </div>
        <div class="memory-card">
                    <img class="back" src = "Images/logo.png" alt="logo"/>
                    <img class="front" src = "Images/2.jpeg" alt="car2"/>
            </div>
        <div class="memory-card">
                    <img class="back" src = "Images/logo.png"alt="logo"/>
                    <img class="front" src = "Images/db11.jpeg" alt="car3"/>
            </div>
        <div class="memory-card">
                    <img class="back" src = "Images/logo.png" alt="logo"/> g
                    <img class="front" src = "Images/db11.jpeg" alt="car3"/>
            </div>
        <div class="memory-card">
                    <img class="back" src = "Images/logo.png" alt="logo"/>
                    <img class="front" src = "Images/vintage2.jpeg" alt="car4"/>
            </div>
        <div class="memory-card">
                     <img class="back" src = "Images/logo.png" alt="logo"/>
                     <img class="front" src = "Images/vintage2.jpeg" alt="car4"/>
            </div>
        <div class="memory-card">
                    <img class="back" src = "Images/logo.png" alt="logo"/>
                    <img class="front" src = "Images/db11black.jpeg" alt="car5"/>
            </div>
        <div class="memory-card">
                     <img class="back" src = "Images/logo.png" alt="logo"/>
                     <img class="front" src = "Images/db11black.jpeg" alt="car5"/>
            </div>
        <div class="memory-card">
                    <img class="back" src = "Images/logo.png" alt="logo"/>
                    <img class="front" src = "Images/vintage.jpeg" alt="car6"/>
            </div>
        <div class="memory-card">
                     <img class="back" src = "Images/logo.png" alt="logo"/>
                     <img class="front" src = "Images/vintage.jpeg" alt="car6"/>
            </div>
    </section>
`
module.exports = html;