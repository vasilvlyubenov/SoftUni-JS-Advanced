class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footbalPlayers) {
        footbalPlayers.forEach(element => {
            let [name, age, playerValue] = element.split('/');
            age = Number(age);
            playerValue = Number(playerValue);

            const obj = {
                name,
                age,
                playerValue
            };

            let finded = this.invitedPlayers.find(el => el.name === obj.name);

            if (finded) {
                if (finded.playerValue < obj.playerValue) {
                    finded.playerValue = obj.playerValue;
                }
            } else {
                this.invitedPlayers.push(obj);
            }

        });

        const result = this.invitedPlayers.map(el => `${el.name}`);;
        return `You successfully invite ${result.join(', ')}.`;
    }

    signContract(selectedPlayer) {
        let [name, offer] = selectedPlayer.split('/');
        offer = Number(offer);

        const player = this.invitedPlayers.find(el => el.name === name);

        if (!player) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (player.playerValue > offer) {
            const priceDifference = player.playerValue - offer;
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`);
        }

        player.playerValue = 'Bought';

        return `Congratulations! You sign a contract with ${name} for ${offer} million dollars.`;
    }

    ageLimit(name, age) {
        const player = this.invitedPlayers.find(el => el.name === name);

        if (!player) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (player.age < age) {
            const ageDifference = age - player.age;

            if (ageDifference <= 5) {
                return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
            } else if(ageDifference > 5) {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            }
        } else {
            return `${name} is above age limit!`;
        }
    }

    transferWindowResult() {
        const resultArr = ["Players list:"];

        this.invitedPlayers.forEach(el => resultArr.push(`Player ${el.name}-${el.playerValue}`));

        return resultArr.join('\n');
    }
}


let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52", "Kylian Mbappé/23/180"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());