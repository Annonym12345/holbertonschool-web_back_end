export default class Building {
  constructor(sqft) {
    this._sqft = sqft;

    // Vérifie si la classe est étendue
    if (this.constructor !== Building) {
      // Vérifie que la méthode est bien implémentée
      if (this.evacuationWarningMessage === undefined) {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage'
        );
      }
    }
  }

  get sqft() {
    return this._sqft;
  }
}
