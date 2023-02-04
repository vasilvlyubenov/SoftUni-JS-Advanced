function createAssemblyLine(obj) {
    const resultObj = {
        hasClima(obj) {
            obj.temp = 21;
            obj.tempSettings = 21;
            obj.adjustTemp = () => {
                if (this.temp < this.tempSettings) {
                    this.temp += 1;
                } else if (this.temp > this.tempSettings) {
                    this.temp -= 1;
                }
            };
        },
        hasAudio(obj) {
            obj.currentTrack = {
                    name: null,
                    artist: null,
                },
                obj.nowPlaying = () => {
                    if (this.currentTrack.name !== null && this.currentTrack.artist !== null) {
                        console.log(`Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`);
                    }
                };
        },
        hasParktronic(obj) {
            obj.checkDistance = (distance) => {
                if (distance < 0.1) {
                    console.log('Beep! Beep! Beep!');
                } else if (distance < 0.25) {
                    console.log('Beep! Beep!');
                } else if (distance < 0.5) {
                    console.log('Beep!');
                } else {
                    console.log('');
                }
            };
        }
    };

    return resultObj;
}


const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

