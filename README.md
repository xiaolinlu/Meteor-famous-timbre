Famous Meteor Timbre example Famono Style...
============================================

After a couple of requsts I've converted the Timbre example to Meteor using Famono.

# Getting started with Meteor and Famous
Using Meteor this is actually alot simpler than using Famous own starter kit (imho) - And you get Meteor not just the fancy top layer :p

Install Meteor:
```bash
  # Simply install Meteor
  $ curl https://install.meteor.com | /bin/sh
```

For now you also have to download Meteorite... (this is deprecating)
```bash
  # Use the node.js package manager to install meteorite
  $ npm install meteorite
```

Create an empty Meteor app rigged for Famous:
```bash
    # Create a new app "foo"
    $ meteor create foo
    # go into the new app folder
    $ cd foo
    # add the famono package
    #
    # I guess in the Timbre case you could:
    # $ meteor remove insecure
    # $ meteor remove autopublish
    # $ meteor remove standard-app-packages
    # 
    $ mrt add famono
    # hit your editor
    $ subl .
    # fire up the meteor server
    $ meteor
```

# Timbre example
I really just converted / simplified the org code showing some of the features in famono and Meteor.

```bash
  # completely untested - so dont copy paste
  $ git clone http://github.com/raix/Meteor-famous-timbre.git timbre
  $ cd timbre
  $ meteor
  # open your browser on localhost:3000
```

Famono gives you a library scope adapted to your code - it only bundles what you use / need.

`main.js`
```js
  // Rig some famo.us deps
  famousPolyfills;
  famous.core.famous;

  // You can access the library scope directly
  var mainContext = famous.core.Engine.createContext();
  var appView = new AppView();

  mainContext.add(appView);  
```

`StripView.js`
```js
    // OLD SCHOOL USE OF REQUIRE STILL WORKS IN FAMONO:
    var View          = require('famous/core/View');
    var Surface       = require('famous/core/Surface');
    var Transform     = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');
    var ImageSurface  = require('famous/surfaces/ImageSurface');

    // In Meteor this will be a global in the app scope
    StripView = function() {
        famous.core.View.apply(this, arguments);

        _createBackground.call(this);
        _createIcon.call(this);
        _createTitle.call(this);
    }
    // ...
```

# More
For more docs about Famono checkout the repo at [raix/Meteor-famono](https://github.com/raix/Meteor-famono)

Meteor Famous Components is WIP but looking good [gadicc/meteor-famous-components](https://github.com/gadicc/meteor-famous-components)

# Thats about it

Kind regards Morten *(aka RaiX)*