define([

  'underscore'
  ,'lateralus'

  ,'text!./template.mustache'

  ,'aenima/components/modal/main'

  ,'aenima/utils'

], function (

  _
  ,Lateralus

  ,template

  ,ModalComponent

  ,aenimaUtils

) {
  'use strict';

  var Base = ModalComponent.View;
  var baseProto = Base.prototype;

  var HelpComponentView = Base.extend({
    template: template

    ,lateralusEvents: _.extend({
      userRequestToggleHelpModal: function () {
        this.hidableView.toggle();
      }

      ,requestQuickCloseHelp: function () {
        this.hidableView.quickHide();
      }
    }, baseProto.lateralusEvents)

    /**
     * @param {Object} [options] See http://backbonejs.org/#View-constructor
     */
    ,initialize: function () {
      baseProto.initialize.apply(this, arguments);
    }

    /**
     * @override
     */
    ,getTemplateRenderData: function () {
      return _.extend(baseProto.getTemplateRenderData.apply(this, arguments), {
        metaKey: aenimaUtils.isMac() ? '⌘' : 'Ctrl'
      });
    }
  });

  return HelpComponentView;
});
