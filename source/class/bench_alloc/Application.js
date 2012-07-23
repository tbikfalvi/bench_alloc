/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

/* ************************************************************************

#asset(bench_alloc/*)

************************************************************************ */

/**
 * This is the main application class of your custom application "bench_alloc"
 */
qx.Class.define("bench_alloc.Application",
{
  extend : qx.application.Standalone,


  construct : function()
  {
    this.__header = new bench_alloc.Header();
  },

  destruct : function()
  {
    this._disposeObjects( "__header" );
  },
    
  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    /**
     * This method contains the initial application code and gets called 
     * during startup of the application
     * 
     * @lint ignoreDeprecated(alert)
     */

    __header: null,

    __userName: "",

    main : function()
    {
      // Call super class
      this.base(arguments);

      // Enable logging in debug variant
      if (qx.core.Environment.get("qx.debug"))
      {
        // support native logging capabilities, e.g. Firebug for Firefox
        qx.log.appender.Native;
        // support additional cross-browser console. Press F7 to toggle visibility
        qx.log.appender.Console;
      }

      /*
      -------------------------------------------------------------------------
        Below is your actual application code...
      -------------------------------------------------------------------------
      */

      var that = this;
      var doc = this.getRoot();
      var composite = new qx.ui.container.Composite();
      composite.setLayout(new qx.ui.layout.VBox());

      composite.add(this.__header);

      var toolbar = new qx.ui.toolbar.ToolBar();
      composite.add(toolbar);

      var changeUserButton = new qx.ui.toolbar.Button();
      changeUserButton.setToolTipText("Change user");
      changeUserButton.setIcon("bench_alloc/test.png");
      changeUserButton.setShow("icon");
      changeUserButton.addListener("execute", function() {
        that.__header.updateUser("Bob");
      });
      toolbar.add(changeUserButton);

      doc.add(composite, {edge:0});
    }
  }
});
