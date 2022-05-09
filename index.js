
'use strict'

const range = (min, max) => [...Array(max - min + 1).keys()].map(i => String(i + min))

const al = range(35004, 36925); // alabama
const ak = range(99501, 99950); // alaska
const az = range(85001, 86556); // arizona
const ar = range(71601, 72959); // arkansas
const ca = range(90001, 96162); // california
const co = range(80001, 81658); // colorado
const ct = range(6001, 6928);  // connecticut
const de = range(19701, 19980); // delaware
const fl = range(32003, 34997); // florida
const ga = range(30002, 39901); // georgia
const hi = range(96701, 96898); // hawaii
const id = range(83201, 83877); // idaho
const il = range(60001, 62999); // illinois;
const ind = range(46001, 47997); // indiana
const ia = range(50001, 52809); // iowa
const ks = range(66002, 67954); // kansas
const ky = range(40003, 42788); // kentucky
const la = range(70001, 71497); // louisiana
const me = range(3901, 4992); // maine
const md = range(20588, 21930); // maryland
const ma = range(1001, 5544); // massachusetts
const mi = range(48001, 49971); // michigan
const mn = range(55001, 56763); // minnesota
const ms = range(38601, 39776); // mississippi
const mo = range(63001, 65899); // missouri
const mt = range(59001, 59937); // montana
const ne = range(68001, 69367); // nebraska
const nv = range(88901, 89883); // nevada
const nh = range(3031, 3897); // new hampshire
const nj = range(7001, 8989); // new jersey
const nm = range(87001, 88439); // new mexico
const ny = range(501, 14925); // new york
const nc = range(27006, 28909); // north carolina
const nd = range(58001, 58856); // north dakota
const oh = range(43001, 45999); // ohio
const ok = range(73001, 74966); // oklahoma
const or = range(97001, 97920); // oregon
const pa = range(15001, 19640); // pennsylvania
const ri = range(2801, 2940); // rhode island
const sc = range(29001, 29945); // south carolina
const sd = range(57001, 57799); // south dakota
const tn = range(37010, 38589); // tennessee
const tx = range(73301, 88595); // texas
const ut = range(84001, 84791); // utah
const vt = range(5001, 5907); // vermont
const va = range(20101, 24658); // virginia
const wa = range(98001, 99403); // washington
const wv = range(24701, 26886); // west virginia
const wi = range(53001, 54990); // wisconsin
const wy = range(82001, 83414); // wyoming


const zipCodes = {
  'al': al,
  'ak': ak,
  'az': az,
  'ar': ar,
  'ca': ca,
  'co': co,
  'ct': ct,
  'de': de,
  'fl': fl,
  'ga': ga,
  'hi': hi,
  'id': id,
  'il': il,
  'ind': ind,
  'ia': ia,
  'ks': ks,
  'ky': ky,
  'la': la,
  'me': me,
  'md': md,
  'ma': ma,
  'mi': mi,
  'mn': mn,
  'ms': ms,
  'mo': mo,
  'mt': mt,
  'ne': ne,
  'nv': nv,
  'nh': nh,
  'nj': nj,
  'nm': nm,
  'ny': ny,
  'nc': nc,
  'nd': nd,
  'oh': oh,
  'ok': ok,
  'or': or,
  'pa': pa,
  'ri': ri,
  'sc': sc,
  'sd': sd,
  'tn': tn,
  'tx': tx,
  'ut': ut,
  'vt': vt,
  'va': va,
  'wa': wa,
  'wv': wv,
  'wi': wi,
  'wy': wy,
  'alabama': al,
  'alaska': ak,
  'arizona': az,
  'arkansas': ar,
  'california': ca,
  'colorado': co,
  'connecticut': ct,
  'delaware': de,
  'florida': fl,
  'georgia': ga,
  'hawaii': hi,
  'idaho': id,
  'illinois': il,
  'indiana': ind,
  'iowa': ia,
  'kansas': ks,
  'kentucky': ky,
  'louisiana': la,
  'maine': me,
  'maryland': md,
  'massachusetts': ma,
  'michigan': mi,
  'minnesota': mn,
  'mississippi': ms,
  'missouri': mo,
  'montana': mt,
  'nebraska': ne,
  'nevada': nv,
  'new hampshire': nh,
  'new jersey': nj,
  'new mexico': nm,
  'new york': ny,
  'north carolina': nc,
  'north dakota': nd,
  'ohio': oh,
  'oklahoma': ok,
  'oregon': or,
  'pennsylvania': pa,
  'rhode island': ri,
  'south carolina': sc,
  'south dakota': sd,
  'tennessee': tn,
  'texas': tx,
  'utah': ut,
  'vermont': vt,
  'virginia': va,
  'washington': wa,
  'west virginia': wv,
  'wisconsin': wi,
  'wyoming': wy,
}

exports.validate = function validate(province, zip) {
  const prefix = zipCodes[province.toLowerCase()];

  if (prefix) {
    if (typeof(prefix) == 'object') {

      if (prefix.includes(String(zip))) {
        return true
      }
      else {
        return false
      }

    }
  }
}