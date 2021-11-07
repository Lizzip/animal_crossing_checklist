const store = localStorage;

const filterConfigKey = "acnh-filterConfigData";
const collectionDataKey = "acnh-collectionData";

function App(selection, display){

  this.selection = selection;
  this.display = display;

  const defaultFilterConfigData = {
    fishChecked: true, bugChecked: true, nowChecked: false, caughtChecked: false, leavingChecked: false
  };

  this.saveFilterConfigToLocalStore = function(){
    store.setItem(filterConfigKey, JSON.stringify(this.filterConfigData));
  }

  this.loadDataFromLocalStore = function(){
    // Get saved data from storage and convert to array
    this.saveData = store.getItem(collectionDataKey);
    if(this.saveData) this.saveData = this.saveData.split(',')
    else this.saveData = [];

    this.filterConfigData = JSON.parse(store.getItem(filterConfigKey));
    if(!this.filterConfigData) {
      this.filterConfigData = defaultFilterConfigData;
      this.saveFilterConfigToLocalStore();
    }
  }

  this.handleFilterCheckboxClicked = function(key){
    this.filterConfigData[key] = !this.filterConfigData[key];
    this.setupDisplay(); 
    this.saveFilterConfigToLocalStore();
  }

  this.setupSelection = function(){
    // Bind all filter checkboxes to redraw table on click
    $(this.selection).find("#fishCheckbox").click(() => { 
      this.handleFilterCheckboxClicked('fishChecked');
    });
    $(this.selection).find("#bugCheckbox").click(() => { 
      this.handleFilterCheckboxClicked('bugChecked');
    });
    $(this.selection).find("#paintingCheckbox").click(() => { 
      this.handleFilterCheckboxClicked('paintingChecked');
    });
    $(this.selection).find("#statueCheckbox").click(() => { 
      this.handleFilterCheckboxClicked('statueChecked');
    });
    $(this.selection).find("#fossilCheckbox").click(() => { 
      this.handleFilterCheckboxClicked('fossilChecked');
    });
    $(this.selection).find("#plantsCheckbox").click(() => { 
      this.handleFilterCheckboxClicked('plantsChecked');
    });
    $(this.selection).find("#nowCheckbox").click(() => { 
      this.handleFilterCheckboxClicked('nowChecked');
    });
    $(this.selection).find("#caughtCheckbox").click(() => { 
      this.handleFilterCheckboxClicked('caughtChecked');
    });
    $(this.selection).find("#leavingCheckbox").click(() => { 
      this.handleFilterCheckboxClicked('leavingChecked');
    });
  }

  this.setupDisplay = function(){
    const fishChecked = this.filterConfigData.fishChecked;
    const bugChecked = this.filterConfigData.bugChecked;
    const paintingChecked = this.filterConfigData.paintingChecked;
    const statueChecked = this.filterConfigData.statueChecked;
    const fossilChecked = this.filterConfigData.fossilChecked;
    const plantsChecked = this.filterConfigData.plantsChecked;
    const nowChecked = this.filterConfigData.nowChecked;
    const caughtChecked = this.filterConfigData.caughtChecked;
    const leavingChecked = this.filterConfigData.leavingChecked;

    // Set filter checkbox values according to config saved in local storage
    document.getElementById("fishCheckbox").checked = fishChecked;
    document.getElementById("bugCheckbox").checked = bugChecked;
    document.getElementById("paintingCheckbox").checked = paintingChecked;
    document.getElementById("statueCheckbox").checked = statueChecked;
    document.getElementById("fossilCheckbox").checked = fossilChecked;
    document.getElementById("plantsCheckbox").checked = plantsChecked;
    document.getElementById("nowCheckbox").checked = nowChecked;
    document.getElementById("caughtCheckbox").checked = caughtChecked;
    document.getElementById("leavingCheckbox").checked = leavingChecked;  

    //Filter table based on which checkboxes have been checked
    this.filter(fishChecked, bugChecked, paintingChecked, statueChecked, fossilChecked, plantsChecked, nowChecked, caughtChecked, leavingChecked);
  }

  this.getMonth = function(){
    const now = new Date();
    return monthNames[now.getMonth()];
  }

  this.getNextMonth = function(){
    const now = new Date();
    return monthNames[(now.getMonth() + 1) % 12];
  }

  this.filter = function(fish, bug, painting, statue, fossil, plant, now, caught, leaving){
    let show = [];
    const month = this.getMonth();

    if(fish) show.push(...fishData);
    if(bug) show.push(...bugData);
    if(painting) show.push(...paintingData)
    if(statue) show.push(...statueData)
    if(fossil) show.push(...fossilData)
    if(plant) show.push(...plantData)

    if(now){
      show = show.filter(e => (e.month.toLowerCase().includes("all") || e.month.toLowerCase().includes(month)))
    }

    if(caught){
      show = show.filter(e => {
        const critterIndex = critterNames.indexOf(e.name).toString();
        return this.saveData.indexOf(critterIndex) == -1;
      });
    }

    if(leaving){
      const nextMonth = this.getNextMonth();
      show = show.filter(e => (e.month.toLowerCase().includes(month) && !e.month.toLowerCase().includes(nextMonth)))
    }

    this.clearTable();
    this.drawTable(show);
  }

  this.clearTable = function(){
    $(this.display).find("#displayTable > tbody").empty();
  }

  this.tryCatchSomething = function(name){
    if(critterNames.indexOf(name) > -1){
      this.updateData(critterNames.indexOf(name));
    }
  }

  this.drawTable = function(show){
    show.forEach(e => {
      let checked = "";
      const critterIndex = critterNames.indexOf(e.name).toString();
      if(this.saveData.indexOf(critterIndex) > -1) checked = "checked=true";

      let check = `<div class="form-check form-check-inline"><input class="form-check-input" ${checked} type="checkbox" id="${e.name}" value="${e.name}"><label class="form-check-label" for="${e.name}"></label></div>`;
      let row = `<tr><td>${check}</td><td>${e.name}</td><td>${e.type}</td><td>${e.price}</td><td>${e.location}</td><td>${e.time}</td><td>${e.month}</td></tr>`;

      $(this.display).find("#displayTable > tbody").append(row);

      document.getElementById(e.name).addEventListener("click", () => {
          this.tryCatchSomething(e.name)
      }, false);
    });

  }

  this.updateData = function(newData){
    const critter = critterNames[newData];
    const newDataString = newData.toString();
    const isChecked = $(this.display).find(`[id='${this.escapeAllSingleQuotes(critter)}']`).is(":checked");
    const index = this.saveData.indexOf(newDataString);

    if(isChecked && index < 0) this.saveData.push(newDataString);
    if(!isChecked && index > -1) this.saveData.splice(index, 1);

    //save to local storage
    store.setItem(collectionDataKey, this.saveData.toString());
  }

  this.escapeAllSingleQuotes = function(value){
    return value.replace(/'/g, "\\'");
  }
}
