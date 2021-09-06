function healthyLife() {
  var self = this;

  var totalcount = 0;

  self.totalHrs = ko.observable(24);

  self.workCount = ko.observable(0);
  self.sleepCount = ko.observable(0);
  self.familyCount = ko.observable(0);
  self.studyCount = ko.observable(0);

  self.workInc = function () {
    if (totalcount < 24) {
      var countable = self.workCount() + 1;
      self.workCount(countable);
      totalcount =
        self.workCount() +
        self.sleepCount() +
        self.familyCount() +
        self.studyCount();

      var remaining = 24 - totalcount;
      self.totalHrs(remaining);
    }
  };
  self.workDec = function () {
    if (self.workCount() > 0) {
      var countable = self.workCount() - 1;
      self.workCount(countable);
      totalcount =
        self.workCount() +
        self.sleepCount() +
        self.familyCount() +
        self.studyCount();

      var remaining = 24 - totalcount;
      self.totalHrs(remaining);
    }
  };

  self.sleepInc = function () {
    if (totalcount < 24) {
      var countable = self.sleepCount() + 1;
      self.sleepCount(countable);
      totalcount =
        self.workCount() +
        self.sleepCount() +
        self.familyCount() +
        self.studyCount();

      var remaining = 24 - totalcount;
      self.totalHrs(remaining);
    }
  };
  self.sleepDec = function () {
    if (self.sleepCount() > 0) {
      var countable = self.sleepCount() - 1;
      self.sleepCount(countable);
      totalcount =
        self.workCount() +
        self.sleepCount() +
        self.familyCount() +
        self.studyCount();

      var remaining = 24 - totalcount;
      self.totalHrs(remaining);
    }
  };

  self.familyInc = function () {
    if (totalcount < 24) {
      var countable = self.familyCount() + 1;
      self.familyCount(countable);
      totalcount =
        self.workCount() +
        self.sleepCount() +
        self.familyCount() +
        self.studyCount();

      var remaining = 24 - totalcount;
      self.totalHrs(remaining);
    }
  };
  self.familyDec = function () {
    if (self.familyCount() > 0) {
      var countable = self.familyCount() - 1;
      self.familyCount(countable);
      totalcount =
        self.workCount() +
        self.sleepCount() +
        self.familyCount() +
        self.studyCount();

      var remaining = 24 - totalcount;
      self.totalHrs(remaining);
    }
  };

  self.studyInc = function () {
    if (totalcount < 24) {
      var countable = self.studyCount() + 1;
      self.studyCount(countable);
      totalcount =
        self.workCount() +
        self.sleepCount() +
        self.familyCount() +
        self.studyCount();

      var remaining = 24 - totalcount;
      self.totalHrs(remaining);
    }
  };
  self.studyDec = function () {
    if (self.studyCount() > 0) {
      var countable = self.studyCount() - 1;
      self.studyCount(countable);
      totalcount =
        self.workCount() +
        self.sleepCount() +
        self.familyCount() +
        self.studyCount();

      var remaining = 24 - totalcount;
      self.totalHrs(remaining);
    }
  };

  self.message = ko.computed(function () {
    var workPercent = (self.workCount()/24)*100;
    var sleepPercent = (self.sleepCount()/24)*100;
    var familyPercent = (self.familyCount()/24)*100;
    var studyPercent = (self.studyCount()/24)*100;
    var result = '';
    if(sleepPercent <= 42 && sleepPercent >= 25){
      result = result + 'You sleeping habits are good.';
    }
    else if(sleepPercent > 42 && sleepPercent <= 66){
      result = result + 'You spent most of the day sleeping try to do some work be productive.';
    }
    else if(sleepPercent <= 85 && sleepPercent > 66){
      result = result + 'You need to consult good doctor, this may be a condition.';
    }
    else if(sleepPercent > 85 && sleepPercent <= 99){
      result = result + 'You may be suffering from illness.';
    }
    else if(sleepPercent == 100){
      result = result + 'You most probably dead.';
    }
    else if(sleepPercent > 0){
      result = result + 'Try to have some sleep otherwise you will lose your productivity.'
    }
    if(workPercent <= 42 && workPercent >= 25){
      result = result + 'Good work timing.'
    }
    else if(workPercent > 42 && workPercent <= 66){
      result = result + 'Need to decrease the work timing.'
    }
    else if(workPercent <= 85 && workPercent > 66){
      result = result + 'There is much more to do than just work.';
    }
    else if(workPercent > 85 && sleepPercent <= 100){
      result = result+ 'You must be a robot or slave.'
    }
    else if(workPercent > 0){
      result = result+ 'Try to do some work.'
    }
    if(familyPercent <= 16 && familyPercent > 0){
      result = result + 'You have allocated good amount time for family.';
    }
    else if(familyPercent > 16 && familyPercent <= 33){
      result = result + 'You spent more much time with family you may be a home maker or little kid.';
    }
    else if(familyPercent > 33 && familyPercent <= 66){
      result = result + 'You work with your family or you spent too much time with family.';
    }
    else if(familyPercent <= 99 && familyPercent > 66){
      result = result + 'You must be old and you need family care or you maybe sick.';
    }
    else if(familyPercent == 100){
      result = result + 'You must be a newborn baby.';
    }
    if(studyPercent <= 16 && studyPercent > 0){
      result = result + 'You studying habits are good.';
    }
    else if(studyPercent > 16 && studyPercent <= 33){
      result = result + 'You must be preparing for competitive exams.';
    }
    else if(studyPercent <= 66 && studyPercent > 33){
      result = result + 'You must be a researcher or criminal investigator or some kind of nerd and you don\' have a life, go get one.';
    }
    else if(studyPercent > 66 && studyPercent <= 100){
      result = result + 'You may be suffering from mental illness.';
    }
    return result;
  });
}

ko.applyBindings(new healthyLife(), document.querySelector("#ko-container"));
