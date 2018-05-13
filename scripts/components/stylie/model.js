import Lateralus from 'lateralus';

var Base = Lateralus.Component.Model;
var baseProto = Base.prototype;

var StylieComponentModel = Base.extend({
  /**
   * Parameters are the same as http://backbonejs.org/#Model-constructor
   * @param {Object} [attributes]
   * @param {Object} [options]
   */
  initialize: function() {
    baseProto.initialize.apply(this, arguments);
  },
});

export default StylieComponentModel;
