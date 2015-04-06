var StatusField = (function () {
    function StatusField() {
        this.indicators = [];
        this.indicators.push(new StatusIndicator());
    }
    return StatusField;
})();
