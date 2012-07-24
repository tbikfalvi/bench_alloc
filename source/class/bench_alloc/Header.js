/**
* The Application's header
*/

qx.Class.define("bench_alloc.Header",
{
  extend : qx.ui.container.Composite,

  construct : function()
  {
    this.base( arguments );

    this.setLayout(new qx.ui.layout.HBox)
    this.setAppearance("app-header");

    var title = new qx.ui.basic.Label("Bench Allocation").set({
      allowGrowX: true
    });
    title.setFont(qx.bom.Font.fromString("24px sans-serif bold"));
    this.add(title);

    this.add(new qx.ui.core.Spacer, {flex: 1});

    this.__userLabel = new qx.ui.basic.Label("Unknown User");
    this.add(this.__userLabel);

    this.add(new qx.ui.core.Spacer, {flex: 1});

    var versions = new qx.ui.container.Composite();
    versions.setLayout(new qx.ui.layout.VBox(2));
    versions.add(new qx.ui.basic.Label("Version 0.1"));
    versions.add(new qx.ui.basic.Label("Built using qooxdoo " + qx.core.Environment.get("qx.version")));
    this.add(versions);
  },

  destruct : function()
  {
    this._disposeObjects("__userLabel");
  },

  members:
  {  
    __userLabel       : null,
    
    updateUser: function(userName)
    {
      if (userName == "")
      {
        this.__userLabel.setValue("Unknown User");
      }
      else
      {
        this.__userLabel.setValue("Welcome, " + userName + "!");
      }
    }
  }
});

