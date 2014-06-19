FeaturedView = function() {
    famous.core.View.apply(this, arguments);

    createBacking.call(this);
    createNoteworthy.call(this);
    createStaffPicks.call(this);
}

FeaturedView.DEFAULT_OPTIONS = {
    angle: 0,
    xOffset: 15,
    fontSize: 22
};

var createBacking = function() {
    var backSurface = new famous.surfaces.ImageSurface({
        size: [320, 164],
        content : './img/band.png',
        properties : {
            pointerEvents : 'none'
        }
    });

    this.add(backSurface);
};

var createNoteworthy = function() {
    var surface = new famous.core.Surface({
        size: [true, true],
        content: 'Noteworthy',
        properties: {
            color: 'black',
            fontSize: this.options.fontSize + 'px',
            textTransform: 'uppercase',
            pointerEvents : 'none'
        }
    });

    var modifier = new famous.modifiers.StateModifier({
        transform: famous.core.Transform.thenMove(famous.core.Transform.rotateZ(this.options.angle), [this.options.xOffset, 30, 0])
    });

    this.add(modifier).add(surface);
};

var createStaffPicks = function() {
    var surface = new famous.core.Surface({
        size: [undefined, true],
        content: 'Timbrus staff picks',
        properties: {
            color: 'white',
            fontSize: this.options.fontSize + 'px',
            textTransform: 'uppercase',
            pointerEvents : 'none'
        }
    });

    var modifier = new famous.modifiers.StateModifier({
        transform: famous.core.Transform.thenMove(famous.core.Transform.rotateZ(this.options.angle), [this.options.xOffset, 67, 0])
    });

    this.add(modifier).add(surface);
};

FeaturedView.prototype = Object.create(famous.core.View.prototype);
FeaturedView.prototype.constructor = FeaturedView;
