export function dataMaker(graphType, dataset = []) {
  switch (graphType) {
    case "2":
      return barPrepperLocation(dataset);
      break;
    case "3":
      return barPrepperTime(dataset);
      break;
    case "1":
      return streamPrepper(dataset);
      break;
    default:
      return null;
  }
}

function barPrepperLocation(dataset) {
  let keys = dataset.map(data => data.location).filter(onlyUnique);

  let reslt = [];
  for (let key of keys) {
    reslt.push({
      date: key,
      Submissions: dataset.map(data => data.location).filter(x => x === key)
        .length
    });
  }
  return reslt;
}

function barPrepperTime(dataset) {
  let keys = dataset
    .map(data => data.submissionDate)
    .map(date => new Date(Date.parse(date)))
    .map(date2 => date2.toDateString())
    .filter(onlyUnique);

  let reslt = [];
  for (let key of keys) {
    reslt.push({
      date: key,
      Submissions: dataset
        .map(data => data.submissionDate)
        .map(date => new Date(Date.parse(date)))
        .map(date2 => date2.toDateString())
        .filter(x => x === key).length
    });
  }
  return reslt;
}

function streamPrepper(dataset) {
  let reslt = [];

  let timePeriods = dataset
    .map(data => data.submissionDate)
    .map(date => new Date(Date.parse(date)))
    .map(date2 => date2.toDateString())
    .filter(onlyUnique);

  let allLocations = dataset.map(data => data.location).filter(onlyUnique);

  for (let time of timePeriods) {
    reslt.push(parser(time));
  }
  function parser(time) {
    let objkt = {};

    for (let loc of allLocations) {
      objkt[loc] = dataset.filter(
        x =>
          new Date(Date.parse(x.submissionDate)).toDateString() === time &&
          x.location === loc
      ).length;
    }

    return objkt;
  }

  let final = [reslt, allLocations];

  return final;
}

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
