function Clock (){
    [this.hour, this.minute, this.second] = new Date().toLocaleTimeString("en-US").split(/:| /);
    // setInterval(this._tick.bind(this), 1000);
}

Clock.prototype.printTime = function () {
    debugger
    console.log(`${this.hour}:${this.minute}:${this.second}`);
}

Clock.prototype._tick = function() {
    debugger
    let sec = parseInt(this.second, 10) + 1
    this.second = `${sec}`;
    
    this.printTime();
}
