function Clock (){
    [this.hour, this.minute, this.second] = new Date().toLocaleTimeString("en-US").split(/:| /);
    setInterval(this._tick.bind(this), 1000);
}

Clock.prototype.printTime = function () {
    // debugger
    console.log(`${this.hour}:${this.minute}:${this.second}`);
}

Clock.prototype._tick = function() {
    // debugger
    if (this.minute === "60"){
        let hour = (parseInt(this.hour, 10) + 1) % 12;
        this.minute = '00';
        this.hour = `${hour}`;
    } else if (this.second === "60"){
        let min = parseInt(this.minute, 10) + 1;
        this.second = '00';
        this.minute = `${min}`;
    } else {
        let sec = parseInt(this.second, 10) + 1;
        this.second = `${sec}`;
    }
    this.printTime();
}
