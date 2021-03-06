const loadButton = document.getElementById('load')

loadButton.addEventListener('click', function(){
    load()
})

function load(){
    $.ajax({
        url: 'https://randomuser.me/api/?results=16',
        dataType: 'json',
        success: function (data) {
            let spelers = []
            let wedstrijden = []
            let wedstrijden1 = []
            let wedstrijden2 = []
            let wedstrijden3 = []

            function shuffleArray(array) {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i * 1));
                    [array[i], array[j]] = [array[j], array[i]]
                }

                return array
            }

            function winRuler(array) {
                for (let i = 0; i < array.length; i = i + 1) {
                    let j = Math.floor(Math.random() * 2);

                    if (j == 0) {
                        j = false
                    } else {
                        j = true
                    }

                    array[i].speler1.win = j
                    array[i].speler2.win = !j

                }

                return array
            }

            for (let i = 0; i < data.results.length; i++) {
                spelers.push({
                    'id': data.results[i].login.uuid,
                    'name': data.results[i].name.first,
                    'win': false,
                })
            }

            spelers = shuffleArray(spelers)

            for (let i = 0; i < data.results.length; i += 2) {
                wedstrijden.push({
                    'speler1': spelers[i],
                    'speler2': spelers[i + 1]
                })
            }

            winRuler(wedstrijden)

            console.log("First match winners:")

            let firstMatchContainer = document.querySelector('.match-container-1')
            let firstMatchParticipants = firstMatchContainer.getElementsByClassName('match-components')
            let firstMatchWinnerDisPlayElement = firstMatchContainer.getElementsByClassName('winner')
            let firstMatchWinner = []

            for (let i = 0; i < firstMatchParticipants.length; i++){
                let firstMatchPlayer1 = winRuler(wedstrijden[i].speler1)
                let firstMatchPlayer2 = winRuler(wedstrijden[i].speler2)
                firstMatchParticipants[i].innerHTML = firstMatchPlayer1.name + " VS " + firstMatchPlayer2.name

                if(firstMatchPlayer1.win){
                    firstMatchWinner.push(firstMatchPlayer1)
                }
                else{
                    firstMatchWinner.push(firstMatchPlayer2)
                }

                firstMatchWinnerDisPlayElement[i].innerHTML = "Winnaar! \n" + firstMatchWinner[i].name

                console.log(firstMatchWinner[i])
            }








            for (let i = 0; i < firstMatchWinner.length; i += 2) {
                wedstrijden1.push({
                    'speler1': firstMatchWinner[i],
                    'speler2': firstMatchWinner[i + 1]
                })
            }

            winRuler(wedstrijden1)

            console.log("Second match winners:")

            let secondMatchContainer = document.querySelector('.match-container-2')
            let secondMatchParticipants = secondMatchContainer.getElementsByClassName('match-components')
            let secondMatchWinnerDisplayElement = secondMatchContainer.getElementsByClassName('winner')
            let secondMatchWinner = []

            for (let i = 0; i < secondMatchParticipants.length; i++){
                let secondMatchPlayer1 = winRuler(wedstrijden1[i].speler1)
                let secondMatchPlayer2 = winRuler(wedstrijden1[i].speler2)
                secondMatchParticipants[i].innerHTML = secondMatchPlayer1.name + " VS " + secondMatchPlayer2.name
                if(secondMatchPlayer1.win){
                    secondMatchWinner.push(secondMatchPlayer1)
                } else{
                    secondMatchWinner.push(secondMatchPlayer2)
                }

                secondMatchWinnerDisplayElement[i].innerHTML = "Winnaar! \n" + secondMatchWinner[i].name

                console.log(secondMatchWinner[i])
            }





            for (let i = 0; i < secondMatchWinner.length; i += 2) {
                wedstrijden2.push({
                    'speler1': secondMatchWinner[i],
                    'speler2': secondMatchWinner[i + 1]
                })
            }

            winRuler(wedstrijden2)

            console.log("Third match winners:")

            let thirdMatchContainer = document.querySelector('.match-container-3')
            let thirdMatchParticipants = thirdMatchContainer.getElementsByClassName('match-components')
            let thirdMatchWinnerDisplayElement = thirdMatchContainer.getElementsByClassName('winner')
            let thirdMatchWinner = []

            for (let i = 0; i < thirdMatchParticipants.length; i++){
                let thirdMatchPlayer1 = winRuler(wedstrijden2[i].speler1)
                let thirdMatchPlayer2 = winRuler(wedstrijden2[i].speler2)
                thirdMatchParticipants[i].innerHTML = thirdMatchPlayer1.name + " VS " + thirdMatchPlayer2.name
                if(thirdMatchPlayer1.win){
                    thirdMatchWinner.push(thirdMatchPlayer1)
                } else{
                    thirdMatchWinner.push(thirdMatchPlayer2)
                }

                thirdMatchWinnerDisplayElement[i].innerHTML = "Winnaar! \n" + thirdMatchWinner[i].name
                console.log(thirdMatchWinner[i])
            }





            for (let i = 0; i < thirdMatchWinner.length; i += 2) {
                wedstrijden3.push({
                    'speler1': thirdMatchWinner[i],
                    'speler2': thirdMatchWinner[i + 1]
                })
            }

            winRuler(wedstrijden3)

            console.log("Final winner:")

            let fourthMatchContainer = document.querySelector('.match-container-4')
            let fourthMatchParticipants = fourthMatchContainer.getElementsByClassName('match-components')
            let fourthMatchWinnerDisplayElement = fourthMatchContainer.getElementsByClassName('winner')
            let fourthMatchWinner = []

            for (let i = 0; i < fourthMatchParticipants.length; i++){
                let fourthMatchPlayer1 = winRuler(wedstrijden3[i].speler1)
                let fourthMatchPlayer2 = winRuler(wedstrijden3[i].speler2)
                fourthMatchParticipants[i].innerHTML = fourthMatchPlayer1.name + " VS " + fourthMatchPlayer2.name
                if(fourthMatchPlayer1.win){
                    fourthMatchWinner.push(fourthMatchPlayer1)
                } else{
                    fourthMatchWinner.push(fourthMatchPlayer2)
                }

                fourthMatchWinnerDisplayElement[i].innerHTML = "Winnaar! \n" + fourthMatchWinner[i].name
                console.log(fourthMatchWinner[i])
            }
        }
    })
}
