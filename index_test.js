const expect = chai.expect;

function createApp(selection, display){
  const dummySelection = selection || document.createElement('div');
  const dummyDisplay = display || document.createElement('div');
  const app = new App(dummySelection, dummyDisplay);
  return app;
}

describe("App", function() {

  describe("Constructor", function(){
    it("should set the display and selection elements", function(){
      const dummySelection = document.createElement('div');
      dummySelection.setAttribute("id", "selection");
  
      const dummyDisplay = document.createElement('div');
      dummyDisplay.setAttribute("id", "display");
  
      const app = createApp(dummySelection, dummyDisplay);
      expect(app.selection.id).to.equal("selection");
      expect(app.display.id).to.equal("display");
    });
  });

  describe("Storage", function(){

    describe("Saving", function(){
      let storageGetStub, storageSetStub;

      beforeEach(()=>{
        storageSetStub = sinon.stub(localStorage, 'setItem');
        storageGetStub = sinon.stub(localStorage, 'getItem');
      });

      afterEach(()=>{
        sinon.restore();
      });

      it.skip("updateData - should save new caught critters to storage", function(){

      });

      it.skip("updateData - should remove uncaught critter from storage", function(){

      });

      it("saveFilterConfigToLocalStore - should save filters to storage", function(){
        const testFilterConfigData = {fishChecked: false, bugChecked: false, nowChecked: true, caughtChecked: false, leavingChecked: true};
        const app = createApp();

        app.filterConfigData = testFilterConfigData;
        app.saveFilterConfigToLocalStore();

        sinon.assert.calledOnce(storageSetStub);
        const args = storageSetStub.firstCall.args;

        expect(args[0]).to.equal("acnh-filterConfigData");
        expect(args[1]).to.equal(JSON.stringify(testFilterConfigData));
      });
    });

    describe("Loading", function(){

      it.skip("loadDataFromLocalStore - load critters and filters from storage", function(){

      });
    });
  });
});