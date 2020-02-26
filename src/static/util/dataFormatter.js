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
  console.log(dataset);
  let keys = dataset.map(data => data.location).filter(onlyUnique);
  let values = dataset.length;

  let grouped = dataset.reduce((accumulator, itrtr) => {
    accumulator[itrtr.location] = accumulator[itrtr.location] + 1 || 1;
    return accumulator;
  }, {});
  console.log("keys");
  console.log(grouped);
  return "barprep";
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

  console.log(reslt);
  // let values = dataset.length;

  // let grouped = dataset.reduce((accumulator, itrtr) => {
  //   let date = (new Date(itrtr.submissionDate)).toDateString();
  //   accumulator["date"] = [accumulator[date] =  accumulator[date] + 1 || 1]
  //   return accumulator;
  // }, {});

  return reslt;
}

function streamPrepper(dataset) {
  console.log(dataset);
  return "streamprep";
}

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
