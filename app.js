const allPlayers = [
    {name: "Messi", tall: false, scorer: true, fast:true, injuryProne: false, star: false, image:'https://image.shutterstock.com/image-photo/barcelona-feb-23-lionel-messi-600w-1659850378.jpg' },
    {name: "Ronaldo", tall: true, scorer: true, fast: true, injuryProne: false, star: false, image: 'https://image.shutterstock.com/image-illustration/malang-indonesia-november-16-2020-600w-1855868968.jpg'},
    {name: "Puyol", tall: false, scorer: false, fast: false, injuryProne: true, star: false, image: 'https://image.shutterstock.com/image-photo/barcelona-sept-17-carles-puyol-600w-88689415.jpg'},
    {name: "Modric", tall: false, scorer: false, fast: true, injuryProne: true, star: false, image: 'https://image.shutterstock.com/image-photo/kyiv-ukraine-december-1-2020-600w-1867701745.jpg'},
    {name: "Chicharito", tall: true, scorer: true, fast: false, injuryProne: true, star: false, image: 'https://image.shutterstock.com/image-photo/barcelona-september-4-javier-chicharito-600w-91559057.jpg'},
    {name: "Pique", tall: true, scorer: false, fast: false, injuryProne: true, star: false, image: 'https://image.shutterstock.com/image-photo/barcelona-oct-24-gerard-pique-600w-2087015599.jpg'},
    {name: "Maradona", tall: false, scorer: true,fast: false, injuryProne: false, star: false, image: 'https://image.shutterstock.com/image-photo/rome-italy-12102016-diego-armando-600w-1861851037.jpg'},
    {name: "Neuer", tall: false, scorer: false, fast: false ,injuryProne: false, star: false, image:'https://image.shutterstock.com/image-photo/gelsenkirchen-nov-19-2018-manuel-600w-1259512153.jpg'},
    {name: "Ramos", tall: true, scorer: true, fast: true, injuryProne: true, star: false, image: 'https://image.shutterstock.com/image-photo/sergio-ramos-paris-during-french-600w-2084121700.jpg'}
    ]

    let currentPlayers = allPlayers
    let starPlayer = null
    let guesses = 0 


    function startGame(){
        let index = Math.floor(Math.random()*currentPlayers.length)
        console.log(index);
        currentPlayers[index].star = true
        console.log('who is a star Player', currentPlayers[index]);
        starPlayer = currentPlayers[index]

     
    }


    function drawPlayers(){
        let template = ''
        currentPlayers.forEach(player => {
            template += `
            <div class="col-4 my-1 p-1 justify-content-around" onclick="star('${player.name}')">
            <img class="image-fluid " src="${player.image}" alt="">
            <h5 class= "text-center"><b>${player.name}</b></h5>
        </div>

            `
        })
        console.log(template);
        document.getElementById('players').innerHTML = template
    }


    function drawScore(){
        document.getElementById('guess-count').innerText = 'guesses: ' + guesses

        drawScore
    }


    
    function guessTall(){
        let tallPlayers = currentPlayers.filter( p => p.tall == true)
        console.log(tallPlayers);
        currentPlayers = tallPlayers
        
        drawPlayers()
    }


    function guessScorer(){
        let scorerPlayers = currentPlayers.filter( p => p.scorer ==true)
        console.log(scorerPlayers);
        currentPlayers = scorerPlayers

        drawPlayers()
    }

    function guessFast(){
        let fastPlayers = currentPlayers.filter(p => p.fast == true)
        console.log(fastPlayers);
        currentPlayers = fastPlayers

        drawPlayers()
    }


    function guessInjuryProne(){
        let injuryPlayers = currentPlayers.filter(p => p.injuryProne == true)
        console.log(injuryPlayers);
        currentPlayers = injuryPlayers

        drawPlayers()
    }

    function guess(attirbute){
        guesses++
        let filteredPlayers = currentPlayers.filter(p => p[attirbute] == starPlayer[attirbute])
        console.log(filteredPlayers);
        currentPlayers = filteredPlayers

        drawPlayers()
        drawScore()
    }

    function star(name){
        let found = currentPlayers.find(p => p.name == name)
        console.log(found);
        if(found.name == starPlayer.name){
            // window.alert('You found them in ${guesses} sucess')
            toast(`You found them in ${guesses} guesses`, 'success')
        }
            else { 
         
                toast(`you suck you didn't find them SMHHHHH`, 'error')
            }
    }


    function toast(title, icon){
       
        Swal.fire({
          title: title,
          icon: icon,
          toast: true,
          showConfirmButton: false,
          timer: 5000,
          timerProgressBar: true,
          position: 'top',
        })
      }

    startGame()
    drawPlayers()