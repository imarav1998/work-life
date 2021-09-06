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

  self.message = ko.computed(function () {});
}

ko.applyBindings(new healthyLife(), document.querySelector("#ko-container"));
