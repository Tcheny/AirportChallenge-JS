function Airport() {
    this._planes = []
}
Airport.prototype.planes = function (arg) {
  return this._planes;
};

Airport.prototype.clearForLanding = function (plane) {
  this._planes.push(plane)
};

Airport.prototype.clearForTakeOff = function (plane) {
  this._planes.pop(plane)
};
